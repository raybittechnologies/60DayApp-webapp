import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';
import starImage from '../assets/images/Star.png';

export default function Problem() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden">

      <div className="absolute top-[80px] right-[15%] w-[400px] h-[400px] bg-[#F05A28]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="
        relative z-10 w-[1280px] h-[989px]
        flex flex-col items-center
         pt-[10px] pb-[120px] 
      ">
        <img
          src={starImage}
          alt="Decorative Background Star"
          className="absolute left-[40px] top-[40px] w-[250px] h-[250px] -rotate-[15deg] pointer-events-none z-0 select-none"
        />

        <div className="flex flex-col items-center max-w-[639px] h-[284px] gap-[24px] mb-[80px] relative z-10">
          <EyebrowPill variant="label">The Problem</EyebrowPill>

          <h2
            className="font-bold text-[48px] leading-[1.2] tracking-[-0.5px] text-[#1A1A1A] text-center w-[579px] h-[116px] mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Most StartUp MVPs
            <br />
            <span className="text-brand-orange">Never Launch?</span>
          </h2>

          <p className="font-body text-[18px] leading-[1.6] text-[#1A1A1A] text-center font-medium max-w-[620px]">
            Most Founders Lose{' '}
            <span className="text-brand-orange">6-12 months</span>
            {' '}& Thousands of Dollars before <br className="hidden md:block" /> Seeing a Single Working Screen. Here's is what goes wrong &mdash;
          </p>
        </div>

        {/* ── Cards Grid Layout ── */}
        <div className="relative w-[1193px] h-[554px] mx-auto flex items-stretch gap-[36px]">

          {/* ── CARD 01: Slow development ── */}
          {/* SVG: 465×554px | Notch: 160×140px | Outer-R=32 | Notch-r=20 */}
          {/*
            Path (clockwise from top-left):
            M 32,0  → start top edge after top-left corner arc
            L 285,0 → top edge (W-NW-r = 465-160-20 = 285)
            A 20 20 0 0 1 305,20 → arc: top edge turns DOWN into notch (center at 305,0)
            L 305,120 → down notch left wall (NH-r = 140-20 = 120)
            A 20 20 0 0 1 325,140 → arc: notch wall turns RIGHT onto floor (center at 305,140)
            L 445,140 → notch floor (W-r = 465-20 = 445)
            A 20 20 0 0 1 465,160 → arc: floor turns DOWN onto right wall (center at 465,140)
            L 465,522 → right wall (H-R = 554-32 = 522)
            A 32 32 0 0 1 433,554 → bottom-right outer corner
            L 32,554 → bottom edge
            A 32 32 0 0 1 0,522 → bottom-left outer corner
            L 0,32 → left wall
            A 32 32 0 0 1 32,0 → top-left outer corner
            Z
          */}
          <div className="relative w-[465px] h-[554px] flex-none group transition-transform duration-300 hover:-translate-y-1">
            <svg
              className="absolute inset-0"
              width="465" height="554"
              viewBox="0 0 465 554"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 24px 48px rgba(197,107,74,0.06))' }}
            >
              <path
                d="M 32 0 L 285 0 A 20 20 0 0 1 305 20 L 305 120 A 20 20 0 0 0 325 140 L 445 140 A 20 20 0 0 1 465 160 L 465 522 A 32 32 0 0 1 433 554 L 32 554 A 32 32 0 0 1 0 522 L 0 32 A 32 32 0 0 1 32 0 Z"
                fill="#FF80551A"
                stroke="#FFCAB2"
                strokeWidth="1"
              />
            </svg>

            {/* "01" floats in the notch area — SVG with glass gradient */}
            <div className="absolute top-0 right-0 w-[160px] h-[140px] flex items-center justify-center z-10">
              <svg width="154" height="110" viewBox="0 0 154 110" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="numGrad01" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D9512E" />
                    <stop offset="40%" stopColor="#C03A10" />
                    <stop offset="100%" stopColor="#8C2808" />
                  </linearGradient>
                  <linearGradient id="glassHL01" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,230,210,0.55)" />
                    <stop offset="50%" stopColor="rgba(255,200,170,0.0)" />
                  </linearGradient>
                  <filter id="glowF01" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="-2" dy="4" stdDeviation="5" floodColor="rgba(240,90,40,0.15)" />
                    <feDropShadow dx="-7" dy="10" stdDeviation="9" floodColor="rgba(240,90,40,0.08)" />
                  </filter>
                </defs>
                {/* Base text with gradient */}
                <text x="77" y="96" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="96" letterSpacing="-4" textAnchor="middle" fill="url(#numGrad01)" filter="url(#glowF01)">01</text>
                {/* Glass highlight overlay */}
                <text x="77" y="96" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="96" letterSpacing="-4" textAnchor="middle" fill="url(#glassHL01)">01</text>
              </svg>
            </div>

            {/* Card body content */}
            <div className="absolute top-[52px] left-[15px] w-[442px] h-[461px] z-0 flex flex-col justify-between">
              <div className="flex flex-col gap-[24px] w-[442px] h-[224px]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 15 12" />
                    <path d="M12 2v2" />
                  </svg>
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

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-[36px] w-[692px] h-[554px] flex-none">

            
            <div className="relative w-full h-[259px] group transition-transform duration-300 hover:-translate-y-1">
              <svg
                className="absolute inset-0 w-full h-full"
                width="692" height="259"
                viewBox="0 0 692 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(197,107,74,0.06))' }}
              >
                <path
                  d="M 32 0 L 542 0 A 20 20 0 0 1 562 20 L 562 80 A 20 20 0 0 0 582 100 L 672 100 A 20 20 0 0 1 692 120 L 692 227 A 32 32 0 0 1 660 259 L 32 259 A 32 32 0 0 1 0 227 L 0 32 A 32 32 0 0 1 32 0 Z"
                  fill="#FF80551A"
                  stroke="#FFCAB2"
                  strokeWidth="1.5"
                />
              </svg>

              {/* "02" in the notch — SVG with glass gradient */}
              <div className="absolute top-0 right-0 w-[130px] h-[100px] flex items-center justify-center z-10">
                <svg width="122" height="90" viewBox="0 0 122 90" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="numGrad02" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D9512E" />
                      <stop offset="40%" stopColor="#C03A10" />
                      <stop offset="100%" stopColor="#8C2808" />
                    </linearGradient>
                    <linearGradient id="glassHL02" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,230,210,0.55)" />
                      <stop offset="50%" stopColor="rgba(255,200,170,0.0)" />
                    </linearGradient>
                    <filter id="glowF02" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="-2" dy="4" stdDeviation="4" floodColor="rgba(240,90,40,0.15)" />
                      <feDropShadow dx="-5" dy="9" stdDeviation="7" floodColor="rgba(240,90,40,0.08)" />
                    </filter>
                  </defs>
                  <text x="61" y="78" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="80" letterSpacing="-4" textAnchor="middle" fill="url(#numGrad02)" filter="url(#glowF02)">02</text>
                  <text x="61" y="78" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="80" letterSpacing="-4" textAnchor="middle" fill="url(#glassHL02)">02</text>
                </svg>
              </div>

              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[130px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                        <line x1="2" y1="2" x2="22" y2="22" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-[28px] tracking-tight text-[#1A1A1A]">Feature Overload</h3>
                  </div>
                  <p className="font-body text-[18px] leading-[1.5] text-[#1A1A1A] font-normal">
                    Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#F05A28]">by months</span>. You end up building what nobody asked for.
                  </p>
                </div>
                <div className="mt-[16px] flex items-center gap-[40px] pl-[12px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">3x</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[20px] font-semibold text-[#1A1A1A] leading-[1.3] max-w-[313px]">
                    Overbudget from unnecessary scope
                  </p>
                </div>
              </div>
            </div>

            {/* ── CARD 03: Unreliable Developers ── */}
            <div className="relative w-full h-[259px] group transition-transform duration-300 hover:-translate-y-1">
              <svg
                className="absolute inset-0 w-full h-full"
                width="692" height="259"
                viewBox="0 0 692 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(197,107,74,0.06))' }}
              >
                <path
                  d="M 32 0 L 542 0 A 20 20 0 0 1 562 20 L 562 80 A 20 20 0 0 0 582 100 L 672 100 A 20 20 0 0 1 692 120 L 692 227 A 32 32 0 0 1 660 259 L 32 259 A 32 32 0 0 1 0 227 L 0 32 A 32 32 0 0 1 32 0 Z"
                  fill="#FF80551A"
                  stroke="#FFCAB2"
                  strokeWidth="1.5"
                />
              </svg>

              {/* "03" in the notch — SVG with glass gradient */}
              <div className="absolute top-0 right-0 w-[130px] h-[100px] flex items-center justify-center z-10">
                <svg width="122" height="90" viewBox="0 0 122 90" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="numGrad03" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D9512E" />
                      <stop offset="40%" stopColor="#C03A10" />
                      <stop offset="100%" stopColor="#8C2808" />
                    </linearGradient>
                    <linearGradient id="glassHL03" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,230,210,0.55)" />
                      <stop offset="50%" stopColor="rgba(255,200,170,0.0)" />
                    </linearGradient>
                    <filter id="glowF03" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="-2" dy="4" stdDeviation="4" floodColor="rgba(240,90,40,0.15)" />
                      <feDropShadow dx="-5" dy="9" stdDeviation="7" floodColor="rgba(240,90,40,0.08)" />
                    </filter>
                  </defs>
                  <text x="61" y="78" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="80" letterSpacing="-4" textAnchor="middle" fill="url(#numGrad03)" filter="url(#glowF03)">03</text>
                  <text x="61" y="78" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="80" letterSpacing="-4" textAnchor="middle" fill="url(#glassHL03)">03</text>
                </svg>
              </div>

              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[130px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M10.29 3.86l-8.47 14.1A2 2 0 003.54 21h16.92a2 2 0 001.72-3.04l-8.47-14.1a2 2 0 00-3.42 0z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-semibold text-[28px] tracking-tight text-[#1A1A1A]">Unreliable Developers</h3>
                  </div>
                  <p className="font-body font-normal text-[18px] leading-[1.6] text-[#1A1A1A]">
                    Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#F05A28]">holding the bag</span> with nothing to show investors or customers.
                  </p>
                </div>
                <div className="mt-[16px] flex items-center gap-[40px] pl-[16px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">70%</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[20px] font-semibold text-[#1A1A1A] leading-[1.3] max-w-[283px]">
                    of MVPs never reach launch day
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}