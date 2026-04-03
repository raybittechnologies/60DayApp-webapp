

// import React from 'react';
// import Navbar from './components/layout/Navbar';
// import Hero   from './Sections/Hero';


// import Problem     from './Sections/Problem';
// import Process     from './Sections/Process';
// import Features    from './Sections/Features';
// import SocialProof from './Sections/SocialProof';
// import CaseStudies from './Sections/CaseStudies';
// import CTA         from './Sections/CTA';
// import Footer      from './components/layout/Footer';

// function App() {
//   return (
   
//     <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-[#FFF3EE] relative overflow-x-hidden">

//       <Navbar />

//       <main>
//         <Hero />

//         <Problem />
//         <Process />
//         <Features />
//         <SocialProof />
//         <CaseStudies />
//         <CTA />
//         <Footer />
//       </main>

//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar     from './components/layout/Navbar';
import Hero       from './Sections/Hero';
import Problem    from './Sections/Problem';
import Process    from './Sections/Process';
import Features   from './Sections/Features';
import SocialProof from './Sections/SocialProof';
import CaseStudies from './Sections/CaseStudies';
import CTA        from './Sections/CTA';
import Footer     from './components/layout/Footer';

function App() {
  return (
    /* bg-bg-peach = #FFF3EE (designer token) — was hardcoded before */
    <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-[#FFF3EE] relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Features />
        <SocialProof />
        <CaseStudies />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;