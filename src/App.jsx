/* ============================================================
   App.jsx — The root component. The shell of the whole page.
   
   Think of this as the outer box that holds everything:
   - It sets the max width of the page (1440px)
   - It sets the background color
   - It renders the Navbar (floating on top)
   - It renders all sections in order, top to bottom
   
   RULE: Don't put any layout or styling logic here.
   This file is only for importing and ordering sections.
   ============================================================ */

import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero   from './Sections/Hero';

// Uncomment these one by one as you build each section:
import Problem     from './Sections/Problem';
import Process     from './Sections/Process';
import Features    from './Sections/Features';
import SocialProof from './Sections/SocialProof';
import CaseStudies from './Sections/CaseStudies';
import CTA         from './Sections/CTA';
import Footer      from './components/layout/Footer';

function App() {
  return (
    /*
      This outer div is the page container:

      w-full             → stretches to full browser width
      max-w-[1440px]     → but never wider than 1440px
      mx-auto            → centers it on very wide screens
      min-h-screen       → at least the full viewport height
      bg-bg-soft-gray    → light gray page background (#F5F6F8)
      relative           → IMPORTANT: Navbar uses absolute positioning,
                           so this parent needs relative so Navbar
                           positions itself relative to this box,
                           not the browser window
      overflow-x-hidden  → prevents any horizontal scroll if something
                           accidentally overflows
    */
    <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-bg-soft-gray relative overflow-x-hidden">

      {/* Navbar floats above everything using absolute positioning */}
      <Navbar />

      {/* All sections stack vertically inside main */}
      <main>
        <Hero />

        {/* Add more sections below as you build them: */}
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