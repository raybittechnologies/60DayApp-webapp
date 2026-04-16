"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/utils/motionVariants';
import { caseStudiesData } from '@/data/caseStudies';

export default function ClientHeader({ id = 'expense-tracker' }) {
  const data = caseStudiesData[id]?.client || caseStudiesData['expense-tracker'].client;
  return (
    <motion.div 
      className="mx-auto bg-[#FF8055] rounded-[16px] overflow-hidden relative mb-[32px] md:mb-[48px] px-5 py-4 md:px-[40px] md:py-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 shadow-[0_8px_32px_rgba(255,128,85,0.15)] w-full max-w-[398px] md:max-w-[907px] h-[162px] md:min-h-[153px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      
      {/* Background Decorative Arcs - One left, one right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side Arc */}
        <div className="absolute top-[-30px] left-[-30px] opacity-70">
           <svg width="150" height="150">
              <circle cx="50" cy="50" r="95" stroke="#fff" strokeWidth="1.5" fill="none" />
           </svg>
        </div>

        {/* Right Side Arcs - Top-right and Bottom-right corners */}
        <div className="absolute top-[-90px] right-[-90px] opacity-70">
           <svg width="220" height="220">
              <circle cx="110" cy="110" r="105" stroke="white" strokeWidth="1.5" fill="none" />
           </svg>
        </div>
        <div className="absolute bottom-[-90px] right-[-90px] opacity-70">
           <svg width="220" height="220">
              <circle cx="110" cy="110" r="105" stroke="white" strokeWidth="1.5" fill="none" />
           </svg>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-[24px] z-10 w-full md:w-auto">
        {/* Logo Circle */}
        <div className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] bg-white rounded-full flex items-center justify-center shadow-sm flex-none">
          <span className="font-heading italic font-extrabold text-[#1A1A1A] text-[18px] md:text-[24px] tracking-tight">{data.initials}</span>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="font-heading font-bold text-[18px] md:text-[24px] leading-tight text-white tracking-tight">
            {data.name}
          </h3>
          <p className="font-body font-normal text-[14px] md:text-[17px] text-white/90">
            {data.location}
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-white text-[#1A1A1A] font-heading font-bold text-base md:text-[20px] tracking-tight w-full md:w-[291px] h-[44px] md:h-[70px] rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 z-10 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 group shrink-0">
        Visit App 
        <svg 
          className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1.5" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </motion.div>
  );
}
