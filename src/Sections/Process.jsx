import React, { useState, useEffect } from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

import blueprintImg from '../assets/svgs/blueprint.svg';
import buildImg from '../assets/svgs/build.svg';
import adminImg from '../assets/svgs/admin.svg';
import launchImg from '../assets/svgs/launch.svg';

const GreenTick = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.33 4L6 11.33 2.67 8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProcessCard = ({ title, desc, items, iconImg }) => (
  <div
    className="relative w-full h-full rounded-[32px] overflow-hidden flex flex-col cursor-default"
    style={{
      background: 'rgba(240, 90, 40, 0.08)',
      boxShadow: '0 0 0 1px rgba(240, 90, 40, 0.05), 0 4px 12px rgba(240, 90, 40, 0.08)'
    }}
  >
    {/* Orange Header */}
    <div className="relative w-full h-[120px] sm:h-[140px] bg-[#FF8055] rounded-bl-[48px]">

      {/* Circle Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] bg-white rounded-full flex items-center justify-center z-30 shadow-lg p-3 sm:p-4">
        <img
          src={iconImg}
          alt={`${title} icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Inverted Scoop */}
      <div className="absolute right-0 bottom-[-48px] w-[48px] h-[48px] z-20">
        <svg viewBox="0 0 48 48" className="w-full h-full fill-[#FF8055]">
          <path d="M0 0 Q 48 0 48 48 L 48 0 Z" />
        </svg>
      </div>
    </div>

    {/* Body Content */}
    <div className="flex flex-col flex-grow px-[20px] sm:px-[24px] pb-[28px] sm:pb-[32px] pt-[28px] sm:pt-[32px]">
      <h3 className="font-heading font-[600] text-[22px] sm:text-[28px] text-center text-[#1A1A1A] leading-tight tracking-tight">
        {title}
      </h3>

      <p className="text-center font-[400] text-[16px] sm:text-[18px] leading-[1.6] text-[#1A1A1A] mt-[12px] sm:mt-[16px] px-1 font-inter">
        {desc}
      </p>

      {/* Feature Grid */}
      <div className="mt-auto pt-[16px] sm:pt-[20px]">
        <ul className="grid grid-cols-2 gap-x-[1px] gap-y-[8px] sm:gap-y-[10px]">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-[8px] font-[400] text-[#1A1A1A] text-[11px] sm:text-[12px] leading-tight ${item.fullWidth ? 'col-span-2' : ''}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <GreenTick />
              </div>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TimelineColumn = ({ number, active, isFirst, isLast, cardData, idx, activeStep }) => {
  const isLeftLineActive = idx === activeStep;
  const isRightLineActive = idx === activeStep - 1;

  return (
    <div className="relative w-full flex flex-col items-center h-full">

      {!isFirst && (
        <div className={`hidden lg:block absolute top-[29px] left-0 right-1/2 h-[5px] transition-colors duration-500 z-0 ${isLeftLineActive ? 'bg-[#FF8055]' : 'bg-[#E5E7EB]'}`} />
      )}
      {!isLast && (
        <div className={`hidden lg:block absolute top-[29px] left-1/2 right-[-42px] h-[5px] transition-colors duration-500 z-0 ${isRightLineActive ? 'bg-[#FF8055]' : 'bg-[#E5E7EB]'}`} />
      )}

      {/* Number Node */}
      <div className={`relative z-10 w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center font-heading font-extrabold text-[14px] sm:text-[16px] transition-all duration-500
        ${active
          ? 'bg-[#FF8055] text-white border-[1px] border-[#FFCAB2]'
          : 'bg-[#F3F4F6] text-[#9AA0A6] border-[2px] border-[#E5E7EB]'
        }
      `}>
        {number}
      </div>

      <div className={`w-[2px] h-[24px] sm:h-[32px] transition-colors duration-500 ${active ? 'bg-[#FF8055]' : 'bg-[#E5E7EB]'}`} />

      {/* Card */}
      <div className="w-full flex-grow flex">
        <ProcessCard {...cardData} />
      </div>
    </div>
  );
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      cardData: {
        title: "Blueprint",
        desc: "Define MVP features, user flows and wireframes. Lock Scope before writing a single line of code.",
        iconImg: blueprintImg,
        items: [
          { text: "Feature Specs docs" },
          { text: "Wireframes" },
          { text: "Tech Architecture", fullWidth: true }
        ]
      }
    },
    {
      number: "02",
      cardData: {
        title: "Build",
        desc: "Cross-platform mobile app development. iOS and Android built simultaneously with clean architecture.",
        iconImg: buildImg,
        items: [
          { text: "iOS and Android apps", fullWidth: true },
          { text: "Core features Live" },
          { text: "Internal Beta" }
        ]
      }
    },
    {
      number: "03",
      cardData: {
        title: "Admin",
        desc: "Backend infrastructure, admin dashboard, and payment integration. The engine powering your app.",
        iconImg: adminImg,
        items: [
          { text: "Backend API" },
          { text: "Admin dashboard" },
          { text: "Stripe Payments", fullWidth: true }
        ]
      }
    },
    {
      number: "04",
      cardData: {
        title: "Launch",
        desc: "App Store and Play Store submission, QA, go-live support. Your startup is officially live.",
        iconImg: launchImg,
        items: [
          { text: "App Store live" },
          { text: "Play store live" },
          { text: "Go-Live Support", fullWidth: true }
        ]
      }
    }
  ];

  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden">
      <div className="w-full max-w-[1280px] px-4 sm:px-8 lg:px-[24px] flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center max-w-[800px] mb-[40px] sm:mb-[56px] lg:mb-[64px]">
          <EyebrowPill variant="label">How it Works</EyebrowPill>

          <h2 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Our <span className="text-[#F05A28]">60-Day</span> Launch <br /> Framework
          </h2>

          <p className="font-body text-[16px] sm:text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px]">
            A battle tested 4-phase process. From <span className="text-[#F05A28]">concept to App Store</span> in exactly 60 days — no exceptions
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] lg:gap-[42px] w-full items-stretch">
          {steps.map((step, idx) => (
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
          ))}
        </div>

      </div>
    </section>
  );
}