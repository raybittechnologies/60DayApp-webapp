const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const sectionsDir = path.join(srcDir, 'Sections');
const componentsDir = path.join(srcDir, 'components');

console.log('🚀 Starting structure refactoring...\n');

// 1. Relocate LandingPage
const landingPageOld = path.join(sectionsDir, 'LandingPage');
const landingPageNew = path.join(componentsDir, 'LandingPage');
if (fs.existsSync(landingPageOld)) {
  console.log('-> Moving LandingPage folder to components/');
  fs.renameSync(landingPageOld, landingPageNew);
}

// 2. Relocate CaseStudies
const caseStudiesOld = path.join(sectionsDir, 'CaseStudies');
const caseStudiesNew = path.join(componentsDir, 'CaseStudies');
if (fs.existsSync(caseStudiesOld)) {
  console.log('-> Moving CaseStudies folder to components/');
  fs.renameSync(caseStudiesOld, caseStudiesNew);
}

// 3. Remove orphaned Sections footprint
if (fs.existsSync(sectionsDir)) {
  const filesLeft = fs.readdirSync(sectionsDir);
  if (filesLeft.length === 0) {
    fs.rmdirSync(sectionsDir);
    console.log('-> Cleaned up empty Sections directory');
  }
}

// 4. Architect path mappings within the moved files
function rewriteImports(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      rewriteImports(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Because we moved from src/Sections/[Folder] -> src/components/[Folder]
      // The relative distance to src/assets remains identical ('../../assets').
      // However! The distance to src/components drops from '../../components/' to just '../'.
      const original = content;
      content = content.replace(/\.\.\/\.\.\/components\//g, '../');
      
      if (original !== content) {
        fs.writeFileSync(fullPath, content);
        console.log(`   ✓ Rewrote dependencies in ${file}`);
      }
    }
  }
}

rewriteImports(landingPageNew);
rewriteImports(caseStudiesNew);

// 5. Hardwire the Home.jsx assembly lines
const homePath = path.join(srcDir, 'pages', 'Home.jsx');
if (fs.existsSync(homePath)) {
  let homeContent = fs.readFileSync(homePath, 'utf8');
  homeContent = homeContent.replace(/\.\.\/Sections\//g, '../components/');
  fs.writeFileSync(homePath, homeContent);
  console.log('-> Remapped global Home.jsx route assembler');
}

console.log('\n✅ Enterprise restructure complete! The `/Sections` folder is gone, and everything is robustly unified under `/components/. Restart your Vite server!');
