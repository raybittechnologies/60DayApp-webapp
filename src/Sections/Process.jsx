import React, { useState, useEffect } from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';
import blueprintImg from '../assets/images/blueprint.png';
import buildImg from '../assets/images/build.png';
import adminImg from '../assets/images/admin.png';
import launchImg from '../assets/images/launch.png';

const GreenTick = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.33 4L6 11.33 2.67 8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProcessCard = ({ title, desc, iconImg, items }) => (
  <div className="relative w-full h-full bg-[#FE8C64] rounded-[24px] overflow-hidden flex flex-col cursor-default shadow-[0_8px_24px_rgba(43,46,52,0.06)] border border-[#E5DAD2] z-0">
    
    <div className="absolute bottom-0 left-0 w-full h-[calc(100%-110px)] bg-[#EBE2DA] rounded-tr-[28px] rounded-tl-none z-10" />

   
    <img 
      src={iconImg} 
      alt={title} 
      className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[72px] h-[72px] object-contain z-30 drop-shadow-[0_4px_12px_rgba(43,46,52,0.08)]" 
    />

    {/* Content Box */}
    <div className="relative z-20 flex flex-col flex-grow pt-[132px] px-[20px] pb-[32px]">
      <h3 className="font-heading font-extrabold text-[32px] text-center text-[#1A1A1A] leading-none tracking-[-0.02em]">{title}</h3>
      <p className="text-center font-body text-[16px] font-medium leading-[1.65] text-[#2B2E34] mt-[16px] px-[2px]">
        {desc}
      </p>

      {/* List items specific to each card */}
      <div className="mt-auto">
        <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[16px] pl-[8px]">
          {items.map((item, idx) => (
            <li key={idx} className={`flex items-start gap-[8px] text-[#1A1A1A] text-[14px] font-medium tracking-tight leading-[1.3] ${item.fullWidth ? 'col-span-2' : ''}`}>
              <div className="mt-[2px] flex-shrink-0">
                <GreenTick />
              </div>
              <span className="truncate pt-[1px]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TimelineColumn = ({ number, active, isFirst, isLast, cardData, idx, activeStep }) => {
  // A contiguous line connecting between the PREVIOUS active node and the CURRENT active node
  const isLeftLineActive = idx === activeStep;
  const isRightLineActive = idx === activeStep - 1;

  return (
    <div className="relative w-full flex flex-col items-center h-full">
      
      
      {!isFirst && <div className={`hidden lg:block absolute top-[29px] left-0 right-1/2 h-[5px] transition-colors duration-500 z-0 ${isLeftLineActive ? 'bg-[#F05A28]' : 'bg-[#E5E7EB]'}`} />}
      {!isLast && <div className={`hidden lg:block absolute top-[29px] left-1/2 right-[-42px] h-[5px] transition-colors duration-500 z-0 ${isRightLineActive ? 'bg-[#F05A28]' : 'bg-[#E5E7EB]'}`} />}
      
      {/* Number Node */}
      <div className={`relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center font-heading font-extrabold text-[16px] transition-all duration-500
        ${active 
          ? 'bg-[#F05A28] text-white border-[6px] border-[#FFCAB2]' 
          : 'bg-[#F6F6F6] text-[#9AA0A6] border-[2px] border-[#D1C6C0]'
        }
      `}>
        {number}
      </div>

      <div className={`w-[2px] h-[32px] transition-colors duration-500 ${active ? 'bg-[#F05A28]' : 'bg-[#D1C6C0]'}`} />

      {/* The Card */}
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
    }, 3000); // 3 seconds per step progression
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      active: true,
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
      active: false,
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
      active: false,
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
      active: false,
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
    <section className="relative w-full bg-soft-gray flex justify-center items-start overflow-hidden">
      <div className="w-[1280px] px-[24px] flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center max-w-[800px] mb-[64px]">
          <EyebrowPill variant="label">How it Works</EyebrowPill>
          
          <h2 className="font-heading font-extrabold text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Our <span className="text-[#F05A28]">60-Day</span> Launch <br /> Framework
          </h2>
          
          <p className="font-body text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px]">
            A battle tested 4-phase process. From <span className="text-[#F05A28]">concept to App Store</span> <br /> in exactly 60 days --- no exceptions
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[42px] w-full items-stretch">
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