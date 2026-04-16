"use client";



import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport, float } from '@/utils/motionVariants';
import EyebrowPill from '@/components/ui/EyebrowPill';
import Button from '@/components/ui/Button';
import Phone1 from '@/assets/images/phone1.png';
import Phone2 from '@/assets/images/phone2.png';

const MockupGroupA = () => (
  <div className="w-full h-full flex items-center justify-center pt-4">
    <motion.img 
      src={Phone1.src} 
      alt="App Mockup" 
      className="w-full h-full object-contain" 
      animate={float}
    />
  </div>
);

const MockupGroupB = () => (
  <div className="w-full h-full flex items-center justify-center pt-4">
    <motion.img 
      src={Phone2.src} 
      alt="App Mockup" 
      className="w-full h-full object-contain" 
      animate={{ y: [0, -12, 0], transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
    />
  </div>
);

const CaseStudyCard = ({ tagLabel, badgeTime, title, desc, stat1, stat2, stat3, pills, mockupGroup }) => (
  <div className="group relative w-full bg-[#FFF3EE] border border-[#FFCAB2] shadow-[0_4px_16px_rgba(200,100,50,0.06)] rounded-[32px] p-[16px] flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,100,50,0.12)] hover:-translate-y-[6px]">

    <div className="relative w-full h-[200px] sm:h-60 md:h-65 bg-linear-to-br from-white to-[#FAFAFA] rounded-[24px] shadow-sm overflow-hidden border border-white">

      <div
        className="absolute top-[12px] sm:top-[16px] left-[12px] sm:left-[16px] flex items-center gap-[6px] px-[10px] sm:px-[12px] py-[5px] sm:py-[6px] rounded-full shadow-sm z-30"
        style={{ backgroundColor: 'rgba(240, 90, 40, 0.08)', backdropFilter: 'blur(20px)', border: '1px solid #FF8055' }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-[#FF8055]" />
        <span className="font-heading font-normal text-[#F05A28] text-[12px] sm:text-[14px] tracking-tight">{tagLabel}</span>
      </div>

      <div className="absolute top-[12px] sm:top-[16px] right-3 sm:right-4 flex flex-col items-center justify-center px-[10px] sm:px-[12px] py-[6px] sm:py-[8px] bg-gradient-to-b from-[#C03A10] to-[#AE330B] border border-[#FF8055] rounded-[6px] shadow-md z-30 text-center leading-[1.1]">
        <span className="font-normal text-white text-[13px] sm:text-[16px] tracking-tight">{badgeTime}</span>
        <span className="font-normal text-white text-[13px] sm:text-[16px] uppercase mt-[3px] sm:mt-[4px] tracking-tight">Delivered</span>
      </div>

      {mockupGroup === 'A' ? <MockupGroupA /> : <MockupGroupB />}
    </div>

    <div className="flex flex-col flex-grow pt-[4px]">
      <h3 className="font-heading font-semibold text-[18px] sm:text-[20px] text-[#C03A10] mt-[16px] sm:mt-[20px] px-[8px] tracking-tight">{title}</h3>
      <p className="font-body text-[14px] sm:text-[16px] font-normal leading-[1.6] text-[#1A1A1A] mt-[8px] px-[8px] min-h-[56px] sm:min-h-[60px]">{desc}</p>
      <div className="w-full h-0 border-b-[2px] border-dotted border-[#DE8662]/30 my-[16px] sm:my-[20px]" />
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between px-[4px] sm:px-[8px] pb-[8px] gap-[10px] w-full">
        <div className="flex flex-row items-start justify-between flex-1 w-full sm:w-auto min-w-[200px]">
          <div className="flex flex-col flex-1">
            <span className="font-heading font-semibold text-[22px] sm:text-[28px] lg:text-[24px] xl:text-[28px] text-[#F05A28] leading-none tracking-tight whitespace-nowrap">{stat1.value}</span>
            <span className="font-body font-normal text-[12px] sm:text-[13px] xl:text-[14px] text-[#1A1A1A] mt-[4px] leading-[1.3] opacity-80">{stat1.label}</span>
          </div>
          <div className="w-[1.5px] h-[36px] bg-[#DE8662]/30 mx-[8px] sm:mx-[12px] mt-[4px]" />
          <div className="flex flex-col flex-1">
            <span className="font-heading font-semibold text-[22px] sm:text-[28px] lg:text-[24px] xl:text-[28px] text-[#F05A28] leading-none tracking-tight whitespace-nowrap">{stat2.value}</span>
            <span className="font-body font-normal text-[12px] sm:text-[13px] xl:text-[14px] text-[#1A1A1A] mt-[4px] leading-[1.3] opacity-80">{stat2.label}</span>
          </div>
          <div className="w-[1.5px] h-[36px] bg-[#DE8662]/30 mx-[8px] sm:mx-[12px] mt-[4px]" />
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-[2px]">
              <span className="font-heading font-semibold text-[22px] sm:text-[28px] lg:text-[24px] xl:text-[28px] text-[#F05A28] leading-none tracking-tight whitespace-nowrap">{stat3.value}</span>
              {stat3.icon && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#D8562B] mb-[2px]">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              )}
            </div>
            <span className="font-body font-normal text-[12px] sm:text-[13px] xl:text-[14px] text-[#1A1A1A] mt-[4px] leading-[1.3] opacity-80">{stat3.label}</span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col gap-[6px] items-center sm:items-end w-full sm:w-auto shrink-0 mt-[8px] sm:mt-0 pt-[10px] sm:pt-0 border-t sm:border-0 border-[#DE8662]/20">
          {pills.map((p, i) => (
            <div key={i} className="bg-[#FFCAB2] text-[#C03A10] px-[10px] py-[4px] rounded-[6px] font-heading font-medium text-[11px] sm:text-[12px] whitespace-nowrap border border-[#F7BFAF]/60 shadow-sm">{p}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
    
    <section id="cases" className="section-outer relative pt-[20px] pb-[10px] sm:pb-[20px] overflow-hidden">
      <div className="section-inner flex flex-col items-center">

        
        <motion.div
          className="flex flex-col items-center mb-[48px] sm:mb-[80px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <EyebrowPill variant="label">Case Studies</EyebrowPill>
          <h2 className="font-heading font-bold text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Real Startups. <br /> <span className="text-[#FA6A31]">Real Results.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[32px] w-full max-w-[600px] lg:max-w-none mx-auto"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={slideLeft}>
            <CaseStudyCard {...expenseCard} />
          </motion.div>
          <motion.div variants={slideRight}>
            <CaseStudyCard {...travelCard} />
          </motion.div>
          <motion.div variants={slideLeft}>
            <CaseStudyCard {...expenseCard} />
          </motion.div>
          <motion.div variants={slideRight}>
            <CaseStudyCard {...travelCard} />
          </motion.div>
        </motion.div>

        <div className="w-full flex justify-center mt-[40px] sm:mt-[64px]">
          <Button variant="ghost" showArrow={true}>View all Case Studies</Button>
        </div>
      </div>
    </section>
  );
}
