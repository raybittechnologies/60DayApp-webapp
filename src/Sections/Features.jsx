import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';
import arrowSvg from '../assets/images/arrow.svg';
import Button from '../components/ui/Button';

const FeatureCard = ({ title, heading, desc, badgeRight, badgeBottom, tags, bottomSection, icon, className }) => (
  <div className={`relative flex flex-col p-[32px] md:p-[40px] bg-[#F7EBE5] rounded-[24px] overflow-hidden border border-white/80 shadow-[0_8px_24px_rgba(200,100,50,0.06),_inset_0_2px_4px_rgba(255,255,255,0.6)] ${className}`}>

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
    db: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
    dashboard: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg>,
    payment: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    bell: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    rocket: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1 1l-.5.5s-.5 3.74 2 5c0 0 3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1l5-5c0 0-.5-3.74-2-5l-.5.5c-1-.5-2-.5-3-1v-.5c0-1.5-.5-2-1.5-3-.5-1-1.5-1.5-3-1.5h-.5l.5-.5c0 0-.5-3.74-2-5s-5 2-5 2l.5.5a10 10 0 0 0-4.5 4.5z" /><path d="M12 15l-3 3" /></svg>
  };

  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden pt-[60px] pb-[60px]">


      <div className="relative z-10 w-full max-w-[1280px]  flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center max-w-[800px] mb-[60px]">
          <EyebrowPill variant="label">What You Get</EyebrowPill>

          <h2 className="font-heading font-extrabold text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Everything You Need <br /> to <span className="text-brand-orange">Launch Your MVP</span>
          </h2>

          <p className="font-body text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px] max-w-[640px]">
            Six battle-tested deliverables &mdash; from first <span className="text-[#FA8B61]">commit to App Store</span> approval. Nothing missing, nothing extra.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div
          className=" rounded-[28px]  w-full "
          style={{
            // background: 'linear-gradient(145deg, #FFF3ED 0%, #FDEEE6 40%, #FBE6DB 100%)',
            // border: '1px solid rgba(230, 109, 61, 0.08)',

          }}
        >
          <div className="flex gap-10 ">

            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-8">

              {/* Feature 01 - Mobile App Development */}
              <div
                className="rounded-[22px] p-6 relative"
                style={{


                  background: 'linear-gradient(180deg, rgba(240, 90, 40, 0.08) 0% , rgba(240, 90, 40, 0.06) 70%,rgba(240, 90, 40, 0.3) 100%)',

                  border: '1px solid rgba(240, 90, 40, 0.16)',
                  borderRadius: '16px'
                }}
              >
                <div className="flex items-center gap-5 mb-4"> {/* Increased gap from 2.5 to 5 */}
                  <div
                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center" // Changed to rounded-full and slightly larger for a better circular look
                    style={{
                      background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
                      boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 01</span>
                </div>
                <span className="
  inline-flex
  items-center
  justify-center
  text-[18px]
  font-normal
  text-white
  bg-[#C03A10]
  border border-[#E66D3D30]
  rounded-full
  px-6
  py-2
  mb-4
">
                  Core deliverable
                </span>

                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-3">Mobile App Development</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-5">
                  Cross-platform iOS and Android app built simultaneously. One codebase, both stores, full native performance. Clean architecture designed to scale as your user base grows.
                </p>

                <div className="flex flex-wrap gap-x-[30px] gap-y-4 mb-6">
                  {["iOS App Store", "Google Play Store", "Cross-platform"].map((text) => (
                    <span
                      key={text}
                      className="flex items-center gap-2 px-2 py-1 bg-[#FFCAB2] rounded-[4px] text-[18px] leading-[170%] font-[400] text-[#C03A10] font-['Inter']"
                    >
                      <span className="w-[7px] h-[7px] rounded-full bg-[#C03A10]"></span>
                      {text}
                    </span>
                  ))}
                </div>
                {/* Changed border-t to border-t-2 and increased the opacity of the color */}
                <div
                  className="border-t-4 border-dashed mb-6 mt-4"
                  style={{ borderColor: '#FF8055' }}
                />                <div className="flex items-center gap-10">
                  <span className="text-[48px] font-[800] text-[#C44A20] leading-none">60d</span>
                  <p className="text-[28px] text-[#1A1A1A] font-[600] leading-snug pb-1">
                    from first call<br />to App Store live
                  </p>
                </div>
              </div>

              {/* Arrow decoration */}
              <div className="flex justify-end pointer-events-none">
                <img src={arrowSvg} alt="" className="w-[258px] h-auto" />
              </div>

            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-5">

              {/* Feature 02 - Backend Infrastructure */}
              <div
                className="rounded-[22px] p-6 relative"
                style={{
                  background: 'linear-gradient(90deg, rgba(240, 90, 40, 0.08) 0% , rgba(240, 90, 40, 0.06) 70%,rgba(240, 90, 40, 0.3) 100%)',
                  border: '1px solid rgba(240, 90, 40, 0.16)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <div
                      className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
                        boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                    </div>
                    <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 02</span>
                  </div>
                  <span className="
  inline-flex
  items-center
  justify-center
  text-[18px]
  font-normal
  text-white
  bg-[#C03A10]
  border border-[#E66D3D30]
  rounded-full
  px-6
  py-2
  mb-4
">
                    Infrastructure
                  </span>
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Backend Infrastructure</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-4">
                  Secure, scalable backend built for growth. APIs, database, auth and cloud hosting — all production-ready.
                </p>
                <div className="flex flex-wrap gap-x-[18px] gap-y-2">
                  {["REST / GraphQL APIs", "Auth + security", "Cloud deployment"].map((text) => (
                    <span
                      key={text}
                      className="flex items-center gap-2 px-2 py-1 bg-[#FFCAB2] rounded-[4px] text-[18px] leading-[170%] font-[400] text-[#C03A10] font-['Inter']"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#C03A10]"></span>
                        {text}
                      </span>
                    </span>
                  ))}
                </div>   </div>

              {/* Feature 03 - Admin Dashboard */}
              <div
                className="rounded-[22px] p-6 relative"
                style={{
                  background: 'linear-gradient(-360deg, rgba(240, 90, 40, 0.08) 0% , rgba(240, 90, 40, 0.06) 80%,rgba(240, 90, 40, 0.3) 100%)',
                  border: '1px solid rgba(240, 90, 40, 0.16)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <div
                      className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
                        boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                    </div>
                    <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 03</span>
                  </div>
                  <span className="
  inline-flex
  items-center
  justify-center
  text-[18px]
  font-normal
  text-white
  bg-[#C03A10]
  border border-[#E66D3D30]
  rounded-full
  px-6
  py-2
  mb-4
">
                    Management
                  </span>
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Admin Dashboard</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-4">
                  Manage users, data and content from a clean web dashboard. No dev needed to run your product.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {["User management", "Content control", "Analytics overview"].map((text) => (
                    <span
                      key={text}
                      className="flex items-center gap-2 px-2 py-1 bg-[#FFCAB2] rounded-[4px] text-[18px] leading-[170%] font-[400] text-[#C03A10] font-['Inter']"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#C03A10]"></span>
                        {text}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Row - Features 04+05 left, Feature 06 right */}
          <div className="flex gap-5 mt-5">

            {/* Left sub-column: Feature 04 + Feature 05 stacked */}
            <div className="w-1/2 min-w-0 flex flex-col gap-5">

              {/* Feature 04 - Payment Integration */}
              <div
                className="rounded-[22px] p-6 relative"
                style={{
                  background: 'linear-gradient(-180deg, rgba(240, 90, 40, 0.08) 0% , rgba(240, 90, 40, 0.06) 70%,rgba(240, 90, 40, 0.3) 100%)',
                  border: '1px solid rgba(240, 90, 40, 0.16)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <div
                      className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
                        boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </div>
                    <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 04</span>
                  </div>

                  <span className="
  inline-flex
  items-center
  justify-center
  text-[18px]
  font-normal
  text-white
  bg-[#C03A10]
  border border-[#E66D3D30]
  rounded-full
  px-6
  py-2
  mb-4
">
                    Revenue Ready</span>
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Payment Integration</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed">
                  Stripe and in-app purchase systems. Start charging users from day one — subscriptions, one-time, and more.
                </p>
              </div>

              {/* Feature 05 - Push Notifications */}
              <div
                className="rounded-[22px] p-6 relative"
                style={{
                  background: 'linear-gradient(-180deg, rgba(240, 90, 40, 0.08) 0% , rgba(240, 90, 40, 0.06) 70%,rgba(240, 90, 40, 0.3) 100%)',
                  border: '1px solid rgba(240, 90, 40, 0.16)',
                }}
              >
                <div className="flex items-center gap-5 mb-3">
                  <div
                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
                      boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                  </div>
                  <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 05</span>
                  <span className="
  inline-flex
  items-center
  justify-center
  text-[18px]
  font-normal
  text-white
  bg-[#C03A10]
  border border-[#E66D3D30]
  rounded-full
  px-6
  py-2
  mb-4
  ml-auto
">
                    Engagement</span>
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Push Notifications</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed">
                  Re-engage users with targeted push notifications. Built-in for both iOS and Android from launch day.
                </p>
              </div>

            </div>

            {/* Feature 06 - App Store Deployment (spans full height) */}
            <div
              className="w-1/2 min-w-0 rounded-[22px] p-6 relative flex flex-col"
              style={{
                background: 'linear-gradient(-180deg, rgba(240, 90, 40, 0.08) 0% , rgba(240, 90, 40, 0.06) 70%,rgba(240, 90, 40, 0.3) 100%)',
                border: '1px solid rgba(240, 90, 40, 0.16)',
              }}
            >
              <div className="flex items-center gap-5 mb-4">
                <div
                  className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
                    boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 06</span>
              </div>

              <span className="
  inline-flex
  items-center
  justify-center
  text-[18px]
  font-normal
  text-white
  bg-[#C03A10]
  border border-[#E66D3D30]
  rounded-full
  px-6
  py-2
  mb-4
  w-fit
"> Go Live
              </span>

              <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">App Store Deployment</h3>
              <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-5">
                Full App Store and Google Play submission — screenshots, metadata, review process handled by us. You just approve and go live.
              </p>

              <div className="flex flex-wrap gap-x-[18px] gap-y-4 mb-6">
                {["App Store", "Google Play"].map((text) => (
                  <span
                    key={text}
                    className="flex items-center gap-2 px-2 py-1 bg-[#FFCAB2] rounded-[4px] text-[18px] leading-[170%] font-[400] text-[#C03A10] font-['Inter']"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#C03A10]"></span>
                      {text}
                    </span>
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <div
                  className="mb-6"
                  style={{
                    borderTop: "3px dashed #FF8055", // bold + color
                  }}
                />

                <p className="text-[48px] font-[800] text-[#C03A10] text-center">
                  Your App is Live!
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Horizontal Banner */}
        {/* Bottom Horizontal Banner */}
        <div className="w-full bg-[linear-gradient(-180deg,rgba(240,90,40,0.08)_0%,rgba(240,90,40,0.06)_40%,rgba(240,90,40,0.3)_100%)] rounded-[24px] p-[40px] border border-[rgba(240,90,40,0.16)] shadow-[0_12px_32px_rgba(200,100,50,0.04)] flex flex-col items-center mt-[80px]">

          {/* Main Headline */}
          <div className="text-center mb-[24px]">
            <h3 className="font-heading font-extrabold text-[48px] md:text-[56px] text-[#1A1A1A] leading-[1.1] tracking-[-1px]">
              All 6 deliverables. 60 days. <span className="text-[#C03A10]">Guaranteed.</span>
            </h3>
            <p className="font-body font-semibold text-[20px] text-[#2B2E34] mt-[24px]">
              Not a single item outsourced. Your dedicated team builds everything in-house.
            </p>
          </div>

          {/* Stats and CTA Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[80px] mt-[20px] w-full">

            {/* Stats Group */}
            <div className="flex items-center gap-[40px] md:gap-[60px]">
              <div className="flex flex-col items-center">
                <span className="font-heading font-extrabold text-[18px] text-[#C03A10] leading-none">7+</span>
                <span className="font-body text-[18px] font-[400] text-[#1A1A1A] mt-[8px]">Years of Exp</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-heading font-extrabold text-[18px] text-[#C03A10] leading-none">40+</span>
                <span className="font-body text-[18px] font-[400] text-[#1A1A1A] mt-[8px]">Projects Done</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-heading font-extrabold text-[18px] text-[#C03A10] leading-none">100%</span>
                <span className="font-body text-[18px] font-[400] text-[#1A1A1A] mt-[8px]">Job Success</span>
              </div>
            </div>

            <Button
              variant="primary"
              className="!w-auto min-w-[332px] !rounded-[32px]"
            >
              Book Free Call
            </Button>

          </div>
        </div>

      </div>
    </section>
  );
}