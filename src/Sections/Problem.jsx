import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

export default function Problem() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden">
      
      {/* ── Background Blurred Starbursts ── */}
      
      <div className="
        relative z-10 w-[1280px] h-[989px]
        flex flex-col items-center
        px-[24px] pt-[10px] pb-[120px]
      ">
        {/* ── Header Container ── */}
        <div className="flex flex-col items-center max-w-[639px] h-[284px] gap-[24px] mb-[80px] ">
          <EyebrowPill variant="label">The Problem</EyebrowPill>

          <h2 className="
            font-heading font-extrabold text-[56px] leading-[1.1] tracking-[-1.5px] text-[#1A1A1A] text-center w-full
          ">
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
        <div className="flex items-stretch gap-[36px] w-full">

          {/* ── LEFT CARD (Slow development) ── */}
          <div className="relative w-[55%] flex-none group transition-transform duration-300 hover:-translate-y-1">
            
            {/* The Main Card Background with soft neo-morphic gradient */}
            <div className="
              absolute inset-0 bg-gradient-to-br from-[#FDF1EB] to-[#F0DDD5]
              rounded-[32px] border-[1.5px] border-white/60
              shadow-[0_24px_48px_rgba(230,120,80,0.06),_inset_0_4px_12px_rgba(255,255,255,0.8)]
            " />
            
            {/* The Cutout Masking Block (Top Right)
                This white block covers the corner to simulate the notch shape perfectly
                while blending with the parent background. */}
            <div className="
              absolute top-[-2px] right-[-2px] w-[140px] h-[120px] bg-bg-page 
              rounded-bl-[36px] border-b-[1.5px] border-l-[1.5px] border-white/60
              shadow-[-8px_8px_16px_rgba(200,100,60,0.04)]
              flex items-center justify-center z-10
            ">
              <span className="
                font-heading font-extrabold text-[96px] tracking-[-4px] leading-none
                text-[#D17454] opacity-90
                drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]
                relative top-[-4px] right-[-4px]
              ">
                01
              </span>
            </div>

            {/* Content Container */}
            <div className="relative z-0 p-[48px] pr-[160px] flex flex-col h-full justify-between">
              
              <div className="flex flex-col gap-[24px]">
                {/* Icon wrapper */}
                <div className="w-[48px] h-[48px] rounded-full bg-[#FA8A5F] flex items-center justify-center shadow-sm border border-white/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l3 3" />
                  </svg>
                </div>
                
                <h3 className="font-heading font-extrabold text-[32px] tracking-tight text-[#111]">Slow development</h3>
                
                <p className="font-body text-[17px] leading-[1.6] text-[#4A4A4A]">
                  Most agencies take <span className="text-[#DE5829] font-semibold">6-12 months</span> just to ship a basic MVP. By then, your Market window is closed and competitors have moved in.
                </p>
              </div>

              {/* Bottom Stat row - specific layout for Card 1 */}
              <div className="mt-[64px] relative">
                <div className="absolute top-[-32px] left-0 w-[80%] h-[1px] bg-gradient-to-r from-[#D4C3BC]/40 to-transparent" />
                <div className="flex items-center gap-[24px]">
                  <div className="flex items-baseline text-[#D45530]">
                    <span className="font-heading font-extrabold text-[110px] leading-[0.8] tracking-[-5px]">12</span>
                    <span className="font-heading font-bold text-[36px] tracking-tight ml-[4px]">mo</span>
                  </div>
                  <p className="font-body text-[17px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[180px]">
                    average time wasted with typical agencies
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT COLUMN (Cards 2 and 3) ── */}
          <div className="flex flex-col gap-[36px] flex-1">
            
            {/* RIGHT CARD 1 (Feature Overload) */}
            <div className="relative w-full flex-1 group transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF1EB] to-[#F0DDD5] rounded-[32px] border-[1.5px] border-white/60 shadow-[0_24px_48px_rgba(230,120,80,0.06),_inset_0_4px_12px_rgba(255,255,255,0.8)]" />
              
              {/* Cutout Masking Block */}
              <div className="absolute top-[-2px] right-[-2px] w-[130px] h-[100px] bg-bg-page rounded-bl-[32px] border-b-[1.5px] border-l-[1.5px] border-white/60 shadow-[-8px_8px_16px_rgba(200,100,60,0.04)] flex items-center justify-center z-10">
                <span className="font-heading font-extrabold text-[84px] tracking-[-4px] leading-none text-[#D17454] opacity-90 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] relative top-[-4px] right-[-4px]">
                  02
                </span>
              </div>

              <div className="relative z-0 p-[40px] pr-[130px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#FA8A5F] flex items-center justify-center shadow-sm border border-white/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M3 3v18h18" />
                        <path d="M21 9l-9 9-4-4-5 5" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-extrabold text-[24px] tracking-tight text-[#111]">Feature Overload</h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4A4A4A]">
                    Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#DE5829] font-semibold">by months</span>. You end up building what nobody asked for.
                  </p>
                </div>

                <div className="mt-[32px] flex items-center gap-[20px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#D45530]">3x</span>
                  <div className="w-[2px] h-[48px] bg-gradient-to-b from-transparent via-[#D4C3BC] to-transparent" />
                  <p className="font-body text-[16px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[190px]">
                    Overbudget from unnecessary scope
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD 2 (Unreliable Developers) */}
            <div className="relative w-full flex-1 group transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF1EB] to-[#F0DDD5] rounded-[32px] border-[1.5px] border-white/60 shadow-[0_24px_48px_rgba(230,120,80,0.06),_inset_0_4px_12px_rgba(255,255,255,0.8)]" />
              
              {/* Cutout Masking Block */}
              <div className="absolute top-[-2px] right-[-2px] w-[130px] h-[100px] bg-bg-page rounded-bl-[32px] border-b-[1.5px] border-l-[1.5px] border-white/60 shadow-[-8px_8px_16px_rgba(200,100,60,0.04)] flex items-center justify-center z-10">
                <span className="font-heading font-extrabold text-[84px] tracking-[-4px] leading-none text-[#D17454] opacity-90 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] relative top-[-4px] right-[-4px]">
                  03
                </span>
              </div>

              <div className="relative z-0 p-[40px] pr-[130px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#FA8A5F] flex items-center justify-center shadow-sm border border-white/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M10.29 3.86l-8.47 14.1A2 2 0 003.54 21h16.92a2 2 0 001.72-3.04l-8.47-14.1a2 2 0 00-3.42 0z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-extrabold text-[24px] tracking-tight text-[#111]">Unreliable Developers</h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4A4A4A]">
                    Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#DE5829] font-semibold">holding the bag</span> with nothing to show investors or customers.
                  </p>
                </div>

                <div className="mt-[32px] flex items-center gap-[20px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#D45530]">70%</span>
                  <div className="w-[2px] h-[48px] bg-gradient-to-b from-transparent via-[#D4C3BC] to-transparent" />
                  <p className="font-body text-[16px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[190px]">
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