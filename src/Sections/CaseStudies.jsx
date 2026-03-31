import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

const MockupGroupA = () => (
  <div className="relative w-full h-full flex items-center justify-center -mt-[10px]">
    {/* Floor shadow */}
    <div className="absolute bottom-[15%] left-[50%] -translate-x-1/2 w-[180px] h-[20px] bg-black/5 blur-[12px] rounded-full" />
    
    {/* Tilted Phone (Left) */}
    <div className="absolute left-[40%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[190px] bg-white rounded-[16px] shadow-[-4px_16px_40px_rgba(0,0,0,0.1)] border-[3px] border-[#F1F5F9] rotate-[-24deg] overflow-hidden z-10 transition-transform duration-500 group-hover:rotate-[-28deg] group-hover:-translate-x-[2px]">
       <div className="w-full h-full bg-white flex flex-col p-[8px] gap-[6px]">
          {/* Header block */}
          <div className="w-full h-[24px] bg-[#E0E7FF] rounded-[4px] mb-[4px]" />
          {/* List items */}
          <div className="w-[85%] h-[8px] bg-[#F1F5F9] rounded-full" />
          <div className="w-[60%] h-[8px] bg-[#F1F5F9] rounded-full" />
          <div className="w-full h-[1px] bg-[#F1F5F9] my-[2px]" />
          <div className="flex items-center gap-[6px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#DBEAFE]" />
            <div className="flex-1 h-[8px] bg-[#F1F5F9] rounded-full" />
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#FCE7F3]" />
            <div className="flex-1 h-[8px] bg-[#F1F5F9] rounded-full" />
          </div>
          {/* Bottom Button */}
          <div className="mt-auto w-full h-[24px] bg-[#3B82F6] rounded-[4px]" />
       </div>
    </div>

    {/* Straight Phone (Right) */}
    <div className="absolute left-[58%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[110px] h-[210px] bg-white rounded-[16px] shadow-[8px_24px_48px_rgba(0,0,0,0.15)] border-[3px] border-[#F1F5F9] rotate-[8deg] overflow-hidden z-20 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:translate-x-[2px]">
       {/* Notch */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[12px] bg-[#F1F5F9] rounded-b-[6px] z-30" />
       
       <div className="w-full h-full bg-[#F8FAFC] flex flex-col p-[10px] pt-[20px] gap-[6px]">
          {/* Grid of stats */}
          <div className="grid grid-cols-2 gap-[6px]">
            <div className="w-full h-[32px] bg-white rounded-[6px] shadow-sm flex flex-col justify-center items-center gap-[2px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#10B981]/20" />
            </div>
            <div className="w-full h-[32px] bg-white rounded-[6px] shadow-sm flex flex-col justify-center items-center gap-[2px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#F59E0B]/20" />
            </div>
            <div className="w-full h-[32px] bg-white rounded-[6px] shadow-sm flex flex-col justify-center items-center gap-[2px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#6366F1]/20" />
            </div>
            <div className="w-full h-[32px] bg-white rounded-[6px] shadow-sm flex flex-col justify-center items-center gap-[2px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#EC4899]/20" />
            </div>
          </div>
          {/* Big chart area */}
          <div className="mt-[4px] w-full h-[64px] bg-white rounded-[8px] shadow-sm flex flex-col p-[6px] justify-between">
            <div className="w-[40%] h-[6px] bg-[#F1F5F9] rounded-full" />
            {/* Chart lines */}
            <div className="flex items-end h-[30px] gap-[4px]">
              <div className="flex-1 bg-[#BFDBFE] h-[40%] rounded-t-sm" />
              <div className="flex-1 bg-[#3B82F6] h-[70%] rounded-t-sm" />
              <div className="flex-1 bg-[#BFDBFE] h-[50%] rounded-t-sm" />
              <div className="flex-1 bg-[#93C5FD] h-[90%] rounded-t-sm" />
            </div>
          </div>
       </div>
    </div>
  </div>
);

const MockupGroupB = () => (
  <div className="relative w-full h-full flex items-center justify-center -mt-[10px]">
    <div className="absolute bottom-[15%] left-[50%] -translate-x-1/2 w-[180px] h-[20px] bg-black/5 blur-[12px] rounded-full" />
    
    <div className="absolute left-[40%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[190px] bg-white rounded-[16px] shadow-[-4px_16px_40px_rgba(0,0,0,0.1)] border-[3px] border-[#F1F5F9] rotate-[-24deg] overflow-hidden z-10 transition-transform duration-500 group-hover:rotate-[-28deg] group-hover:-translate-x-[2px]">
       <div className="w-full h-full bg-[#F0F9FF] flex flex-col p-[8px] gap-[6px]">
          <div className="w-full h-[40px] bg-[#BAE6FD] rounded-[6px] mb-[4px]" />
          <div className="w-[100%] h-[32px] bg-white rounded-[4px] shadow-sm" />
          <div className="w-[100%] h-[32px] bg-white rounded-[4px] shadow-sm" />
          <div className="w-[100%] h-[32px] bg-white rounded-[4px] shadow-sm" />
       </div>
    </div>

    <div className="absolute left-[58%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[110px] h-[210px] bg-white rounded-[16px] shadow-[8px_24px_48px_rgba(0,0,0,0.15)] border-[3px] border-[#F1F5F9] rotate-[8deg] overflow-hidden z-20 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:translate-x-[2px]">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[12px] bg-[#F1F5F9] rounded-b-[6px] z-30" />
       
       <div className="w-full h-full bg-white flex flex-col p-[10px] pt-[20px] gap-[6px]">
          <div className="w-full h-[60px] bg-[#E0F2FE] rounded-[8px] mb-[4px]" />
          <div className="flex gap-[6px]">
            <div className="flex-1 h-[40px] bg-[#F1F5F9] rounded-[4px]" />
            <div className="flex-1 h-[40px] bg-[#F1F5F9] rounded-[4px]" />
          </div>
          <div className="w-full h-[36px] bg-[#0284C7] rounded-[6px] mt-auto" />
       </div>
    </div>
  </div>
);

const CaseStudyCard = ({ tagLabel, badgeTime, title, desc, stat1, stat2, stat3, pills, mockupGroup }) => (
  <div className="group relative w-full bg-gradient-to-br from-[#FDF6F3] to-[#F1E5E0] border-[1px] border-white shadow-[0_4px_16px_rgba(200,100,50,0.06)] rounded-[32px] p-[16px] flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,100,50,0.12)]">
    
    {/* Image / Graphic Container */}
    <div className="relative w-full h-[240px] md:h-[260px] bg-gradient-to-br from-white to-[#FAFAFA] rounded-[24px] shadow-sm overflow-hidden border border-white">
      
      {/* Top Left Tag */}
      <div className="absolute top-[16px] left-[16px] flex items-center gap-[6px] px-[12px] py-[6px] bg-[#FFEBE3] border border-[#FADCD0] rounded-full shadow-sm z-30">
        <div className="w-[6px] h-[6px] rounded-full bg-[#E85D2A]" />
        <span className="font-heading font-extrabold text-[#E85D2A] text-[11px] tracking-tight">{tagLabel}</span>
      </div>

      {/* Top Right Badge */}
      <div className="absolute top-[16px] right-[16px] flex flex-col items-center justify-center px-[12px] py-[8px] bg-gradient-to-b from-[#CC471B] to-[#AE330B] rounded-[10px] shadow-md z-30 text-center leading-[1.1]">
        <span className="font-heading font-extrabold text-white text-[13px] tracking-tight">{badgeTime}</span>
        <span className="font-body font-bold text-white/90 text-[9px] uppercase mt-[2px] tracking-wide">Delivered</span>
      </div>

      {/* CSS Art Mockups */}
      {mockupGroup === 'A' ? <MockupGroupA /> : <MockupGroupB />}

    </div>

    {/* Body Content */}
    <div className="flex flex-col flex-grow pt-[4px]">
      <h3 className="font-heading font-extrabold text-[20px] text-[#D8562B] mt-[20px] px-[8px] tracking-tight">
        {title}
      </h3>
      <p className="font-body text-[13px] font-medium leading-[1.6] text-[#4A4B4B] mt-[8px] px-[8px] min-h-[60px]">
        {desc}
      </p>

      {/* Dashed Line */}
      <div className="w-full h-0 border-b-[2px] border-dotted border-[#DE8662]/30 my-[20px]" />

      {/* Stats Footer Layout */}
      <div className="flex items-center justify-between px-[8px] pb-[8px]">
        
        {/* Stat 1 */}
        <div className="flex flex-col flex-1">
          <span className="font-heading font-extrabold text-[24px] xl:text-[28px] text-[#D8562B] leading-none tracking-tight">
            {stat1.value}
          </span>
          <span className="font-body font-bold text-[10px] xl:text-[11px] text-[#7A7A7A] mt-[4px] leading-[1.2] max-w-[60px]">
            {stat1.label}
          </span>
        </div>

        {/* Divider */}
        <div className="w-[2px] h-[36px] bg-[#DE8662]/20 mx-[8px] lg:mx-[16px]" />

        {/* Stat 2 */}
        <div className="flex flex-col flex-1">
          <span className="font-heading font-extrabold text-[24px] xl:text-[28px] text-[#D8562B] leading-none tracking-tight">
            {stat2.value}
          </span>
          <span className="font-body font-bold text-[10px] xl:text-[11px] text-[#7A7A7A] mt-[4px] leading-[1.2] max-w-[60px]">
            {stat2.label}
          </span>
        </div>

        {/* Divider */}
        <div className="w-[2px] h-[36px] bg-[#DE8662]/20 mx-[8px] lg:mx-[16px]" />

        {/* Stat 3 */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-[2px]">
            <span className="font-heading font-extrabold text-[24px] xl:text-[28px] text-[#D8562B] leading-none tracking-tight">
              {stat3.value}
            </span>
            {stat3.icon && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#D8562B]">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            )}
          </div>
          <span className="font-body font-bold text-[10px] xl:text-[11px] text-[#7A7A7A] mt-[4px] leading-[1.2] max-w-[60px]">
            {stat3.label}
          </span>
        </div>

        {/* Pills Container (Right aligned) */}
        <div className="flex flex-col gap-[6px] items-end shrink-0 ml-[8px] xl:ml-[16px]">
          {pills.map((p, i) => (
             <div key={i} className="bg-[#FAD9CD] text-[#D25528] px-[10px] py-[4px] rounded-[6px] font-heading font-bold text-[10px] xl:text-[11px] whitespace-nowrap border border-[#F7BFAF]/50">
               {p}
             </div>
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
    pills: ["iOS + Android", "Stripe"]
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
    pills: ["Hotel Listings", "Stripe"]
  };

  return (
    <section className="relative w-full bg-bg-page flex justify-center items-start pt-[120px] pb-[160px] overflow-hidden">
      <div className="w-full max-w-[1280px] px-[24px] flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-[80px]">
          <EyebrowPill variant="label">Case Studies</EyebrowPill>
          
          <h2 className="font-heading font-extrabold text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Real Startups. <br /> <span className="text-[#FA6A31]">Real Results.</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full max-w-[1100px]">
          {/* Top Row */}
          <CaseStudyCard {...expenseCard} />
          <CaseStudyCard {...travelCard} />
          
          {/* Bottom Row (Duplicated as shown in visual spec) */}
          <CaseStudyCard {...expenseCard} />
          <CaseStudyCard {...travelCard} />
        </div>

        {/* View All Button */}
        <div className="w-full flex justify-center mt-[64px]">
          <button className="flex items-center gap-[8px] bg-gradient-to-r from-[#F6E5DE] to-[#F1DED6] hover:from-[#FAD9CD] hover:to-[#F4CDBE] transition-all px-[32px] py-[16px] rounded-full shadow-sm text-[#D8562B] font-heading font-bold text-[16px] border border-[#FADCD0]">
            <span>View all Case Studies</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px]">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}