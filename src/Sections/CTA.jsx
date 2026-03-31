import React from 'react';

const GeometricFounder = () => (
  // A clean, abstract CSS representation of the founder photo from the mockup
  <div className="relative w-[340px] h-[360px] mx-auto flex flex-col items-center mt-auto justify-end drop-shadow-lg z-10 transition-transform duration-500 hover:scale-[1.02]">
     {/* Head */}
     <div className="w-[110px] h-[130px] rounded-[50px] bg-gradient-to-b from-[#7D5A50] to-[#593930] border-[4px] border-[#FDF8F5] shadow-sm z-10 -mb-[24px]" />
     {/* Body */}
     <div className="w-[200px] h-[200px] bg-gradient-to-t from-[#B2C6D1] to-[#E5EDF1] rounded-t-[80px] z-20 flex justify-center items-end pb-[24px] relative overflow-hidden">
        {/* Striped shirt pattern overlay */}
        <div className="absolute inset-0 opacity-40">
           <div className="w-full h-[12px] bg-white mt-[30px]" />
           <div className="w-full h-[12px] bg-white mt-[20px]" />
           <div className="w-full h-[12px] bg-white mt-[20px]" />
           <div className="w-full h-[12px] bg-white mt-[20px]" />
        </div>
        
        {/* Mock Laptop Layered on top */}
        <div className="w-[180px] h-[110px] bg-gradient-to-b from-white to-[#F8FAFC] rounded-t-[12px] shadow-[0_-4px_16px_rgba(0,0,0,0.1)] absolute bottom-[0px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center border-t-[8px] border-[#F1F5F9]">
           {/* Apple logo placeholder via geometric dot */}
           <div className="w-[20px] h-[20px] rounded-full bg-[#E2E8F0]" />
        </div>
     </div>
  </div>
);

export default function CTA() {
  return (
    <section className="relative w-full bg-white flex justify-center items-start pt-[120px] pb-[160px]">
      <div className="w-full max-w-[1080px] px-[24px] flex flex-col gap-[32px] md:gap-[48px]">
        
        {/* Top CTA Block: "Ready to Launch Your Startup?" */}
        <div className="w-full bg-gradient-to-b from-[#FFF6F2] to-[#F1E4DE] border-[1.5px] border-[#FAEDE8] shadow-[0_8px_32px_rgba(200,100,50,0.04)] rounded-[24px] py-[64px] px-[24px] flex flex-col items-center text-center transition-shadow hover:shadow-[0_12px_48px_rgba(200,100,50,0.08)]">
          
          <h2 className="font-heading font-extrabold text-[36px] md:text-[44px] text-[#111] leading-[1.15] tracking-tight max-w-[600px]">
            Ready to Launch Your <span className="text-[#DE6235]">Startup ?</span>
          </h2>
          
          <p className="font-body font-bold text-[16px] text-[#4A4A4A] mt-[16px]">
            Book a free 15-minute MVP scoping call.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[20px] mt-[40px] w-full">
            {/* Left Button */}
            <button className="w-full sm:w-auto px-[32px] py-[16px] rounded-full bg-gradient-to-r from-[#FDF8F5] to-[#F1E5E0] shadow-[0_4px_16px_rgba(220,120,80,0.08),_inset_0_2px_4px_rgba(255,255,255,0.8)] text-[#D8562B] font-heading font-extrabold text-[16px] border border-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(220,120,80,0.15)] focus:ring-4 focus:ring-[#D8562B]/20">
              Get MVP Estimate
            </button>
            
            {/* Right Button */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-[8px] px-[32px] py-[16px] rounded-full bg-gradient-to-r from-[#FA8B61] to-[#F26B3B] shadow-[0_8px_24px_rgba(240,90,40,0.3)] text-white font-heading font-extrabold text-[16px] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(240,90,40,0.4)] hover:from-[#FC9B74] hover:to-[#F4794E] focus:ring-4 focus:ring-[#F26B3B]/30">
              <span>Start Your MVP</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px]">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

        </div>


        {/* Bottom CTA Block: "Let's get you started!" Form Area */}
        <div className="w-full bg-gradient-to-tl from-[#F1E1DA] to-[#FCF4EF] border-[1.5px] border-[#FAECE6] shadow-[0_8px_32px_rgba(200,100,50,0.06)] rounded-[24px] overflow-hidden flex flex-col pt-[56px] lg:pt-[80px] relative mt-[16px]">
          
          <h2 className="font-heading font-extrabold text-[44px] lg:text-[56px] text-[#A63510] text-center z-20 px-[24px] leading-none tracking-tight">
            Let's get you started!
          </h2>
          
          <div className="flex flex-col lg:flex-row items-end flex-grow">
            
            {/* Left Half: Geometric Founder Container */}
            <div className="relative w-full lg:w-1/2 flex justify-center self-end mt-auto pt-[40px] px-[24px]">
              <GeometricFounder />
            </div>
            
            {/* Right Half: Opt-in Form */}
            <div className="w-full lg:w-1/2 p-[24px] lg:p-[56px] lg:pl-[0px] flex justify-center lg:justify-start z-20 pb-[48px] lg:pb-[56px]">
              <div className="w-full max-w-[460px] bg-white rounded-[24px] p-[32px] md:p-[40px] shadow-[0_16px_48px_rgba(200,100,50,0.08)] border-[1px] border-white/80">
                 
                 <form className="flex flex-col gap-[16px]" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="font-heading font-extrabold text-[20px] text-[#1A1A1A] mb-[8px] text-center tracking-tight leading-tight">
                      Get your MVP plan in <span className="text-[#FA6A31]">24 hours</span>
                    </h3>
                    
                    {/* Name Input */}
                    <div className="relative">
                      <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#FA6A31]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <input type="text" placeholder="Enter your name" className="w-full h-[52px] pl-[46px] pr-[16px] rounded-[8px] border border-[#FADCD0] focus:outline-none focus:border-[#FA6A31] focus:ring-2 focus:ring-[#FA6A31]/20 font-body text-[14px] text-[#111] placeholder:text-[#9A9A9A] transition-colors" />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#FA6A31]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M2 4l10 8 10-8"/>
                        </svg>
                      </div>
                      <input type="email" placeholder="Enter your email" className="w-full h-[52px] pl-[46px] pr-[16px] rounded-[8px] border border-[#FADCD0] focus:outline-none focus:border-[#FA6A31] focus:ring-2 focus:ring-[#FA6A31]/20 font-body text-[14px] text-[#111] placeholder:text-[#9A9A9A] transition-colors" />
                    </div>

                    {/* Startup Stage Radio Group */}
                    <div className="w-full border border-[#FADCD0] rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-[#FFFBF9]">
                      <span className="font-body text-[12px] font-bold text-[#4A4A4A]">Startup Stage</span>
                      <div className="flex justify-between gap-[8px]">
                        {/* Radio Option 1 */}
                        <label className="flex-1 flex items-center justify-center gap-[6px] py-[8px] border border-[#FBDCD0] bg-white rounded-[6px] cursor-pointer hover:bg-[#FFF5F0]/50 transition-colors">
                          <input type="radio" name="stage" value="Idea" className="hidden peer" defaultChecked />
                          <div className="w-[14px] h-[14px] rounded-full border border-[#D1D1D1] peer-checked:border-[#FA6A31] flex items-center justify-center">
                              <div className="w-[6px] h-[6px] rounded-full bg-[#FA6A31] opacity-0 peer-checked:opacity-100" />
                          </div>
                          <span className="text-[11px] font-bold text-[#4A4A4A]">Idea</span>
                        </label>
                        
                        {/* Radio Option 2 */}
                        <label className="flex-1 flex items-center justify-center gap-[6px] py-[8px] border border-[#FBDCD0] bg-white rounded-[6px] cursor-pointer hover:bg-[#FFF5F0]/50 transition-colors">
                          <input type="radio" name="stage" value="Prototype" className="hidden peer" />
                          <div className="w-[14px] h-[14px] rounded-full border border-[#D1D1D1] peer-checked:border-[#FA6A31] flex items-center justify-center">
                              <div className="w-[6px] h-[6px] rounded-full bg-[#FA6A31] opacity-0 peer-checked:opacity-100" />
                          </div>
                          <span className="text-[11px] font-bold text-[#4A4A4A]">Prototype</span>
                        </label>

                        {/* Radio Option 3 */}
                        <label className="flex-1 flex items-center justify-center gap-[6px] py-[8px] border border-[#FBDCD0] bg-white rounded-[6px] cursor-pointer hover:bg-[#FFF5F0]/50 transition-colors">
                          <input type="radio" name="stage" value="Funded" className="hidden peer" />
                          <div className="w-[14px] h-[14px] rounded-full border border-[#D1D1D1] peer-checked:border-[#FA6A31] flex items-center justify-center">
                              <div className="w-[6px] h-[6px] rounded-full bg-[#FA6A31] opacity-0 peer-checked:opacity-100" />
                          </div>
                          <span className="text-[11px] font-bold text-[#4A4A4A]">Funded</span>
                        </label>
                      </div>
                    </div>

                    {/* Target Launch Date Dropdown */}
                    <div className="relative">
                      <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#FA6A31]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                      </div>
                      <select className="w-full h-[52px] pl-[46px] pr-[32px] rounded-[8px] border border-[#FADCD0] focus:outline-none focus:border-[#FA6A31] focus:ring-2 focus:ring-[#FA6A31]/20 font-body font-medium text-[14px] text-[#4A4A4A] appearance-none bg-white cursor-pointer transition-colors">
                        <option value="" disabled selected>Target launch date</option>
                        <option value="1">Within 1 Month</option>
                        <option value="2">1-3 Months</option>
                        <option value="3">3-6 Months</option>
                        <option value="4">Flexible</option>
                      </select>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#FA6A31] pointer-events-none">
                         <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                           <path d="M6 9l6 6 6-6"/>
                         </svg>
                      </div>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="relative">
                      <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#FA6A31]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                      </div>
                      <select className="w-full h-[52px] pl-[46px] pr-[32px] rounded-[8px] border border-[#FADCD0] focus:outline-none focus:border-[#FA6A31] focus:ring-2 focus:ring-[#FA6A31]/20 font-body font-medium text-[14px] text-[#4A4A4A] appearance-none bg-white cursor-pointer transition-colors">
                        <option value="" disabled selected>Budget Range</option>
                        <option value="1">$10k - $25k</option>
                        <option value="2">$25k - $50k</option>
                        <option value="3">$50k+</option>
                      </select>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#FA6A31] pointer-events-none">
                         <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                           <path d="M6 9l6 6 6-6"/>
                         </svg>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full h-[56px] bg-gradient-to-r from-[#FA8B61] to-[#F26B3B] hover:from-[#FC9B74] hover:to-[#F4794E] rounded-full text-white font-heading font-extrabold text-[16px] transition-all hover:-translate-y-1 mt-[12px] shadow-[0_8px_24px_rgba(240,90,40,0.3)] focus:ring-4 focus:ring-[#F26B3B]/30">
                      Get Free MVP Plan
                    </button>

                 </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}