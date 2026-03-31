import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-soft-gray pb-[64px] flex justify-center">
      <div className="w-full max-w-[1280px] px-[24px]">
        <div className="w-full bg-gradient-to-br from-[#F5E6DF] to-[#EBE0DA] rounded-[32px] p-[48px] lg:p-[64px] border border-white shadow-[0_8px_32px_rgba(200,100,50,0.06)] flex flex-col">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-[48px] lg:gap-[32px]">
            
            {/* Column 1: Logo & Mission */}
            <div className="flex flex-col pr-[0] lg:pr-[32px]">
              
              {/* Logo */}
              <div className="font-heading font-extrabold text-[36px] tracking-tight text-[#1A1A1A] leading-none">
                 60Day<span className="text-[#FA6A31]">App</span>
              </div>
              
              {/* Mission Statement */}
              <p className="font-body text-[#7A7A7A] text-[15px] leading-[1.7] mt-[24px] max-w-[340px] font-medium">
                Launch your startup MVP in 60 days. From idea to App Store with a dedicated product team — fast, reliable, no excuses.
              </p>

              {/* Badges Grid */}
              <div className="flex gap-[20px] mt-[32px]">
                 
                 {/* Badge 1: Upwork */}
                 <div className="flex flex-col items-start gap-[8px]">
                    <div className="flex items-center gap-[4px] text-[#14A800]">
                       <span className="font-heading font-extrabold text-[16px] tracking-tight">upwork</span>
                    </div>
                    <span className="font-body text-[10px] text-[#7A7A7A] font-bold leading-tight max-w-[90px]">
                       Trusted Upwork Agency
                    </span>
                 </div>

                 {/* Badge 2: Job Success */}
                 <div className="flex flex-col items-start gap-[8px]">
                    <div className="text-[#14A800]">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <span className="font-body text-[10px] text-[#7A7A7A] font-bold leading-tight max-w-[60px]">
                       100% Job Success
                    </span>
                 </div>

                 {/* Badge 3: Projects */}
                 <div className="flex flex-col items-start gap-[8px]">
                    <div className="text-[#14A800]">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    </div>
                    <span className="font-body text-[10px] text-[#7A7A7A] font-bold leading-tight max-w-[80px]">
                       40+ Projects Completed
                    </span>
                 </div>

              </div>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col lg:mt-[12px]">
              <h4 className="font-heading font-extrabold text-[#1A1A1A] text-[16px] mb-[24px]">Company</h4>
              <ul className="flex flex-col gap-[16px]">
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">About Us</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">How it Works</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Case Studies</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Our Process</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Raybit Technologies</a></li>
                 <li><a href="#" className="font-body text-[#D8562B] hover:text-[#BA411C] transition-colors text-[14px] font-bold underline decoration-[#D8562B]/30 tracking-tight">Book a call</a></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col lg:mt-[12px]">
              <h4 className="font-heading font-extrabold text-[#1A1A1A] text-[16px] mb-[24px]">Our Services</h4>
              <ul className="flex flex-col gap-[16px]">
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Mobile App Dev</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Backend Infrastructure</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Admin Dashboard</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Payment Integration</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Push Notifications</a></li>
                 <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">App Store Deployment</a></li>
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="flex flex-col lg:mt-[12px]">
               <h4 className="font-heading font-extrabold text-[#1A1A1A] text-[16px] mb-[24px]">Get in Touch</h4>
               <ul className="flex flex-col gap-[16px]">
                  <li><a href="mailto:hello@60dayapp.com" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">hello@60dayapp.com</a></li>
                  <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Book Discovery Call</a></li>
                  <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Get MVP Estimate</a></li>
                  <li><a href="#" className="font-body text-[#7A7A7A] hover:text-[#FA6A31] transition-colors text-[14px] font-medium tracking-tight">Upwork Profile</a></li>
               </ul>

               {/* Social Icons Row */}
               <div className="flex items-center gap-[12px] mt-[24px]">
                  {/* LinkedIn */}
                  <a href="#" className="text-[#0077B5] hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {/* X */}
                  <a href="#" className="text-[#1A1A1A] hover:opacity-80 transition-opacity">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.6 10.6l8.8-10.3h-2.1l-7.7 8.9-6.1-8.9h-7l9.3 13.5-9.3 10.9h2.1l8.1-9.4 6.5 9.4h7l-9.6-14zM14.7 20.3L5.4 3.7h3.2l7.9 11.6h-3.2l-7.9-11.6z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#f09433" />
                          <stop offset="0.25" stopColor="#e6683c" />
                          <stop offset="0.5" stopColor="#dc2743" />
                          <stop offset="0.75" stopColor="#cc2366" />
                          <stop offset="1" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
               </div>
            </div>

          </div>

          {/* Divider Horizontal Line */}
          <div className="w-full h-[1px] bg-[#EEDCD4] my-[48px]" />

          {/* Lower Section */}
          <div className="flex flex-col gap-[20px] w-full items-center">
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
               <p className="font-body text-[#7A7A7A] text-[13px] font-medium tracking-wide">
                 © 2026 60Day<span className="text-[#FA6A31]">App</span>. All rights reserved.
               </p>
               
               <p className="font-heading font-bold text-[#1A1A1A] text-[15px] mt-[12px] md:mt-0">
                 Powered by <span className="text-[#FA6A31]">Raybit Technologies</span>
               </p>
            </div>

            {/* Bottom-most Links */}
            <div className="flex items-center justify-center gap-[24px]">
               <a href="#" className="font-body text-[#7A7A7A] text-[12px] font-semibold underline decoration-[#7A7A7A]/40 hover:text-[#FA6A31] transition-colors">Privacy Policy</a>
               <a href="#" className="font-body text-[#7A7A7A] text-[12px] font-semibold underline decoration-[#7A7A7A]/40 hover:text-[#FA6A31] transition-colors">Terms of Service</a>
               <a href="#" className="font-body text-[#7A7A7A] text-[12px] font-semibold underline decoration-[#7A7A7A]/40 hover:text-[#FA6A31] transition-colors">Cookie Policy</a>
            </div>
            
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;