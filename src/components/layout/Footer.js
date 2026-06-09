

import React from 'react';
import UpworkLogo from '@/assets/images/logos_upwork.png';
import TickIcon from '@/assets/images/icon_tick.png';
import ProjectIcon from '@/assets/images/project-outlined.png';

const Footer = () => {
  return (

    <footer className="section-outer pt-[20px] sm:pt-[32px] pb-[40px] sm:pb-[64px]">
      <div className="section-inner">
        <div className="w-full bg-[#FF80551A] rounded-[24px] p-[24px] sm:p-[48px] lg:p-[64px] flex flex-col overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-[32px] sm:gap-[48px] lg:gap-[32px]">

            <div className="flex flex-col max-w-full sm:max-w-[294px] shrink-0">
              <div className="font-heading font-extrabold text-[32px] sm:text-[40px] tracking-tight text-[#1A1A1A] leading-none">
                60Day<span className="text-[#FA6A31]">App</span>
              </div>
              <p className="font-body font-normal text-[16px] leading-[170%] text-[#6B7280] mt-[16px] sm:mt-[20px]">
                Launch your startup MVP in 60 days. From idea to App Store with a dedicated product team — fast, reliable, no excuses
              </p>
              <div className="flex flex-wrap gap-[16px] sm:gap-[24px] mt-[20px] sm:mt-[24px] items-start">
                <div className="flex flex-col items-start gap-[6px]">
                  <img src={UpworkLogo.src} alt="Upwork" className="h-[16px] sm:h-[18px] w-auto object-contain" />
                  <span className="font-body text-[9px] text-[#6B7280] font-normal leading-tight max-w-[80px]">Top rated Upwork Agency</span>
                </div>
                <div className="flex flex-col items-start gap-[6px]">
                   <img src={TickIcon.src} alt="Job Success" className="h-[16px] sm:h-[18px] w-auto object-contain" />
                  <span className="font-body text-[9px] text-[#6B7280] font-normal leading-tight max-w-[60px]">100% Job Success</span>
                </div>
                <div className="flex flex-col items-start gap-[6px]">
                  <img src={ProjectIcon.src} alt="Projects" className="h-[16px] sm:h-[18px] w-auto object-contain" />
                  <span className="font-body text-[9px] text-[#6B7280] font-normal leading-tight max-w-[80px]">40+ Projects Completed</span>
                </div>
              </div>
            </div>


            <div className="flex flex-col lg:mt-[12px]">
              <h4 className="font-heading font-semibold text-[#1A1A1A] text-[18px] sm:text-[20px] mb-[20px] sm:mb-[24px]">Company</h4>
              <ul className="flex flex-col gap-[14px] sm:gap-[16px]">
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">About Us</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">How it Works</a></li>
                <li><a href="/case-study/expense-tracker" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Case Studies</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Our Process</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Raybit Technologies</a></li>
                <li><a href="#" className="underline font-body text-[#F05A28] hover:text-[#BA411C] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Book a call</a></li>
              </ul>
            </div>


            <div className="flex flex-col lg:mt-[12px]">
              <h4 className="font-heading font-semibold text-[#1A1A1A] text-[18px] sm:text-[20px] mb-[20px] sm:mb-[24px]">Our Services</h4>
              <ul className="flex flex-col gap-[14px] sm:gap-[16px]">
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Mobile App Dev</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Backend Infrastructure</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Admin Dashboard</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Payment Integration</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Push Notifications</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">App Store Deployment</a></li>
              </ul>
            </div>


            <div className="flex flex-col lg:mt-[12px]">
              <h4 className="font-heading font-semibold text-[#1A1A1A] text-[18px] sm:text-[20px] mb-[20px] sm:mb-[24px]">Get in Touch</h4>
              <ul className="flex flex-col gap-[14px] sm:gap-[16px]">
                <li><a href="mailto:hello@60dayapp.com" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">hello@60dayapp.com</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Book Discovery Call</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Get MVP Estimate</a></li>
                <li><a href="#" className="font-body text-[#2B2E34] hover:text-[#FA6A31] transition-colors text-[15px] sm:text-[16px] font-normal tracking-tight">Upwork Profile</a></li>
              </ul>
              <div className="flex items-center gap-[12px] mt-[24px]">
                <a href="#" className="text-[#0077B5] hover:opacity-80 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="text-[#1A1A1A] hover:opacity-80 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 10.6l8.8-10.3h-2.1l-7.7 8.9-6.1-8.9h-7l9.3 13.5-9.3 10.9h2.1l8.1-9.4 6.5 9.4h7l-9.6-14zM14.7 20.3L5.4 3.7h3.2l7.9 11.6h-3.2l-7.9-11.6z" /></svg>
                </a>
                <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
              </div>
            </div>
          </div>


          <div className="w-full border-t-2 border-[#FFCAB2] my-[32px] sm:my-[48px] shrink-0" />

          {/* Lower Section */}
          <div className="flex flex-col gap-[16px] sm:gap-[20px] w-full items-center text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-[8px] md:gap-[24px] w-full">
              <p className="font-body text-[#1A1A1A] text-[14px] sm:text-[16px] font-normal tracking-wide">
                © 2026 60Day<span className="text-[#F05A28]">App</span>. All rights reserved.
              </p>
              <span className="hidden md:block text-[#7A7A7A] opacity-30">•</span>
              <p className="font-heading font-bold text-[#1A1A1A] text-[14px] sm:text-[16px]">
                Powered by <span className="text-[#F05A28] font-normal font-body">Raybit Technologies</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-[12px] sm:gap-[16px] md:gap-[24px]">
              <a href="#" className="font-body text-[#1A1A1A] text-[14px] sm:text-[16px] font-normal underline decoration-[#1A1A1A] hover:text-[#F05A28] hover:decoration-[#F05A28]">Privacy Policy</a>
              <a href="#" className="font-body text-[#1A1A1A] text-[14px] sm:text-[16px] font-normal underline decoration-[#1A1A1A] hover:text-[#F05A28] hover:decoration-[#F05A28]">Terms of Service</a>
              <a href="#" className="font-body text-[#1A1A1A] text-[14px] sm:text-[16px] font-normal underline decoration-[#1A1A1A] hover:text-[#F05A28] hover:decoration-[#F05A28]">Cookie Policy</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
