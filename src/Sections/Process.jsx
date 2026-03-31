import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

const GreenTick = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.33 4L6 11.33 2.67 8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProcessCard = ({ title, desc, icon, items }) => (
  <div className="relative w-full h-[380px] flex flex-col group transition-transform duration-300 hover:-translate-y-2 cursor-default">
    
    {/* Orange Background layer framing the notch */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FA8B61] to-[#F26B3B] rounded-[24px] shadow-[0_16px_40px_rgba(240,90,40,0.1)]" />

    {/* Beige Main Body overlapping the bottom. 
        Top-right is rounded to reveal the orange, simulating a folder tab. */}
    <div className="absolute bottom-0 left-0 w-full h-[calc(100%-76px)] bg-gradient-to-br from-[#F5EBE6] to-[#EBDCD7] rounded-tl-[0px] rounded-tr-[48px] border-b-[2px] border-r-[2px] border-white/60 z-10 shadow-[-4px_-4px_12px_rgba(0,0,0,0.02)]" />

    {/* Content Container */}
    <div className="relative z-20 flex flex-col h-full px-[24px] pt-[28px] pb-[32px]">
      
      {/* Centered Icon Floating Above Line */}
      <div className="w-full flex justify-center">
        <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center shadow-sm text-[#F05A28]">
          {icon}
        </div>
      </div>

      <div className="flex-grow flex flex-col mt-[32px]">
        <h3 className="font-heading font-extrabold text-[24px] text-center text-[#222] tracking-tight">{title}</h3>
        <p className="text-center font-body text-[14px] font-medium leading-[1.6] text-[#4A4A4A] mt-[12px] min-h-[85px] px-[4px]">
          {desc}
        </p>

        {/* List items specific to each card */}
        <div className="mt-auto pt-[16px]">
          <ul className="grid grid-cols-2 gap-x-[8px] gap-y-[12px]">
            {items.map((item, idx) => (
              <li key={idx} className={`flex items-start gap-[6px] text-[#4A4A4A] text-[11px] font-bold tracking-tight leading-[1.3] ${item.fullWidth ? 'col-span-2' : ''}`}>
                <div className="mt-[2px] flex-shrink-0">
                  <GreenTick />
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </div>
);

const TimelineColumn = ({ number, active, isFirst, isLast, cardData }) => (
  <div className="relative w-full flex flex-col items-center">
    
    {/* Horizontal connecting lines (hidden on small screens for wrapping grids) */}
    {!isFirst && <div className="hidden lg:block absolute top-[28px] left-0 right-1/2 h-[2px] bg-[#E8EAED] z-0" />}
    {!isLast && <div className="hidden lg:block absolute top-[28px] left-1/2 right-0 h-[2px] bg-[#E8EAED] z-0" />}
    
    {/* Number Node */}
    <div className={`relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center font-heading font-extrabold text-[16px] transition-colors duration-300
      ${active 
        ? 'bg-[#F05A28] text-white shadow-[0_4px_24px_rgba(240,90,40,0.6)] border-[4px] border-[#FDEAE2]' 
        : 'bg-white text-[#9AA0A6] border-[2px] border-[#E8EAED]'
      }
    `}>
      {number}
    </div>

    {/* Vertical Stem down to card */}
    <div className={`w-[2px] h-[48px] ${active ? 'bg-[#F05A28]' : 'bg-[#E8EAED]'}`} />

    {/* The Card */}
    <div className="w-full">
      <ProcessCard {...cardData} />
    </div>

  </div>
);

export default function Process() {
  const steps = [
    {
      number: "01",
      active: true,
      cardData: {
        title: "Blueprint",
        desc: "Define MVP features, user flows and wireframes. Lock Scope before writing a single line of code.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        ),
        items: [
          { text: "Feature Spec docs" },
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
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        ),
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
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        ),
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
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg> /* Note: using a general distinct icon. Image has a tiny rocket */
        ),
        items: [
          { text: "App Store live" },
          { text: "Play store live" },
          { text: "Go-Live Support", fullWidth: true }
        ]
      }
    }
  ];

  return (
    <section className="relative w-full bg-bg-page flex justify-center items-start overflow-hidden pt-[120px] pb-[160px]">
      <div className="w-[1280px] px-[24px] flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center max-w-[800px] mb-[64px]">
          <EyebrowPill variant="label">How it Works</EyebrowPill>
          
          <h2 className="font-heading font-extrabold text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Our <span className="text-brand-orange">60-Day</span> Launch <br /> Framework
          </h2>
          
          <p className="font-body text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px]">
            A battle tested 4-phase process. From <span className="text-[#FA8B61]">concept to App Store</span> <br /> in exactly 60 days --- no exceptions
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {steps.map((step, idx) => (
            <TimelineColumn
              key={step.number}
              number={step.number}
              active={step.active}
              isFirst={idx === 0}
              isLast={idx === steps.length - 1}
              cardData={step.cardData}
            />
          ))}
        </div>

      </div>
    </section>
  );
}