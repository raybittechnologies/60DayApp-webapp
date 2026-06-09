"use client";


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerScale, viewport } from '@/utils/motionVariants';
import EyebrowPill from '@/components/ui/EyebrowPill';

import blueprintImg from '@/assets/svgs/blueprint.svg';
import buildImg from '@/assets/svgs/build.svg';
import adminImg from '@/assets/svgs/admin.svg';
import launchImg from '@/assets/svgs/launch.svg';

const GreenTick = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.33 4L6 11.33 2.67 8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProcessCard = ({ title, desc, items, iconImg, active }) => (
  <motion.div
    className="relative mx-auto w-full max-w-[263px] rounded-[32px] overflow-hidden flex flex-col cursor-default"
    animate={
      active
        ? {
          y: -10,
          scale: 1.02
        }
        : {
          y: 0,
          scale: 1.0
        }
    }
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    style={{
      minHeight: '350px',
      backgroundColor: '#FF80551A',
      boxShadow: '0 0 0 1px rgba(240, 90, 40, 0.05), 0 4px 12px rgba(240, 90, 40, 0.08)'
    }}
  >
    <div
      className="relative w-full h-[96px] bg-[#FF8055] shrink-0"
      style={{ borderBottomLeftRadius: '32px' }}
    >
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center z-30 p-2.5 transition-all duration-500 shadow-md ${active ? 'scale-110' : 'scale-100'}`}>
        <img src={iconImg} alt={`${title} icon`} className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[-1px] bottom-[-49px] w-[50px] h-[50px] z-20">
        <svg viewBox="0 0 48 48" className="w-full h-full fill-[#FF8055]" preserveAspectRatio="none">
          <path d="M0 0 Q 48 0 48 48 L 48 0 Z" />
        </svg>
      </div>
    </div>

    <div className="flex flex-col flex-grow px-[16px] pb-[20px] pt-[20px]">
      <h3 className="font-heading font-bold text-[30px] text-center text-[#1A1A1A] leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-center font-normal text-[15px] lg:text-[18px] leading-[1.5] lg:leading-[1.6] text-[#1A1A1A] mt-[12px] px-1 font-body">
        {desc}
      </p>
      <div className="mt-auto pt-[16px]">
        <ul className="flex flex-wrap justify-between gap-y-[12px] w-full">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-[6px] text-[#1A1A1A] ${item.fullWidth ? 'w-full' : 'w-auto'}`}
            >
              <div className="flex-shrink-0 mt-[4px] flex items-center justify-center"><GreenTick /></div>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '160%',
                  letterSpacing: '0px',
                  textAlign: 'left',
                }}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);



const TimelineColumn = ({ number, active, isFirst, isLast, cardData, idx, activeStep }) => {
  const isLeftLineActive = idx === activeStep;
  const isRightLineActive = idx === activeStep - 1;

  return (
    <div className="relative w-full flex flex-col items-center h-full">

      {/* Left connector line */}
      {!isFirst && (
        <div
          className="hidden lg:block absolute top-[29px] left-0 right-1/2 h-[5px] transition-colors duration-500 z-0"
          style={{ backgroundColor: isLeftLineActive ? '#FF8055' : '#E5E7EB' }}
        />
      )}

      {/* Right connector line */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-[29px] left-1/2 right-[-42px] h-[5px] transition-colors duration-500 z-0"
          style={{ backgroundColor: isRightLineActive ? '#FF8055' : '#E5E7EB' }}
        />
      )}

      {/* Top vertical connector line to bridge the mobile vertical layout gaps */}
      <div
        className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[-24px] sm:top-[-32px] w-[2px] h-[24px] sm:h-[32px] transition-colors duration-500 z-0"
        style={{ backgroundColor: isLeftLineActive ? '#FF8055' : '#E5E7EB' }}
      />

      {/* Step number bubble */}
      <div
        className="relative z-10 w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center font-heading font-extrabold text-[14px] sm:text-[16px] transition-all duration-500"
        style={
          active
            ? { backgroundColor: '#FF8055', color: '#ffffff', border: '1px solid #FFCAB2' }
            : { backgroundColor: '#F3F4F6', color: '#9AA0A6', border: '2px solid #E5E7EB' }
        }
      >
        {number}
      </div>

      {/* Vertical connector */}
      <div
        className="w-[2px] h-[24px] sm:h-[32px] transition-colors duration-500"
        style={{ backgroundColor: active ? '#FF8055' : '#E5E7EB' }}
      />

      <div className="w-full flex-grow flex">
        <ProcessCard {...cardData} active={active} />
      </div>
    </div>
  );
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      cardData: {
        title: "Blueprint",
        desc: "Define MVP features, user flows and wireframes. Lock Scope before writing a single line of code.",
        iconImg: blueprintImg.src,
        items: [{ text: "Feature Specs docs" }, { text: "Wireframes" }, { text: "Tech Architecture", fullWidth: true }]
      }
    },
    {
      number: "02",
      cardData: {
        title: "Build",
        desc: "Cross-platform mobile app development. iOS and Android built simultaneously with clean architecture.",
        iconImg: buildImg.src,
        items: [{ text: "iOS and Android apps", fullWidth: true }, { text: "Core features Live" }, { text: "Internal Beta" }]
      }
    },
    {
      number: "03",
      cardData: {
        title: "Admin",
        desc: "Backend infrastructure, admin dashboard, and payment integration. The engine powering your app.",
        iconImg: adminImg.src,
        items: [{ text: "Backend API" }, { text: "Admin dashboard" }, { text: "Stripe Payments", fullWidth: true }]
      }
    },
    {
      number: "04",
      cardData: {
        title: "Launch",
        desc: "App Store and Play Store submission, QA, go-live support. Your startup is officially live.",
        iconImg: launchImg.src,
        items: [{ text: "App Store live" }, { text: "Play store live" }, { text: "Go-Live Support", fullWidth: true }]
      }
    }
  ];

  return (
    <section id="how" className="section-outer relative overflow-hidden">
      <div className="section-inner flex flex-col items-center">

        <motion.div
            className="flex flex-col items-center max-w-[800px] mb-[40px] sm:mb-[56px] lg:mb-[64px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <EyebrowPill variant="label">How it Works</EyebrowPill>
          <h2 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Our <span className="text-[#F05A28]">60-Day</span> Launch <br /> Framework
          </h2>
          <p className="font-body text-[16px] sm:text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px]">
            A battle tested 4-phase process. From <span className="text-[#F05A28]">concept to App Store</span> in exactly 60 days — no exceptions
          </p>
        </motion.div>

        <motion.div
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] lg:gap-[42px] w-full items-stretch"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {steps.map((step, idx) => (
            <motion.div key={step.number} variants={staggerScale}>
              <TimelineColumn
                key={step.number}
                number={step.number}
                active={idx === activeStep}
                isFirst={idx === 0}
                isLast={idx === steps.length - 1}
                cardData={step.cardData}
                idx={idx}
                activeStep={activeStep}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
