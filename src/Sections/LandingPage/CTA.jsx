

import React, { useState } from 'react';
import founderImg from '../../assets/images/person_image.png';
import Button from '../../components/ui/Button';

export default function CTA() {
  const [stage, setStage] = useState('Idea');

  return (
    /*
      ─ Use section-outer / section-inner for consistent 1440/1280 layout.
      ─ The white wrapper card goes INSIDE section-inner, not around it.
    */
    <section className="section-outer relative pt-[10px] pb-[40px] sm:pb-[60px]">
      <div className="section-inner flex flex-col gap-[24px] sm:gap-[32px] md:gap-[48px] bg-white rounded-[24px] pt-[32px] sm:pt-[40px] pb-[32px] sm:pb-[40px] px-[16px] sm:px-[24px] md:px-[40px]">

        {/* Top CTA Block */}
        <div className="w-full bg-gradient-to-b from-[#FFF6F2] to-[#F1E4DE] border border-[#FF8055] shadow-[0_8px_32px_rgba(200,100,50,0.04)] rounded-[24px] py-[48px] sm:py-[64px] px-[20px] sm:px-[24px] flex flex-col items-center text-center transition-shadow hover:shadow-[0_12px_48px_rgba(200,100,50,0.08)]">
          <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[44px] text-[#1A1A1A] leading-[1.15] tracking-tight max-w-[753px]">
            Ready to Launch Your <span className="text-[#F05A28]">Startup?</span>
          </h2>
          <p className="font-body font-bold text-[15px] sm:text-[16px] text-[#4A4A4A] mt-[12px] sm:mt-[16px]">Book a free 15-minute MVP scoping call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[14px] sm:gap-[20px] mt-[28px] sm:mt-[40px] w-full">
            <Button variant="ghost">Get MVP Estimate</Button>
            <Button variant="primary" showArrow={true}>Start Your MVP</Button>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="w-full bg-gradient-to-tl from-[#F1E1DA] to-[#FCF4EF] border border-[#FF8055] shadow-[0_8px_32px_rgba(200,100,50,0.06)] rounded-[24px] overflow-hidden flex flex-col pt-[40px] sm:pt-[56px] relative">
          <h2 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] text-[#C03A10] text-center z-20 px-[20px] sm:px-[24px] leading-none tracking-tight">Let's get you started!</h2>

          <div className="flex flex-col lg:flex-row items-end flex-grow">

            {/* Person Image — hidden on small, shown lg+ */}
            <div className="hidden lg:block relative w-full lg:w-1/2 self-end" style={{ height: '650px', overflow: 'visible' }}>
              <img
                src={founderImg}
                alt="Founder"
                className="scale-x-[-1]"
                style={{
                  width: '500px',
                  height: '650px',
                  position: 'absolute',
                  left: '10px',
                  objectFit: 'cover',
                  filter: 'drop-shadow(-8px 8px 24px rgba(240,90,40,0.45))'
                }}
              />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2 px-[16px] sm:px-[24px] py-[24px] sm:py-[40px] lg:py-[56px] lg:pl-[0px] flex justify-center lg:justify-start z-20">
              <div className="w-full max-w-[546px] bg-white rounded-[24px] p-[20px] sm:p-[32px] md:p-[40px] shadow-[0_16px_48px_rgba(200,100,50,0.08)] border border-[#FF8055]/20">
                <div className="flex flex-col gap-[12px] sm:gap-[14px]">

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-[18px] sm:text-[20px] text-[#1A1A1A] mb-[4px] text-center tracking-tight leading-tight">
                    Get your MVP plan in <span className="text-[#FA6A31]">24 hours</span>
                  </h3>

                  {/* Name */}
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#2B2E34]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Enter your name" className="w-full h-[48px] sm:h-[52px] pl-[42px] pr-[16px] rounded-[10px] border border-[#FF8055] focus:outline-none focus:border-[#FA6A31] font-body text-[15px] sm:text-[16px] text-[#000000] placeholder-[#000000]" />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#2B2E34]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <input type="email" placeholder="Enter your email" className="w-full h-[48px] sm:h-[52px] pl-[42px] pr-[16px] rounded-[10px] border border-[#FF8055] focus:outline-none focus:border-[#FA6A31] font-body text-[15px] sm:text-[16px] text-[#000000] placeholder-[#000000]" />
                  </div>

                  {/* Startup Stage */}
                  <div className="border border-[#FF8055] rounded-[10px] p-[12px] sm:p-[14px] flex flex-col gap-[10px] sm:gap-[12px]">
                    <span className="font-body text-[15px] sm:text-[16px] text-[#000000] font-medium">Startup Stage</span>
                    <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[10px]">
                      {['Idea', 'Prototype', 'Funded'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setStage(s)}
                          className={`flex-1 min-h-[40px] sm:min-h-[44px] rounded-[8px] border text-[14px] sm:text-[15px] font-body font-medium transition-all flex items-center justify-center gap-[6px] ${
                            stage === s
                              ? 'border-[#FA6A31] text-[#FA6A31] bg-[#FFF5F0]'
                              : 'border-[#FF8055] text-[#000000] bg-white hover:border-[#FA6A31] hover:text-[#FA6A31] hover:bg-[#FFF5F0]/50'
                          }`}
                        >
                          {stage === s && <span className="w-[8px] h-[8px] rounded-full bg-[#FA6A31] shrink-0" />}
                          <span className="truncate">{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Launch Date */}
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#2B2E34]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </span>
                    <select className="w-full h-[48px] sm:h-[52px] pl-[42px] pr-[16px] rounded-[10px] border border-[#FF8055] focus:outline-none focus:border-[#FA6A31] font-body text-[15px] sm:text-[16px] text-[#000000] appearance-none bg-white cursor-pointer">
                      <option value="" disabled>Target launch date</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2months">Within 2 months</option>
                      <option value="3months">Within 3 months</option>
                      <option value="6months">Within 6 months</option>
                    </select>
                    <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#BCBCBC] pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </span>
                  </div>

                  {/* Budget Range */}
                  <div className="relative">
                    <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#2B2E34]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </span>
                    <select className="w-full h-[48px] sm:h-[52px] pl-[42px] pr-[16px] rounded-[10px] border border-[#FF8055] focus:outline-none focus:border-[#FA6A31] font-body text-[15px] sm:text-[16px] text-[#000000] appearance-none bg-white cursor-pointer">
                      <option value="" disabled>Budget Range</option>
                      <option value="5k">$5k – $10k</option>
                      <option value="10k">$10k – $25k</option>
                      <option value="25k">$25k – $50k</option>
                      <option value="50k">$50k+</option>
                    </select>
                    <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#BCBCBC] pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-[8px] sm:mt-[12px] w-full flex [&>*]:w-full [&>*]:flex-1">
                    <Button variant="primary">Get Free MVP Plan</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}