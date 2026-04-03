

import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';
import starImage from '../assets/images/Star.png';


const GlassNumber = ({ id, value, width = 154, height = 110, fontSize = 96 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`numGrad${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#D9512E" />
        <stop offset="40%" stopColor="#C03A10" />
        <stop offset="100%" stopColor="#8C2808" />
      </linearGradient>
      <linearGradient id={`glassHL${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,230,210,0.55)" />
        <stop offset="50%" stopColor="rgba(255,200,170,0.0)" />
      </linearGradient>
      <filter id={`glowF${id}`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="-2" dy="4" stdDeviation="5" floodColor="rgba(240,90,40,0.15)" />
        <feDropShadow dx="-7" dy="10" stdDeviation="9" floodColor="rgba(240,90,40,0.08)" />
      </filter>
    </defs>
    <text x={width / 2} y={height * 0.87} fontFamily="Poppins, sans-serif" fontWeight="800" fontSize={fontSize} letterSpacing="-4" textAnchor="middle" fill={`url(#numGrad${id})`} filter={`url(#glowF${id})`}>{value}</text>
    <text x={width / 2} y={height * 0.87} fontFamily="Poppins, sans-serif" fontWeight="800" fontSize={fontSize} letterSpacing="-4" textAnchor="middle" fill={`url(#glassHL${id})`}>{value}</text>
  </svg>
);

/* ── Mobile/tablet card — same notched SVG shape as desktop ── */
const MobileCard = ({ number, icon, title, desc, statValue, statLabel }) => {
  const W = 400;
  const H = 320;
  const notchW = 100;
  const notchH = 80;
  const r = 20;
  const R = 28;

  const path = `
    M ${R} 0
    L ${W - notchW} 0
    A ${r} ${r} 0 0 1 ${W - notchW + r} ${r}
    L ${W - notchW + r} ${notchH - r}
    A ${r} ${r} 0 0 0 ${W - notchW + r + r} ${notchH}
    L ${W - r} ${notchH}
    A ${r} ${r} 0 0 1 ${W} ${notchH + r}
    L ${W} ${H - R}
    A ${R} ${R} 0 0 1 ${W - R} ${H}
    L ${R} ${H}
    A ${R} ${R} 0 0 1 0 ${H - R}
    L 0 ${R}
    A ${R} ${R} 0 0 1 ${R} 0
    Z
  `;

  return (
    <div className="relative w-full" style={{ paddingBottom: `${(H / W) * 100}%` }}>

      {/* SVG notched background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d={path} fill="#FF80551A" stroke="#FFCAB2" strokeWidth="1.5" />
      </svg>

      {/* Number in notch — top-right */}
      <div
        className="absolute top-0 right-0 flex items-center justify-center z-10"
        style={{ width: `${(notchW / W) * 100}%`, height: `${(notchH / H) * 100}%` }}
      >
        <GlassNumber id={`m${number}`} value={number} width={88} height={68} fontSize={60} />
      </div>

      {/* Content — padded to avoid the notch */}
      <div
        className="absolute inset-0 flex flex-col justify-between z-0 p-5 sm:p-6"
        style={{
          paddingTop: `${(notchH / H) * 100 + 2}%`,
          paddingRight: '5%',
        }}
      >
        {/* Icon + title + desc */}
        <div className="flex flex-col gap-[10px]">
          <div className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)] shrink-0">
            {icon}
          </div>
          <h3 className="font-heading font-bold text-[20px] sm:text-[24px] tracking-tight text-[#1A1A1A] leading-tight">
            {title}
          </h3>
          <p className="font-body text-[13px] sm:text-[15px] leading-[1.6] text-[#1A1A1A]">
            {desc}
          </p>
        </div>

        {/* Stat row */}
        <div className="flex items-center gap-4 pt-3 border-t border-[#FFCAB2]">
          <span className="font-heading font-extrabold text-[38px] sm:text-[46px] tracking-[-3px] leading-[1] text-[#C03A10]">
            {statValue}
          </span>
          <div className="w-[1.5px] h-[30px] bg-[#FFCAB2]" />
          <p className="font-body text-[13px] sm:text-[15px] font-semibold text-[#1A1A1A] leading-[1.3]">
            {statLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Problem() {
  const ICONS = {
    clock: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 15 12" /><path d="M12 2v2" />
      </svg>
    ),
    chart: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
    alert: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M10.29 3.86l-8.47 14.1A2 2 0 003.54 21h16.92a2 2 0 001.72-3.04l-8.47-14.1a2 2 0 00-3.42 0z" /><path d="M12 9v4" /><path d="M12 17h.01" />
      </svg>
    ),
  };

  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden pt-0">

      {/* Background glow */}
      <div className="absolute top-[80px] right-[15%] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#F05A28]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-8 flex flex-col items-center pt-[10px] pb-[60px]">

        {/* Decorative star */}
        <img
          src={starImage}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute left-[40px] top-[40px] w-[250px] h-[250px] -rotate-[15deg] pointer-events-none z-0 select-none"
        />

        {/* Header */}
        <div className="flex flex-col items-center max-w-[639px] gap-[24px] mb-[48px] lg:mb-[80px] relative z-10 text-center">
          <EyebrowPill variant="label">The Problem</EyebrowPill>

          <h2
            className="font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.5px] text-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Most StartUp MVPs
            <br />
            <span className="text-brand-orange">Never Launch?</span>
          </h2>

          <p className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-[#1A1A1A] font-medium max-w-[580px]">
            Most Founders Lose{' '}
            <span className="text-brand-orange">6-12 months</span>
            {' '}& Thousands of Dollars before Seeing a Single Working Screen. Here's what goes wrong &mdash;
          </p>
        </div>

        {/* ── MOBILE / TABLET CARDS ── */}
        <div className="lg:hidden w-full flex flex-col gap-5">
          <MobileCard
            number="01"
            icon={ICONS.clock}
            title="Slow development"
            desc={<>Most agencies take <span className="text-[#FF8055]">6-12 months</span> just to ship a basic MVP. By then, your Market window is closed and competitors have moved in.</>}
            statValue="12mo"
            statLabel="average time wasted with typical agencies"
          />
          <MobileCard
            number="02"
            icon={ICONS.chart}
            title="Feature Overload"
            desc={<>Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#F05A28]">by months</span>. You end up building what nobody asked for.</>}
            statValue="3x"
            statLabel="Overbudget from unnecessary scope"
          />
          <MobileCard
            number="03"
            icon={ICONS.alert}
            title="Unreliable Developers"
            desc={<>Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#F05A28]">holding the bag</span> with nothing to show investors or customers.</>}
            statValue="70%"
            statLabel="of MVPs never reach launch day"
          />
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:flex relative w-full max-w-[1193px] mx-auto items-stretch gap-[36px]">

          <div className="relative w-[465px] h-[554px] flex-none group transition-transform duration-300 hover:-translate-y-1">
            <svg
              className="absolute inset-0"
              width="465" height="554"
              viewBox="0 0 465 554"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 32 0 L 285 0 A 20 20 0 0 1 305 20 L 305 120 A 20 20 0 0 0 325 140 L 445 140 A 20 20 0 0 1 465 160 L 465 522 A 32 32 0 0 1 433 554 L 32 554 A 32 32 0 0 1 0 522 L 0 32 A 32 32 0 0 1 32 0 Z"
                fill="#FF80551A"
                stroke="#FFCAB2"
                strokeWidth="1"
              />
            </svg>

            <div className="absolute top-0 right-0 w-[160px] h-[140px] flex items-center justify-center z-10">
              <GlassNumber id="01" value="01" width={154} height={110} fontSize={96} />
            </div>

            <div className="absolute top-[52px] left-[15px] w-[442px] h-[461px] z-0 flex flex-col justify-between">
              <div className="flex flex-col gap-[24px] w-[442px] h-[224px]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                  {ICONS.clock}
                </div>
                <h3 className="font-heading font-bold text-[28px] tracking-tight text-[#1A1A1A]">Slow development</h3>
                <p className="font-body text-[18px] leading-[1.6] text-[#1A1A1A]">
                  Most agencies take <span className="text-[#FF8055]">6-12 months</span> just to ship a basic MVP. By then, your Market window is closed and competitors have moved in.
                </p>
              </div>

              <div className="relative mt-auto">
                <div className="absolute top-[-32px] left-[12px] w-[90%] h-[1px] bg-[#FFCAB2]" />
                <div className="flex items-center gap-[24px]">
                  <div className="flex items-baseline text-[#C03A10]">
                    <span className="font-heading font-extrabold text-[110px] leading-[0.8] tracking-[-5px]">12</span>
                    <span className="font-heading font-bold text-[36px] tracking-tight ml-[4px]">mo</span>
                  </div>
                  <p className="font-body text-[20px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[217px] h-[56px]">
                    average time wasted with typical agencies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-[36px]">

            <div className="relative w-full h-[259px] group transition-transform duration-300 hover:-translate-y-1">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 692 259" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M 32 0 L 542 0 A 20 20 0 0 1 562 20 L 562 80 A 20 20 0 0 0 582 100 L 672 100 A 20 20 0 0 1 692 120 L 692 227 A 32 32 0 0 1 660 259 L 32 259 A 32 32 0 0 1 0 227 L 0 32 A 32 32 0 0 1 32 0 Z" fill="#FF80551A" stroke="#FFCAB2" strokeWidth="1.5" />
              </svg>
              <div className="absolute top-0 right-0 w-[130px] h-[100px] flex items-center justify-center z-10">
                <GlassNumber id="02" value="02" width={122} height={90} fontSize={80} />
              </div>
              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[140px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">{ICONS.chart}</div>
                    <h3 className="font-heading font-bold text-[28px] tracking-tight text-[#1A1A1A]">Feature Overload</h3>
                  </div>
                  <p className="font-body text-[18px] leading-[1.5] text-[#1A1A1A]">Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#F05A28]">by months</span>. You end up building what nobody asked for.</p>
                </div>
                <div className="mt-[16px] flex items-center gap-[40px] pl-[12px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">3x</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[20px] font-semibold text-[#1A1A1A] leading-[1.3] max-w-[313px]">Overbudget from unnecessary scope</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[259px] group transition-transform duration-300 hover:-translate-y-1">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 692 259" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M 32 0 L 542 0 A 20 20 0 0 1 562 20 L 562 80 A 20 20 0 0 0 582 100 L 672 100 A 20 20 0 0 1 692 120 L 692 227 A 32 32 0 0 1 660 259 L 32 259 A 32 32 0 0 1 0 227 L 0 32 A 32 32 0 0 1 32 0 Z" fill="#FF80551A" stroke="#FFCAB2" strokeWidth="1.5" />
              </svg>
              <div className="absolute top-0 right-0 w-[130px] h-[100px] flex items-center justify-center z-10">
                <GlassNumber id="03" value="03" width={122} height={90} fontSize={80} />
              </div>
              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[140px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">{ICONS.alert}</div>
                    <h3 className="font-heading font-semibold text-[28px] tracking-tight text-[#1A1A1A]">Unreliable Developers</h3>
                  </div>
                  <p className="font-body font-normal text-[18px] leading-[1.6] text-[#1A1A1A]">Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#F05A28]">holding the bag</span> with nothing to show investors or customers.</p>
                </div>
                <div className="mt-[16px] flex items-center gap-[40px] pl-[16px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">70%</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[20px] font-semibold text-[#1A1A1A] leading-[1.3] max-w-[283px]">of MVPs never reach launch day</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}