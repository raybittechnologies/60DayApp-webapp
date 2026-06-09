import React from 'react';
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Process from "@/components/home/Process";
import Features from "@/components/home/Features";
import SocialProof from "@/components/home/SocialProof";
import CaseStudies from "@/components/home/Home_Case_Studies";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: 'Launch Your App MVP in 60 Days | 60DayApp',
  description: 'We build your cross-platform mobile app, backend, admin dashboard, and get it live on the App Store — all in 60 days. Guaranteed.',
  openGraph: {
    title: 'Launch Your App MVP in 60 Days | 60DayApp',
    description: 'Cross-platform app, backend, dashboard & App Store launch — in 60 days. Guaranteed.',
  },
};

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
