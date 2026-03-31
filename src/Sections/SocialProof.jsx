import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

const SummaryCard = ({ title, subtitle, icon }) => (
  <div className="flex-1 flex flex-col items-center justify-center min-h-[260px] bg-[#F8EAE3] rounded-[24px] border-[1.5px] border-white shadow-[0_8px_32px_rgba(230,120,80,0.06)] transition-transform hover:-translate-y-1">
    <div className="w-[60px] h-[60px] rounded-full bg-[#FA764E] flex items-center justify-center text-white shadow-sm mb-[28px] border-[2px] border-[#F5E6E0]">
      {icon}
    </div>
    <h3 className="font-heading font-extrabold text-[32px] md:text-[36px] text-[#1A1A1A] leading-none mb-[12px] tracking-[-1px]">{title}</h3>
    <p className="font-body font-medium text-[16px] md:text-[18px] text-[#4A4A4A] tracking-wider">{subtitle}</p>
  </div>
);

const Badge = ({ icon, text, className }) => (
  <div className={`flex items-center gap-[8px] px-[20px] py-[10px] bg-gradient-to-r from-[#FFF5EF] to-[#FEF0E8] border-[1.5px] border-[#FAD0BF] rounded-full shadow-sm text-[#E86D43] ${className}`}>
    <span className="flex-shrink-0">{icon}</span>
    <span className="font-heading font-bold text-[12px] tracking-tight whitespace-nowrap">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, text, imgUrl }) => (
  <div className="relative flex-1 p-[40px] md:p-[48px] h-full flex flex-col mt-[50px] lg:mt-0">
   
    <div 
      className="absolute inset-0 bg-gradient-to-br from-[#FDF4EF] to-[#EBDCD3] z-0"
      style={{
        borderRadius: '22px',
        borderWidth: '1px',
        borderColor: '#FBD6C5',
        boxShadow: '0 12px 32px rgba(230,120,80,0.12)',
        transform: 'perspective(1200px) rotateY(-8deg) rotateZ(-180deg) scaleX(-1)',
        transformOrigin: 'left center'
      }}
    ></div>

    <div className="absolute top-[-36px] right-[10px] lg:right-[20px] w-[100px] h-[100px] md:w-[112px] md:h-[112px] rounded-full border-[5px] border-[#F26432] overflow-hidden bg-white shadow-md z-20">
      <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
    </div>

    <span className="absolute top-[-30px] left-[-16px] md:top-[-45px] md:left-[-24px] font-serif font-black text-[120px] md:text-[140px] text-[#F3764E] leading-none drop-shadow-sm select-none z-20">
      &ldquo;
    </span>

    {/* Header */}
    <div className="relative z-10 pt-[16px] mb-[20px]">
      <h4 className="font-heading font-extrabold text-[24px] md:text-[26px] text-[#1A1A1A]">{name}</h4>
      <p className="font-body text-[13px] font-bold text-[#A8A8B2] tracking-wide mt-[4px]">{role}</p>
    </div>

    {/* Text content */}
    <p className="relative z-10 font-body text-[14px] md:text-[15px] leading-[1.8] font-medium text-[#4A4A4A] flex-grow pr-[16px]">
      {text}
    </p>

    {/* Stars */}
    <div className="relative z-10 flex gap-[6px] mt-[32px]">
      {[1,2,3,4,5].map((star) => (
        <svg key={star} width="28" height="28" viewBox="0 0 24 24" fill="#FA9E0D" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ))}
    </div>

    
    <span className="absolute bottom-[-16px] right-[-14px] md:bottom-[-24px] md:right-[-32px] font-serif font-black text-[120px] md:text-[140px] text-[#F3764E] leading-none drop-shadow-sm select-none z-20">
      &rdquo;
    </span>
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
    <section className="relative w-full bg-soft-gray flex justify-center items-start pb-[20px] overflow-hidden">
      <div className="w-full max-w-[1280px] bg-white px-[24px] pt-[36px] flex flex-col items-center rounded-[24px]">
        
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
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-[32px] w-full max-w-[1100px]">
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
          <button className="flex-shrink-0 w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#F26432] flex items-center justify-center text-[#F26432] hover:bg-[#F26432] hover:text-white transition-colors duration-200 shadow-sm z-20">
            {ICONS.chevronLeft}
          </button>

          {/* Cards Container */}
          <div className="flex-grow flex flex-col lg:flex-row items-stretch gap-[80px] md:gap-[70px] py-[40px] px-[20px] max-w-[1100px] justify-center mx-auto">
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
          <button className="flex-shrink-0 w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#F26432] flex items-center justify-center text-[#F26432] hover:bg-[#F26432] hover:text-white transition-colors duration-200 shadow-sm z-20">
            {ICONS.chevronRight}
          </button>

        </div>

      </div>
    </section>
  );
}