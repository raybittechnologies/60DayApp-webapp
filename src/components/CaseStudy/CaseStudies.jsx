import React from 'react';
import EyebrowPill from '../ui/EyebrowPill';
import Button from '../ui/Button';
import CaseStudyCard from '../CaseStudies/CaseStudyCard';

export default function CaseStudies() {
  const expenseCard = {
    tagLabel: "Expense Tracker",
    badgeTime: "8 week",
    title: "Expense Tracking Mobile App",
    desc: "A smart expense tracking app with AI-powered spend categorisation, budget alerts, multi-currency support, and monthly reports — built and live on both stores in just 8 weeks.",
    mockupGroup: 'A',
    stat1: { value: "8wk", label: "Built & launched" },
    stat2: { value: "1k+", label: "Users in first month" },
    stat3: { value: "4.8", label: "App Store rating", icon: true },
    pills: ["iOS + Android", "Stripe"],
  };

  const travelCard = {
    tagLabel: "Holiday Booking",
    badgeTime: "55 days",
    title: "Travel Booking Platform",
    desc: "A complete holiday booking app with flight search, hotel listings, itinerary planning, and secure payment checkout — from wireframes to both App Stores in 55 days.",
    mockupGroup: 'B',
    stat1: { value: "55d", label: "Idea to both stores" },
    stat2: { value: "500+", label: "Bookings in week one" },
    stat3: { value: "4.8", label: "App Store rating", icon: true },
    pills: ["Hotel Listings", "Stripe"],
  };

  return (
    <section id="cases" className="section-outer relative pt-[20px] pb-[40px] sm:pb-[60px] overflow-hidden">
      <div className="section-inner flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center mb-[48px] sm:mb-[80px]">
          <EyebrowPill variant="label">Case Studies</EyebrowPill>
          <h2 className="font-heading font-bold text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Real Startups. <br /> <span className="text-[#FA6A31]">Real Results.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[32px] w-full max-w-[600px] lg:max-w-none mx-auto">
          <CaseStudyCard {...expenseCard} />
          <CaseStudyCard {...travelCard} />
          <CaseStudyCard {...expenseCard} />
          <CaseStudyCard {...travelCard} />
        </div>

        <div className="w-full flex justify-center mt-[40px] sm:mt-[64px]">
          <Button variant="ghost" showArrow={true}>View all Case Studies</Button>
        </div>
      </div>
    </section>
  );
}
