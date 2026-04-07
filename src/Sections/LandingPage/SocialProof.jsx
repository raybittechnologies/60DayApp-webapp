import React, { useState } from 'react';
import EyebrowPill from '../../components/ui/EyebrowPill';



// ─── Glass shadow: #FF8055 10% bg + inset highlights on all 4 sides + outer depth ───
const GLASS_SHADOW = [
  'inset 0 10px 0 rgba(255, 255, 255, 0.65)',   // TOP — bright white highlight
  'inset 0 -10px 0 rgba(255, 255, 255, 0.5)',    // BOTTOM — warm subtle tint
  'inset 10px 0 0 rgba(255, 255, 255, 0.35)',     // LEFT — soft white glow
  'inset -10px 0 0 rgba(255, 255, 255, 0.35)',    // RIGHT — soft white glow
  '-3.39px 6.78px 16.95px #9191910D',            // 5% opacity
  '-11.87px 28.82px 30.51px #9191910A',          // 4% opacity
  '-26px 64px 40px #91919108',                   // 3% opacity
  '-46px 115px 48px #91919103',                  // 1% opacity
  '0 4px 12px rgba(255, 128, 85, 0.09)',
  '0 14px 36px rgba(255, 128, 85, 0.07)',
].join(', ');
const SummaryCard = ({ title, subtitle, icon }) => (
  <div
    className="
      flex flex-col items-center justify-center
      min-h-[180px] min-[480px]:min-h-[210px] sm:min-h-[240px] md:min-h-[280px]
      rounded-[22px] sm:rounded-[26px] md:rounded-[28px]
      border border-[#FF8055]
      px-4 sm:px-6 md:px-8
      py-6 sm:py-8 md:py-12
      w-full
      transition-transform duration-300 hover:scale-[1.025]
    "
    style={{
      background: 'rgba(255, 128, 85, 0.3)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: GLASS_SHADOW,
    }}
  >
    <div
      className="
        w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px]
        rounded-full bg-[#FA764E] flex items-center justify-center text-white
        mb-4 sm:mb-5 md:mb-7
      "
      style={{ boxShadow: '0 4px 14px rgba(250,118,78,0.35)' }}
    >
      {icon}
    </div>
    <h3
      className="font-extrabold leading-none text-[#000] mb-2 text-center"
      style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', letterSpacing: '-1px' }}
    >
      {title}
    </h3>
    <p
      className="text-[#1A1A1A] font-normal tracking-wide text-center"
      style={{ fontSize: 'clamp(14px, 2vw, 20px)' }}
    >
      {subtitle}
    </p>
  </div>
);


const Badge = ({ icon, text, className = '' }) => (
  <div className={`flex items-center gap-[8px] px-[16px] sm:px-[20px] py-[8px] sm:py-[10px] bg-gradient-to-r from-[#FFF5EF] to-[#FEF0E8] border-[1.5px] border-[#FAD0BF] rounded-full shadow-sm text-[#F05A28] ${className}`}>
    <span className="flex-shrink-0">{icon}</span>
    <span className="font-heading font-bold text-[11px] sm:text-[12px] tracking-tight whitespace-nowrap">{text}</span>
  </div>
);

const TestimonialCard = ({ name, role, text, imgUrl }) => (
  <div className="relative w-full pt-[30px] sm:pt-[40px] md:pt-[50px] px-[10px] pb-[10px] mt-[40px] md:mt-[60px]">
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 300" preserveAspectRatio="none">
      <path
        d="M10,20 L490,40 Q500,40 500,50 L500,260 Q500,280 480,285 L20,300 Q0,300 0,280 L0,40 Q0,25 10,20 Z"
        fill="rgba(255, 128, 85, 0.1)"
        stroke="#FF8055"
        strokeWidth="2"
      />
    </svg>
    <span className="absolute font-serif font-black text-[#FF8055] select-none text-[80px] sm:text-[120px] md:text-[200px] leading-none top-[-10px] sm:top-[-15px] md:top-[-30px] left-[5px] md:left-[-10px]">&ldquo;</span>
    <div className="absolute rounded-full border-[3px] sm:border-[5px] md:border-[8px] border-[#FF8055] overflow-hidden shadow-lg bg-white z-10 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[150px] md:h-[150px] top-[-15px] sm:top-[-30px] md:top-[-55px] right-[10px] sm:right-[15px] md:right-[10px]">
      <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="relative z-10 px-[15px] sm:px-[25px] md:px-[30px] py-[20px] sm:py-[30px] md:py-[40px]">
      <div className="mb-[10px] sm:mb-[14px] pr-[55px] sm:pr-[80px] md:pr-[120px]">
        <h4 className="font-[600] text-[#000000] text-[18px] sm:text-[22px] md:text-[28px] leading-tight">{name}</h4>
        <p className="text-[13px] sm:text-[15px] md:text-[18px] text-[#808080] mt-[2px] sm:mt-[4px] font-[400]">{role}</p>
      </div>
      <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#1A1A1A] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] mb-[16px] sm:mb-[22px] font-[400]">{text}</p>
      <div className="flex gap-[2px] sm:gap-[4px]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]" viewBox="0 0 24 24" fill="#FA9E0D">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
    <span className="absolute font-serif font-black text-[#FA764E] select-none text-[80px] sm:text-[120px] md:text-[200px] leading-none bottom-[-30px] sm:bottom-[-45px] md:bottom-[-90px] right-[5px] md:right-[-10px]">&rdquo;</span>
  </div>
);

const TESTIMONIALS = [
  {
    name: "Carolyn Willms",
    role: "Global Accountability Officer",
    imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    text: "Outstanding work! The freelancer not only delivered the mobile app on time but also exceeded our expectations in terms of design, functionality, and user experience.",
  },
  {
    name: "Carolyn Willms",
    role: "Global Accountability Officer",
    imgUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    text: "Outstanding work! The freelancer not only delivered the mobile app on time but also exceeded our expectations in terms of design, functionality, and user experience.",
  },
];

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ICONS = {
    clock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l3 3" /></svg>,
    clipboard: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14h6M9 10h6" /></svg>,
    badge: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8l2 3 3 1-2 2 .5 3.5L12 16l-3.5 1.5.5-3.5-2-2 3-1 2-3z" /></svg>,
    trophy: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10c.6 0 1 .4 1 1v2c0 3.3-2.7 6-6 6s-6-2.7-6-6V5c0-.6.4-1 1-1z" /></svg>,
    star: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" /></svg>,
    check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>,
    chevronLeft: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
    chevronRight: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>,
  };

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <section id="about" className="section-outer relative pb-[24px] overflow-hidden">
      <div className="section-inner">
        {/* Changed from bg-white to a soft peach to help the white glow pop */}
        <div className="w-full bg-[#FFF9F6] pb-[80px] sm:pb-[100px] md:pb-[130px] pt-[36px] flex flex-col items-center rounded-[24px]">

          <div className="flex flex-col items-center max-w-[800px] mb-[40px] sm:mb-[64px] px-4">
            <EyebrowPill variant="label">Why Choose Us</EyebrowPill>
            <h2 className="font-heading font-extrabold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.15] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
              Built by Experienced <br /> <span className="text-[#F05A28]">Product Engineers</span>
            </h2>
            <p className="font-heading font-extrabold text-[17px] sm:text-[20px] text-[#1A1A1A] text-center mt-[24px]">
              60DayApp is powered by <span className="text-[#F05A28]">Raybit Technologies.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-[20px] sm:gap-[32px] w-full max-w-[1100px] px-4 sm:px-0">
            <SummaryCard title="7+ years" subtitle="Experience" icon={ICONS.clock} />
            <SummaryCard title="40+ Projects" subtitle="Delivered" icon={ICONS.clipboard} />
            <SummaryCard title="Top Rated" subtitle="Upwork agency" icon={ICONS.badge} />
          </div>

          <div className="flex flex-col items-center mt-[32px] sm:mt-[48px] mb-[60px] sm:mb-[100px] gap-[14px] sm:gap-[16px] px-4">
            <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[20px]">
              <Badge icon={ICONS.trophy} text="Trusted by Startups Worldwide" />
              <Badge icon={ICONS.star} text="Top Rated on Upwork" />
            </div>
            <Badge icon={ICONS.check} text="Proven Delivery Framework" className="w-fit" />
          </div>

          <div className="w-full max-w-[1180px] px-2 sm:px-4 lg:px-0 flex items-center gap-[8px] sm:gap-[16px] md:gap-[24px]">
            <button
              onClick={handlePrev}
              className="flex-shrink-0 w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#F26432] flex items-center justify-center text-[#F26432] hover:bg-[#F26432] hover:text-white transition-colors duration-200 shadow-sm z-20"
            >
              {ICONS.chevronLeft}
            </button>
            <div className="flex-1 min-w-0">
              <div className="block lg:hidden" style={{ overflowX: 'hidden', overflowY: 'visible' }}>
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <TestimonialCard {...t} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex flex-row items-start gap-[32px] px-[10px]">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="flex-1 min-w-0">
                    <TestimonialCard {...t} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="flex-shrink-0 w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] rounded-full border-[1.5px] border-[#F26432] flex items-center justify-center text-[#F26432] hover:bg-[#F26432] hover:text-white transition-colors duration-200 shadow-sm z-20"
            >
              {ICONS.chevronRight}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

