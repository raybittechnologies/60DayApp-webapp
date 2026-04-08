import React from 'react';
import Hero from '../components/LandingPage/Hero';
import Problem from '../components/LandingPage/Problem';
import Process from '../components/LandingPage/Process';
import Features from '../components/LandingPage/Features';
import SocialProof from '../components/LandingPage/SocialProof';
import CaseStudies from '../components/LandingPage/Home_Case_Studies';
import CTA from '../components/LandingPage/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Process />
      <Features />
      <SocialProof />
      <CaseStudies />
      <CTA />
    </>
  );
}
