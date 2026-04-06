


import React from 'react';
import EyebrowPill from '../../components/ui/EyebrowPill';
import Button from '../../components/ui/Button';
import Phone1 from '../../assets/images/phone1.png';
import Phone2 from '../../assets/images/phone2.png';

const MockupGroupA = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={Phone1} alt="App Mockup" className="w-full h-full object-contain" />
  </div>
);

const MockupGroupB = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={Phone2} alt="App Mockup" className="w-full h-full object-contain" />
  </div>
);

const CaseStudyCard = ({ tagLabel, badgeTime, title, desc, stat1, stat2, stat3, pills, mockupGroup }) => (
  <div className="group relative w-full bg-[#FFF3EE] border border-[#FFCAB2] shadow-[0_4px_16px_rgba(200,100,50,0.06)] rounded-[32px] p-[16px] flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,100,50,0.12)]">

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
      <div className="flex items-center justify-between px-[8px] pb-[8px]">
        <div className="flex flex-col flex-1">
          <span className="font-heading font-semibold text-[22px] sm:text-[28px] text-[#F05A28] leading-none tracking-tight">{stat1.value}</span>
          <span className="font-body font-normal text-[12px] sm:text-[14px] text-[#1A1A1A] mt-[4px] leading-[1.2] max-w-[60px]">{stat1.label}</span>
        </div>
        <div className="w-[2px] h-[36px] bg-[#DE8662]/20 mx-[6px] sm:mx-[8px] lg:mx-[16px]" />
        <div className="flex flex-col flex-1">
          <span className="font-heading font-semibold text-[22px] sm:text-[28px] text-[#F05A28] leading-none tracking-tight">{stat2.value}</span>
          <span className="font-body font-normal text-[12px] sm:text-[14px] text-[#1A1A1A] mt-[4px] leading-[1.2] max-w-[60px]">{stat2.label}</span>
        </div>
        <div className="w-[2px] h-[36px] bg-[#DE8662]/20 mx-[6px] sm:mx-[8px] lg:mx-[16px]" />
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-[2px]">
            <span className="font-heading font-semibold text-[22px] sm:text-[28px] text-[#F05A28] leading-none tracking-tight">{stat3.value}</span>
            {stat3.icon && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#D8562B]">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            )}
          </div>
          <span className="font-body font-normal text-[12px] sm:text-[14px] text-[#1A1A1A] mt-[4px] leading-[1.2] max-w-[60px]">{stat3.label}</span>
        </div>
        <div className="flex flex-col gap-[5px] sm:gap-[6px] items-end shrink-0 ml-[6px] sm:ml-[8px] xl:ml-[16px]">
          {pills.map((p, i) => (
            <div key={i} className="bg-[#FFCAB2] text-[#C03A10] px-[8px] sm:px-[10px] py-[3px] sm:py-[4px] rounded-[4px] font-heading font-normal text-[10px] sm:text-[11px] xl:text-[12px] whitespace-nowrap border border-[#F7BFAF]/50">{p}</div>
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
    /*
      ─ Use section-outer / section-inner for consistent 1440/1280 layout.
      ─ Remove hardcoded px-[16px] sm:px-[40px] md:px-[80px] — section-outer handles this.
    */
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[32px] w-full">
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