import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

const SummaryCard = ({ title, subtitle, icon }) => (
  <div className="flex-1 flex flex-col items-center justify-center min-h-[240px] bg-gradient-to-br from-[#FDF6F3] to-[#E9DCD5] rounded-[24px] border-[1.5px] border-white sombra shadow-[0_12px_32px_rgba(200,100,50,0.05)] transition-transform hover:-translate-y-1">
    <div className="w-[56px] h-[56px] rounded-full bg-[#FA8758] flex items-center justify-center text-white shadow-sm mb-[24px]">
      {icon}
    </div>
    <h3 className="font-heading font-extrabold text-[28px] text-[#1A1A1A] leading-none mb-[8px] tracking-tight">{title}</h3>
    <p className="font-body font-medium text-[16px] text-[#4A4A4A] tracking-wide">{subtitle}</p>
  </div>
);

const Badge = ({ icon, text, className }) => (
  <div className={`flex items-center gap-[8px] px-[20px] py-[10px] bg-gradient-to-r from-[#FFF5EF] to-[#FEF0E8] border-[1.5px] border-[#FAD0BF] rounded-full shadow-sm text-[#E86D43] ${className}`}>
    <span className="flex-shrink-0">{icon}</span>
    <span className="font-heading font-bold text-[12px] tracking-tight whitespace-nowrap">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, text, imgUrl }) => (
  <div className="relative flex-1 bg-gradient-to-br from-[#F6EBE5] to-[#EAE0D9] rounded-[32px] p-[40px] md:p-[48px] border-[1px] border-white/60 shadow-[0_8px_24px_rgba(200,100,50,0.03)] h-full flex flex-col">
    
    {/* Profile Avatar overlaying the top right */}
    <div className="absolute top-[-36px] right-[32px] w-[88px] h-[88px] rounded-full border-[3px] border-[#F26B3A] overflow-hidden shadow-lg bg-white">
      <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
    </div>

    {/* Giant Opening Quotes overlaying the top left */}
    <span className="absolute top-[-20px] left-[-24px] font-serif font-black text-[120px] text-[#FA8B61] leading-none opacity-90 drop-shadow-sm select-none">
      &ldquo;
    </span>

    {/* Header */}
    <div className="relative z-10 pt-[16px] mb-[24px]">
      <h4 className="font-heading font-extrabold text-[22px] text-[#111]">{name}</h4>
      <p className="font-body text-[12px] font-semibold text-[#8C8C8C] leading-none mt-[4px]">{role}</p>
    </div>

    {/* Text content */}
    <p className="relative z-10 font-body text-[14px] leading-[1.8] font-medium text-[#4A4A4A] flex-grow pr-[16px]">
      {text}
    </p>

    {/* Stars */}
    <div className="relative z-10 flex gap-[6px] mt-[32px]">
      {[1,2,3,4,5].map((star) => (
        <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ))}
    </div>

    {/* Giant Closing Quotes overlaying the bottom right */}
    <span className="absolute bottom-[-56px] right-[16px] font-serif font-black text-[120px] text-[#FA8B61] leading-none opacity-90 drop-shadow-sm select-none">
      &rdquo;
    </span>
    
    {/* Optional: Add a subtle wavy hand-drawn aesthetic SVG overlay using CSS backgrounds or borders,
        but standard rounded boxes with rotation keep the bento UI completely consistent. */}
  </div>
);

export default function SocialProof() {
  const ICONS = {
    clock: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l3 3"/></svg>,
    clipboard: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14h6"/><path d="M9 10h6"/></svg>,
    badge: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l2 3 3 1-2 2 .5 3.5L12 16l-3.5 1.5.5-3.5-2-2 3-1 2-3z"/></svg>,
    trophy: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10c.6 0 1 .4 1 1v2c0 3.3-2.7 6-6 6s-6-2.7-6-6V5c0-.6.4-1 1-1z"/><path d="M3 5h4v5c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 1-2z"/><path d="M21 5h-4v5c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-1-2z"/></svg>,
    star: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/></svg>,
    check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>,
    chevronLeft: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
    chevronRight: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
  };

  return (
    <section className="relative w-full bg-bg-page flex justify-center items-start pt-[120px] pb-[160px] overflow-hidden">
      <div className="w-full max-w-[1280px] px-[24px] flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center max-w-[800px] mb-[64px]">
          <EyebrowPill variant="label">Why Choose Us</EyebrowPill>
          
          <h2 className="font-heading font-extrabold text-[48px] md:text-[56px] leading-[1.15] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Built by Experienced <br /> <span className="text-[#F05A28]">Product Engineers</span>
          </h2>
          
          <p className="font-heading font-extrabold text-[15px] text-[#111] text-center mt-[24px]">
            60DayApp is powered by <span className="text-[#FC8658]">Raybit Technologies.</span>
          </p>
        </div>

        {/* 3 Summary Cards Row */}
        <div className="flex flex-col md:flex-row items-stretch gap-[24px] w-full max-w-[1000px]">
          <SummaryCard title="7+ years" subtitle="Experience" icon={ICONS.clock} />
          <SummaryCard title="40+ Projects" subtitle="Delivered" icon={ICONS.clipboard} />
          <SummaryCard title="Top Rated" subtitle="Upwork agency" icon={ICONS.badge} />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col items-center mt-[48px] mb-[100px] gap-[16px]">
          <div className="flex flex-wrap justify-center gap-[20px]">
            <Badge icon={ICONS.trophy} text="Trusted by Startups Worldwide" />
            <Badge icon={ICONS.star} text="Top Rated on Upwork" />
          </div>
          <Badge icon={ICONS.check} text="Proven Delivery Framework" className="w-fit" />
        </div>

        {/* Testimonial Carousel */}
        <div className="w-full max-w-[1080px] flex items-center justify-between gap-[16px] md:gap-[40px]">
          
          {/* Left Arrow */}
          <button className="flex-shrink-0 w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#FA8A5F] flex items-center justify-center text-[#FA8A5F] hover:bg-[#FA8A5F] hover:text-white transition-colors duration-200 shadow-sm z-20">
            {ICONS.chevronLeft}
          </button>

          {/* Cards Container */}
          <div className="flex-grow flex flex-col lg:flex-row items-stretch gap-[40px] md:gap-[48px]">
            <TestimonialCard 
              name="Carolyn Willms"
              role="Global Accountability Officer"
              imgUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
              text="Outstanding work! The freelancer not only delivered the mobile app on time but also exceeded our expectations in terms of design, functionality, and user experience."
            />
            <TestimonialCard 
              name="Carolyn Willms"
              role="Global Accountability Officer"
              imgUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
              text="Outstanding work! The freelancer not only delivered the mobile app on time but also exceeded our expectations in terms of design, functionality, and user experience."
            />
          </div>

          {/* Right Arrow */}
          <button className="flex-shrink-0 w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#FA8A5F] flex items-center justify-center text-[#FA8A5F] hover:bg-[#FA8A5F] hover:text-white transition-colors duration-200 shadow-sm z-20">
            {ICONS.chevronRight}
          </button>

        </div>

      </div>
    </section>
  );
}