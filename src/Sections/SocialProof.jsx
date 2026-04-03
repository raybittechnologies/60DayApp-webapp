
import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

const SummaryCard = ({ title, subtitle, icon }) => (
  <div className="flex-1 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[280px] bg-[#FDF0EB] rounded-[24px] sm:rounded-[28px] border-[1.5px] border-[#FF80551A] shadow-[0_4px_24px_rgba(230,120,80,0.08)] px-[20px] sm:px-[32px] py-[32px] sm:py-[48px]">
    <div className="w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] rounded-full bg-[#FA764E] flex items-center justify-center text-white shadow-md mb-[20px] sm:mb-[32px]">
      {icon}
    </div>
    <h3 className="font-heading font-[600] text-[28px] sm:text-[36px] text-[#000000] leading-none mb-[10px] sm:mb-[14px] tracking-[-1px]">{title}</h3>
    <p className="font-body text-[30px] sm:text-[30px] text-[#1A1A1A] font-400 tracking-wide text-center">{subtitle}</p>
  </div>
);

const Badge = ({ icon, text, className }) => (
  <div className={`flex items-center gap-[8px] px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] bg-gradient-to-r from-[#FFF5EF] to-[#FEF0E8] border-[1.5px] border-[#FAD0BF] rounded-full shadow-sm text-[#F05A28] ${className}`}>
    <span className="flex-shrink-0">{icon}</span>
    <span className="font-heading font-bold text-[11px] sm:text-[12px] tracking-tight whitespace-nowrap">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, text, imgUrl }) => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto" style={{ marginBottom: '40px', marginTop: '20px' }}>
      {/* Opening quote */}
      <span className="absolute top-8 left-8 -translate-x-1/2 -translate-y-1/2 font-serif font-black text-[140px] sm:text-[200px] text-[#FF8055] leading-none select-none z-30">
        &ldquo;
      </span>

      {/* Avatar */}
      <div className="absolute -top-6 right-6 sm:right-8 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] rounded-full border-[4px] sm:border-[6px] border-[#FF8055] overflow-hidden z-40 shadow-xl bg-white">
        <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Card shape */}
      <div className="relative">
        <svg
          viewBox="0 0 860 320"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 28,40 Q 28,18 55,20 L 805,8 Q 832,6 832,30 L 832,280 Q 832,305 805,308 L 55,316 Q 28,318 28,295 Z"
            fill="#FEF6F2"
            stroke="#FF8055"
            strokeWidth="1.5"
          />
        </svg>

        {/* Content */}
        <div className="relative z-20 px-7 sm:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="mb-3 sm:mb-4">
            <h4 className="text-[20px] sm:text-[26px] font-extrabold text-black leading-tight">{name}</h4>
            <p className="text-[#808080] text-sm sm:text-base font-medium mt-0.5">{role}</p>
          </div>
          <p className="text-[#1A1A1A] text-[14px] sm:text-[17px] leading-[1.65] mb-4 sm:mb-6 font-normal">
            {text}
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FA9E0D">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Closing quote */}
      <span className="absolute bottom-[-30px] right-1 translate-x-1/2 translate-y-1/2 font-serif font-black text-[140px] sm:text-[200px] text-[#F3764E] leading-none select-none z-30">
        &rdquo;
      </span>
    </div>
  );
};

export default function SocialProof() {
  const ICONS = {
    clock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l3 3" /></svg>,
    clipboard: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14h6" /><path d="M9 10h6" /></svg>,
    badge: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8l2 3 3 1-2 2 .5 3.5L12 16l-3.5 1.5.5-3.5-2-2 3-1 2-3z" /></svg>,
    trophy: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10c.6 0 1 .4 1 1v2c0 3.3-2.7 6-6 6s-6-2.7-6-6V5c0-.6.4-1 1-1z" /><path d="M3 5h4v5c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 0 1-2z" /><path d="M21 5h-4v5c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-1-2z" /></svg>,
    star: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>,
    check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>,
    chevronLeft: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
    chevronRight: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>,
  };

  return (
    <section className="relative w-full flex justify-center items-start pb-[24px] overflow-hidden">
      <div className="w-full max-w-[1280px] px-4 sm:px-8 lg:px-0 bg-white pb-[24px] pt-[36px] flex flex-col items-center rounded-[24px]">

        {/* Header */}
        <div className="flex flex-col items-center max-w-[800px] mb-[40px] sm:mb-[64px] px-4">
          <EyebrowPill variant="label">Why Choose Us</EyebrowPill>
          <h2 className="font-heading font-extrabold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.15] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Built by Experienced <br /> <span className="text-[#F05A28]">Product Engineers</span>
          </h2>
          <p className="font-heading font-extrabold text-[17px] sm:text-[20px] text-[#1A1A1A] text-center mt-[24px]">
            60DayApp is powered by <span className="text-[#F05A28]">Raybit Technologies.</span>
          </p>
        </div>

        {/* 3 Summary Cards */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-[20px] sm:gap-[32px] w-full max-w-[1100px] px-4 sm:px-0">
          <SummaryCard title="7+ years" subtitle="Experience" icon={ICONS.clock} />
          <SummaryCard title="40+ Projects" subtitle="Delivered" icon={ICONS.clipboard} />
          <SummaryCard title="Top Rated" subtitle="Upwork agency" icon={ICONS.badge} />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col items-center mt-[32px] sm:mt-[48px] mb-[60px] sm:mb-[100px] gap-[14px] sm:gap-[16px] px-4">
          <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[20px]">
            <Badge icon={ICONS.trophy} text="Trusted by Startups Worldwide" />
            <Badge icon={ICONS.star} text="Top Rated on Upwork" />
          </div>
          <Badge icon={ICONS.check} text="Proven Delivery Framework" className="w-fit" />
        </div>

        {/* Testimonial Carousel */}
        <div className="w-full max-w-[1080px] px-2 sm:px-4 lg:px-0 flex items-center gap-[8px] sm:gap-[16px] md:gap-[24px]">

          <button className="flex-shrink-0 w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#F26432] flex items-center justify-center text-[#F26432] hover:bg-[#F26432] hover:text-white transition-colors duration-200 shadow-sm z-20">
            {ICONS.chevronLeft}
          </button>

          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-[32px] sm:gap-[32px] px-[10px] overflow-visible">
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

          <button className="flex-shrink-0 w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#F26432] flex items-center justify-center text-[#F26432] hover:bg-[#F26432] hover:text-white transition-colors duration-200 shadow-sm z-20">
            {ICONS.chevronRight}
          </button>

        </div>

      </div>
    </section>
  );
}