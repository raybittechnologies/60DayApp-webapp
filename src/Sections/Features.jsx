import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';

const FeatureCard = ({ title, heading, desc, badgeRight, badgeBottom, tags, bottomSection, icon, className }) => (
  <div className={`relative flex flex-col p-[32px] md:p-[40px] bg-[#F7EBE5] rounded-[24px] overflow-hidden border border-white/80 shadow-[0_8px_24px_rgba(200,100,50,0.06),_inset_0_2px_4px_rgba(255,255,255,0.6)] ${className}`}>
     
     {/* Glowing radial gradient in the bottom right corner */}
     <div className="absolute -bottom-[30%] -right-[20%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(240,110,60,0.35)_0%,_rgba(240,110,60,0)_60%)] pointer-events-none" />

     {/* Header Row */}
     <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
           <div className="w-[36px] h-[36px] rounded-full bg-[#FA8758] flex items-center justify-center text-white shrink-0 shadow-sm border border-white/30">
             {icon}
           </div>
           <h3 className="font-heading font-extrabold text-[28px] text-[#1A1A1A] leading-none tracking-tight">{title}</h3>
        </div>
        
        {badgeRight && (
           <span className="hidden sm:inline-block bg-[#CA4A22] text-white text-[11px] font-bold px-[12px] py-[6px] rounded-full tracking-wide shrink-0 ml-[12px]">
             {badgeRight}
           </span>
        )}
     </div>

     {/* Badge Bottom (Feature 01, 06) */}
     {badgeBottom && (
        <div className="relative z-10 mt-[16px]">
           <span className="bg-[#CC4D22] text-white text-[12px] font-bold px-[16px] py-[6px] rounded-full tracking-wide inline-block">
             {badgeBottom}
           </span>
        </div>
     )}

     {/* Heading */}
     <h4 className="relative z-10 font-heading font-bold text-[22px] text-[#1A1A1A] mt-[24px] leading-tight max-w-[95%]">
       {heading}
     </h4>

     {/* Description */}
     <p className="relative z-10 font-body text-[14px] font-medium leading-[1.6] text-[#4A4B4B] mt-[12px]">
       {desc}
     </p>

     {/* Tags */}
     {tags && tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-[10px] mt-[20px]">
           {tags.map((tag, i) => (
              <div key={i} className="flex items-center gap-[6px] bg-[#FAD9CD]/50 px-[10px] py-[6px] rounded-[6px] border border-[#F8BFA7]/30">
                 <div className="w-[6px] h-[6px] rounded-full bg-[#E55928]" />
                 <span className="text-[11px] font-bold text-[#D35123] tracking-tight">{tag}</span>
              </div>
           ))}
        </div>
     )}

     {/* Bottom Section */}
     {bottomSection && (
        <div className="relative z-10 mt-auto pt-[40px]">
           {bottomSection}
        </div>
     )}
  </div>
);

export default function Features() {

  const ICONS = {
    mobile: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    db: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    dashboard: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>,
    payment: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    bell: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    rocket: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1 1l-.5.5s-.5 3.74 2 5c0 0 3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1l5-5c0 0-.5-3.74-2-5l-.5.5c-1-.5-2-.5-3-1v-.5c0-1.5-.5-2-1.5-3-.5-1-1.5-1.5-3-1.5h-.5l.5-.5c0 0-.5-3.74-2-5s-5 2-5 2l.5.5a10 10 0 0 0-4.5 4.5z"/><path d="M12 15l-3 3"/></svg>
  };

  return (
    <section className="relative w-full bg-bg-page flex justify-center items-start overflow-hidden pt-[120px] pb-[160px]">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[80px] left-[-150px] w-[600px] h-[600px] bg-[#FFE1D4] blur-[150px] rounded-full opacity-50 pointer-events-none" />
      <div className="absolute top-[80px] right-[-150px] w-[600px] h-[600px] bg-[#FFE1D4] blur-[150px] rounded-full opacity-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] px-[24px] flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center max-w-[800px] mb-[80px]">
          <EyebrowPill variant="label">What You Get</EyebrowPill>
          
          <h2 className="font-heading font-extrabold text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Everything You Need <br /> to <span className="text-brand-orange">Launch Your MVP</span>
          </h2>
          
          <p className="font-body text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px] max-w-[640px]">
            Six battle-tested deliverables &mdash; from first <span className="text-[#FA8B61]">commit to App Store</span> approval. Nothing missing, nothing extra.
          </p>
        </div>

        {/* Feature Grid Container */}
        <div className="relative w-full flex flex-col gap-[24px]">
          
          {/* Arrow Overlay between rows */}
          <svg className="hidden lg:block absolute left-[40%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[100px] z-20 pointer-events-none drop-shadow-sm" viewBox="0 0 160 100" fill="none">
             {/* Hand drawn looping arrow pointing down-left */}
             <path d="M 150 20 C 170 0, 190 60, 140 70 C 90 80, 60 50, 30 70" stroke="#FA8558" strokeWidth="5" strokeLinecap="round" fill="none" />
             <path d="M 50 50 L 25 75 L 55 90" stroke="#FA8558" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Top Row: Left Narrow (tall), Right Wide (stacked) */}
          <div className="flex flex-col lg:flex-row gap-[24px] w-full">
            {/* Left Col */}
            <div className="w-full lg:w-[42%] flex">
              <FeatureCard 
                className="flex-1"
                title="Feature 01"
                icon={ICONS.mobile}
                badgeBottom="Core deliverable"
                heading="Mobile App Development"
                desc="Cross-platform iOS and Android app built simultaneously. One codebase, both stores, full native performance. Clean architecture designed to scale as your user base grows."
                tags={["iOS App Store", "Google Play Store", "Cross-platform"]}
                bottomSection={
                  <>
                    <div className="w-full h-0 border-b-[2px] border-dotted border-[#DE8662]/60 mb-[20px]" />
                    <div className="flex items-center gap-[16px] pb-[8px]">
                      <span className="font-heading font-extrabold text-[48px] text-[#D25528] leading-none tracking-[-2px]">60d</span>
                      <span className="font-heading font-extrabold text-[#111] text-[16px] leading-[1.15] max-w-[140px]">from first call to App Store live</span>
                    </div>
                  </>
                }
              />
            </div>
            
            {/* Right Col */}
            <div className="w-full lg:w-[58%] flex flex-col gap-[24px]">
              <FeatureCard 
                title="Feature 02"
                icon={ICONS.db}
                badgeRight="Infrastructure"
                heading="Backend Infrastructure"
                desc="Secure, scalable backend built for growth. APIs, database, auth and cloud hosting — all production-ready."
                tags={["REST / GraphQL APIs", "Auth + security", "Cloud deployment"]}
              />
              <FeatureCard 
                title="Feature 03"
                icon={ICONS.dashboard}
                badgeRight="Management"
                heading="Admin Dashboard"
                desc="Manage users, data and content from a clean web dashboard. No dev needed to run your product."
                tags={["User management", "Content control", "Analytics overview"]}
              />
            </div>
          </div>

          {/* Bottom Row: Left Wide (stacked), Right Narrow (tall) */}
          <div className="flex flex-col lg:flex-row gap-[24px] w-full mt-[12px] lg:mt-0">
            {/* Left Col */}
            <div className="w-full lg:w-[58%] flex flex-col gap-[24px]">
              <FeatureCard 
                title="Feature 04"
                icon={ICONS.payment}
                badgeRight="Revenue Ready"
                heading="Payment Integration"
                desc="Stripe and in-app purchase systems. Start charging users from day one — subscriptions, one-time, and more."
              />
              <FeatureCard 
                title="Feature 05"
                icon={ICONS.bell}
                badgeRight="Engagement"
                heading="Push Notifications"
                desc="Re-engage users with targeted push notifications. Built-in for both iOS and Android from launch day."
              />
            </div>

            {/* Right Col */}
            <div className="w-full lg:w-[42%] flex">
              <FeatureCard 
                className="flex-1"
                title="Feature 06"
                icon={ICONS.rocket}
                badgeBottom="Go Live"
                heading="App Store Deployment"
                desc="Full App Store and Google Play submission — screenshots, metadata, review process handled by us. You just approve and go live."
                tags={["App Store", "Google Play"]}
                bottomSection={
                  <>
                    <div className="w-full h-0 border-b-[2px] border-dotted border-[#DE8662]/60 mb-[28px]" />
                    <div className="pb-[12px]">
                      <h5 className="font-heading font-extrabold text-[36px] text-[#D25528] leading-none text-center tracking-tight">Your App is Live!</h5>
                    </div>
                  </>
                }
              />
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Banner */}
        <div className="w-full bg-gradient-to-r from-[#F0DFD7] to-[#EAE0DC] rounded-[24px] p-[40px] border border-white/80 shadow-[0_12px_32px_rgba(200,100,50,0.08)] flex flex-col xl:flex-row items-center justify-between gap-[40px] mt-[80px]">
          
          <div className="flex flex-col max-w-[620px] text-center xl:text-left">
            <h3 className="font-heading font-extrabold text-[36px] md:text-[42px] text-[#1A1A1A] leading-[1.1] tracking-[-1.5px]">
              All 6 deliverables. 60 days. <span className="text-[#CF4E21]">Guaranteed.</span>
            </h3>
            <p className="font-body font-extrabold text-[15px] text-[#222222] mt-[16px]">
              Not a single item outsourced. Your dedicated team builds everything in-house.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[40px] shrink-0">
            <div className="flex flex-col items-center">
              <span className="font-heading font-extrabold text-[32px] md:text-[36px] text-[#D8562B] leading-none tracking-tight">7+</span>
              <span className="font-body text-[13px] font-bold text-[#4A4A4A] mt-[4px]">Years of Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading font-extrabold text-[32px] md:text-[36px] text-[#D8562B] leading-none tracking-tight">40+</span>
              <span className="font-body text-[13px] font-bold text-[#4A4A4A] mt-[4px]">Projects Done</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading font-extrabold text-[32px] md:text-[36px] text-[#D8562B] leading-none tracking-tight">100%</span>
              <span className="font-body text-[13px] font-bold text-[#4A4A4A] mt-[4px]">Job Success</span>
            </div>
            
            <button className="bg-gradient-to-b from-[#FD8B5E] to-[#FA703E] hover:from-[#FC9B74] hover:to-[#F46733] transition-all text-white font-bold px-[32px] py-[18px] rounded-full shadow-[0_8px_20px_rgba(250,112,62,0.4)] ml-[0] sm:ml-[16px] transform hover:-translate-y-1">
              Book Free Call
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}