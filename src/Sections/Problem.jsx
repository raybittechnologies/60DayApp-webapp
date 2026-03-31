import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';
import starImage from '../assets/images/Star.png';

export default function Problem() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden bg-[#F5F6F8]">
      
      <div className="absolute top-[80px] right-[15%] w-[400px] h-[400px] bg-[#F05A28]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="
        relative z-10 w-[1280px] h-[989px]
        flex flex-col items-center
        px-[24px] pt-[10px] pb-[120px]
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

          {/* ── LEFT CARD (Slow development) ── */}
          <div className="relative w-[465px] h-[554px] flex-none group transition-transform duration-300 hover:-translate-y-1">
            
            {/* The Main Card Background */}
            <div className="
              absolute inset-0 bg-[#FFF3EE]
              rounded-[32px] border-[1px] border-[#FFCAB2]
              shadow-[0_24px_48px_rgba(197,107,74,0.04)]
            " />
             
            {/* The Cutout Masking Block (Top Right) */}
            <div className="
              absolute top-[-2px] right-[-2px] w-[140px] h-[120px] bg-[#F5F6F8] 
              rounded-bl-[36px] border-b-[1.5px] border-l-[1.5px] border-[#FFCAB2]
              flex items-center justify-center z-10
            ">
          <span
  className="relative font-extrabold text-[96px] tracking-[-4px] leading-none top-[-4px] right-[-4px] text-[#C03A10]"
  style={{
    fontFamily: 'Poppins, sans-serif',
    textShadow: '-2px 4px 10px rgba(145,145,145,0.05), -7px 17px 18px rgba(145,145,145,0.04)',
  }}
>
  01
</span>
            </div>

            <div className="absolute top-[52px] left-[12px] w-[442px] h-[461px] z-0 flex flex-col justify-between">
              
              
              <div className="flex flex-col gap-[24px] w-[442px] h-[224px]">
                
                <div className="w-[48px] h-[48px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                  
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 15 12" />
                    <path d="M12 2v2" />
                  </svg>
                </div>
                
                <h3 className="font-heading font-extrabold text-[32px] tracking-tight text-[#111]">Slow development</h3>
                
                <p className="font-body text-[17px] leading-[1.6] text-[#C03A10]">
                  Most agencies take <span className="text-[#F05A28]">6-12 months</span> just to ship a basic MVP. By then, your Market window is closed and competitors have moved in.
                </p>
              </div>

              
              <div className="relative mt-auto">
                <div className="absolute top-[-32px] left-[12px] w-[90%] h-[1px] bg-[#FFCAB2]" />
                <div className="flex items-center gap-[24px]">
                  <div className="flex items-baseline text-[#C03A10]">
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

         
          <div className="flex flex-col gap-[36px] w-[692px] h-[554px] flex-none">
            
            
            <div className="relative w-full h-[259px] group transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[#FFF3EE] rounded-[32px] border-[1.5px] border-[#FFCAB2] shadow-[0_24px_48px_rgba(197,107,74,0.04)]" />
              
              {/* Cutout Masking Block */}
              <div className="absolute top-[-2px] right-[-2px] w-[130px] h-[100px] bg-[#F5F6F8] rounded-bl-[32px] border-b-[1.5px] border-l-[1.5px] border-[#FFCAB2] flex items-center justify-center z-10">
                <span className="font-heading font-extrabold text-[84px] tracking-[-4px] leading-none text-[#C03A10] drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] relative top-[-4px] right-[-4px]">
                  02
                </span>
              </div>

              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[130px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                      {/* Bar chart with slash icon */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                        <line x1="2" y1="2" x2="22" y2="22" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-extrabold text-[24px] tracking-tight text-[#111]">Feature Overload</h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4A4A4A]">
                    Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#F05A28]">by months</span>. You end up building what nobody asked for.
                  </p>
                </div>

                <div className="mt-[32px] flex items-center gap-[40px] pl-[12px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">3x</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[16px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[190px]">
                    Overbudget from unnecessary scope
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD 2 (Unreliable Developers) */}
            <div className="relative w-full h-[259px] group transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[#FFF3EE] rounded-[32px] border-[1.5px] border-[#FFCAB2] shadow-[0_24px_48px_rgba(197,107,74,0.04)]" />
              
              {/* Cutout Masking Block */}
              <div className="absolute top-[-2px] right-[-2px] w-[130px] h-[100px] bg-[#F5F6F8] rounded-bl-[32px] border-b-[1.5px] border-l-[1.5px] border-[#FFCAB2] flex items-center justify-center z-10">
                <span className="font-heading font-extrabold text-[84px] tracking-[-4px] leading-none text-[#C03A10] drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] relative top-[-4px] right-[-4px]">
                  03
                </span>
              </div>

              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[130px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#F05A28] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">
                      {/* Alert Triangle */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M10.29 3.86l-8.47 14.1A2 2 0 003.54 21h16.92a2 2 0 001.72-3.04l-8.47-14.1a2 2 0 00-3.42 0z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-extrabold text-[24px] tracking-tight text-[#111]">Unreliable Developers</h3>
                  </div>
                  <p className="font-body text-[16px] leading-[1.6] text-[#4A4A4A]">
                    Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#F05A28]">holding the bag</span> with nothing to show investors or customers.
                  </p>
                </div>

                <div className="mt-[32px] flex items-center gap-[40px] pl-[12px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">70%</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
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