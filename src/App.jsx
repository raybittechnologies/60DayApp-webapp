


import React from 'react';
import Navbar      from './components/layout/Navbar';
import Hero        from './Sections/LandingPage/Hero';
import Problem     from './Sections/LandingPage/Problem';
import Process     from './Sections/LandingPage/Process';
import Features    from './Sections/LandingPage/Features';
import SocialProof from './Sections/LandingPage/SocialProof';
import CaseStudies from './Sections/LandingPage/CaseStudies';
import CTA         from './Sections/LandingPage/CTA';
import Footer      from './components/layout/Footer';

function App() {
  return (
   
    <div className="w-full min-h-screen bg-bg-peach">
      <div className="w-full max-w-[1440px] mx-auto relative overflow-x-hidden">
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
    </div>
  );
}

export default App;