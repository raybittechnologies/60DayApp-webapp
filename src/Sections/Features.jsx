import React from 'react';
import EyebrowPill from '../components/ui/EyebrowPill';
import arrowSvg from '../assets/images/arrow.svg';
import Button from '../components/ui/Button';


const featureCardBase = "rounded-[22px] p-5 sm:p-6 relative";
const featureGradientL = {
  background: 'linear-gradient(180deg, rgba(240, 90, 40, 0.08) 0%, rgba(240, 90, 40, 0.06) 70%, rgba(240, 90, 40, 0.3) 100%)',
  border: '1px solid rgba(240, 90, 40, 0.16)',
};
const featureGradientR = {
  background: 'linear-gradient(90deg, rgba(240, 90, 40, 0.08) 0%, rgba(240, 90, 40, 0.06) 70%, rgba(240, 90, 40, 0.3) 100%)',
  border: '1px solid rgba(240, 90, 40, 0.16)',
};
const featureGradientDown = {
  background: 'linear-gradient(-180deg, rgba(240, 90, 40, 0.08) 0%, rgba(240, 90, 40, 0.06) 70%, rgba(240, 90, 40, 0.3) 100%)',
  border: '1px solid rgba(240, 90, 40, 0.16)',
};
const featureGradientUp = {
  background: 'linear-gradient(-360deg, rgba(240, 90, 40, 0.08) 0%, rgba(240, 90, 40, 0.06) 80%, rgba(240, 90, 40, 0.3) 100%)',
  border: '1px solid rgba(240, 90, 40, 0.16)',
};

const IconBadge = ({ children }) => (
  <div
    className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0"
    style={{
      background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
      boxShadow: '0 3px 10px rgba(230, 109, 61, 0.25)',
    }}
  >
    {children}
  </div>
);

const FeatureLabel = ({ text }) => (
  <span className="inline-flex w-fit items-center justify-center text-[13px] md:text-[14px] font-normal text-white bg-[#C03A10] border border-[#E66D3D30] rounded-full px-4 py-1.5 whitespace-nowrap">
    {text}
  </span>
);

const FeatureNumber = ({ n }) => (
  <span className="text-[28px] md:text-[36px] xl:text-[48px] font-[700] text-[#1A1A1A]">Feature {n}</span>
);

const Tag = ({ text }) => (
  <span className="flex items-center gap-2 px-2 py-1 bg-[#FFCAB2] rounded-[4px] text-[13px] md:text-[15px] xl:text-[18px] leading-[170%] font-[400] text-[#C03A10]">
    <span className="w-[6px] h-[6px] rounded-full bg-[#C03A10] shrink-0"></span>
    {text}
  </span>
);

export default function Features() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden pt-[40px] sm:pt-[60px] pb-[40px] sm:pb-[60px]">
      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-8 lg:px-[24px] flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center max-w-[800px] mb-[40px] sm:mb-[60px]">
          <EyebrowPill variant="label">What You Get</EyebrowPill>

          <h2 className="font-heading font-extrabold text-[32px] sm:text-[40px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-1.5px] text-center text-[#1A1A1A] mt-[24px]">
            Everything You Need <br /> to <span className="text-brand-orange">Launch Your MVP</span>
          </h2>

          <p className="font-body text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] font-extrabold text-[#222222] text-center mt-[24px] max-w-[640px]">
            Six battle-tested deliverables &mdash; from first <span className="text-[#FA8B61]">commit to App Store</span> approval. Nothing missing, nothing extra.
          </p>
        </div>

        {/* ── MOBILE ONLY (<md) ── */}
        <div className="md:hidden w-full grid grid-cols-1 gap-4">

          {[
            {
              n: '01', label: 'Core deliverable', style: featureGradientL,
              title: 'Mobile App Development',
              desc: 'Cross-platform iOS and Android app built simultaneously. One codebase, both stores, full native performance.',
              tags: ['iOS App Store', 'Google Play Store', 'Cross-platform'],
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
              extra: (
                <>
                  <div className="border-t-4 border-dashed my-4" style={{ borderColor: '#FF8055' }} />
                  <div className="flex items-center gap-4">
                    <span className="text-[38px] font-[800] text-[#C44A20] leading-none">60d</span>
                    <p className="text-[17px] text-[#1A1A1A] font-[600] leading-snug">from first call<br />to App Store live</p>
                  </div>
                </>
              ),
            },
            {
              n: '02', label: 'Infrastructure', style: featureGradientR,
              title: 'Backend Infrastructure',
              desc: 'Secure, scalable backend built for growth. APIs, database, auth and cloud hosting — all production-ready.',
              tags: ['REST / GraphQL APIs', 'Auth + security', 'Cloud deployment'],
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
            },
            {
              n: '03', label: 'Management', style: featureGradientUp,
              title: 'Admin Dashboard',
              desc: 'Manage users, data and content from a clean web dashboard. No dev needed to run your product.',
              tags: ['User management', 'Content control', 'Analytics overview'],
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
            },
            {
              n: '04', label: 'Revenue Ready', style: featureGradientDown,
              title: 'Payment Integration',
              desc: 'Stripe and in-app purchase systems. Start charging users from day one — subscriptions, one-time, and more.',
              tags: [],
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
            },
            {
              n: '05', label: 'Engagement', style: featureGradientL,
              title: 'Push Notifications',
              desc: 'Re-engage users with targeted push notifications. Built-in for both iOS and Android from launch day.',
              tags: [],
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
            },
            {
              n: '06', label: 'Go Live', style: featureGradientR,
              title: 'App Store Deployment',
              desc: 'Full App Store and Google Play submission — screenshots, metadata, review process handled by us.',
              tags: ['App Store', 'Google Play'],
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
              extra: (
                <>
                  <div className="border-t-[3px] border-dashed mt-4" style={{ borderColor: '#FF8055' }} />
                  <p className="text-[30px] font-[800] text-[#C03A10] text-center mt-3">Your App is Live!</p>
                </>
              ),
            },
          ].map(({ n, label, style, title, desc, tags, icon, extra }) => (
            <div key={n} className="rounded-[22px] p-5 relative flex flex-col" style={style}>
              {/* Row 1: icon + feature number */}
              <div className="flex items-center gap-3 mb-3">
                <IconBadge>{icon}</IconBadge>
                <span className="text-[24px] font-[700] text-[#1A1A1A]">Feature {n}</span>
              </div>
              {/* Row 2: label pill */}
              <FeatureLabel text={label} />
              {/* Row 3: heading */}
              <h3 className="text-[20px] font-[600] text-[#1A1A1A] mt-3 mb-2">{title}</h3>
              {/* Row 4: description */}
              <p className="text-[14px] text-[#000000] font-[400] leading-relaxed">{desc}</p>
              {/* Row 5: tags */}
              {tags.length > 0 && (
                <div className="flex flex-col gap-2 mt-3">
                  {tags.map(t => <Tag key={t} text={t} />)}
                </div>
              )}
              {/* Optional extra content */}
              {extra}
            </div>
          ))}
        </div>

        {/* ── TABLET BENTO LAYOUT (md to lg) ── */}
        <div className="hidden md:block lg:hidden w-full">
          <div className="flex gap-5">

            {/* Left Column */}
            <div className="flex-[0.45] flex flex-col gap-5">
              {/* Feature 01 */}
              <div className="rounded-[22px] p-6 relative" style={featureGradientL}>
                <div className="flex items-center gap-3 mb-4">
                  <IconBadge>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                  </IconBadge>
                  <FeatureNumber n="01" />
                </div>
                <FeatureLabel text="Core deliverable" />
                <h3 className="text-[20px] font-[600] text-[#1A1A1A] mt-3 mb-2">Mobile App Development</h3>
                <p className="text-[14px] text-[#000000] font-[400] leading-relaxed mb-4">
                  Cross-platform iOS and Android app built simultaneously. One codebase, both stores, full native performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["iOS App Store", "Google Play Store", "Cross-platform"].map(t => <Tag key={t} text={t} />)}
                </div>
                <div className="border-t-4 border-dashed mb-4" style={{ borderColor: '#FF8055' }} />
                <div className="flex items-center gap-4">
                  <span className="text-[36px] font-[800] text-[#C44A20] leading-none">60d</span>
                  <p className="text-[16px] text-[#1A1A1A] font-[600] leading-snug">from first call<br />to App Store live</p>
                </div>
              </div>

              {/* Arrow decoration */}
              <div className="flex justify-end pointer-events-none">
                <img src={arrowSvg} alt="" className="w-[180px] h-auto" />
              </div>

              {/* Feature 04 */}
              <div className="rounded-[22px] p-5 relative" style={featureGradientDown}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg></IconBadge>
                    <FeatureNumber n="04" />
                  </div>
                  <FeatureLabel text="Revenue Ready" />
                </div>
                <h3 className="text-[20px] font-[600] text-[#1A1A1A] mb-2">Payment Integration</h3>
                <p className="text-[14px] text-[#000000] font-[400] leading-relaxed">Stripe and in-app purchase systems. Start charging users from day one — subscriptions, one-time, and more.</p>
              </div>

              {/* Feature 05 */}
              <div className="rounded-[22px] p-5 relative" style={featureGradientDown}>
                <div className="flex items-center gap-3 mb-3">
                  <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></IconBadge>
                  <FeatureNumber n="05" />
                  <FeatureLabel text="Engagement" />
                </div>
                <h3 className="text-[20px] font-[600] text-[#1A1A1A] mb-2">Push Notifications</h3>
                <p className="text-[14px] text-[#000000] font-[400] leading-relaxed">Re-engage users with targeted push notifications. Built-in for both iOS and Android from launch day.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-[0.55] flex flex-col gap-5">
              {/* Feature 02 */}
              <div className="rounded-[22px] p-5 relative" style={featureGradientR}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></IconBadge>
                    <FeatureNumber n="02" />
                  </div>
                  <FeatureLabel text="Infrastructure" />
                </div>
                <h3 className="text-[20px] font-[600] text-[#1A1A1A] mb-2">Backend Infrastructure</h3>
                <p className="text-[14px] text-[#000000] font-[400] leading-relaxed mb-3">Secure, scalable backend built for growth. APIs, database, auth and cloud hosting — all production-ready.</p>
                <div className="flex flex-wrap gap-2">
                  {["REST / GraphQL APIs", "Auth + security", "Cloud deployment"].map(t => <Tag key={t} text={t} />)}
                </div>
              </div>

              {/* Feature 03 */}
              <div className="rounded-[22px] p-5 relative" style={featureGradientUp}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg></IconBadge>
                    <FeatureNumber n="03" />
                  </div>
                  <FeatureLabel text="Management" />
                </div>
                <h3 className="text-[20px] font-[600] text-[#1A1A1A] mb-2">Admin Dashboard</h3>
                <p className="text-[14px] text-[#000000] font-[400] leading-relaxed mb-3">Manage users, data and content from a clean web dashboard. No dev needed to run your product.</p>
                <div className="flex flex-wrap gap-2">
                  {["User management", "Content control", "Analytics overview"].map(t => <Tag key={t} text={t} />)}
                </div>
              </div>

              {/* Feature 06 */}
              <div className="rounded-[22px] p-5 relative flex flex-col" style={featureGradientDown}>
                <div className="flex items-center gap-3 mb-3">
                  <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></IconBadge>
                  <FeatureNumber n="06" />
                  <FeatureLabel text="Go Live" />
                </div>
                <h3 className="text-[20px] font-[600] text-[#1A1A1A] mb-2">App Store Deployment</h3>
                <p className="text-[14px] text-[#000000] font-[400] leading-relaxed mb-3">Full App Store and Google Play submission — screenshots, metadata, review process handled by us.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["App Store", "Google Play"].map(t => <Tag key={t} text={t} />)}
                </div>
                <div className="border-t-[3px] border-dashed mt-auto" style={{ borderColor: '#FF8055' }} />
                <p className="text-[28px] font-[800] text-[#C03A10] text-center mt-3">Your App is Live!</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP BENTO LAYOUT (lg+) ── */}
        <div className="hidden lg:block rounded-[28px] w-full">
          <div className="flex gap-12">

            {/* Left Column */}
            <div className="flex-[0.4] flex flex-col gap-8">
              <div className="rounded-[22px] p-6 relative" style={featureGradientL}>
                <div className="flex items-center gap-5 mb-4">
                  <IconBadge>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                  </IconBadge>
                  <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 01</span>
                </div>
                <FeatureLabel text="Core deliverable" />
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mt-3 mb-3">Mobile App Development</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-5">
                  Cross-platform iOS and Android app built simultaneously. One codebase, both stores, full native performance. Clean architecture designed to scale as your user base grows.
                </p>
                <div className="flex flex-wrap gap-x-[40px] gap-y-4 mb-6">
                  {["iOS App Store", "Google Play Store", "Cross-platform"].map(t => <Tag key={t} text={t} />)}
                </div>
                <div className="border-t-4 border-dashed mb-6 mt-4" style={{ borderColor: '#FF8055' }} />
                <div className="flex items-center gap-10">
                  <span className="text-[48px] font-[800] text-[#C44A20] leading-none">60d</span>
                  <p className="text-[28px] text-[#1A1A1A] font-[600] leading-snug pb-1">from first call<br />to App Store live</p>
                </div>
              </div>
              <div className="flex justify-end pointer-events-none">
                <img src={arrowSvg} alt="" className="w-[258px] h-auto" />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-[0.6] flex flex-col gap-5">
              <div className="rounded-[22px] p-10 relative min-h-[350px]" style={featureGradientR}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></IconBadge>
                    <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 02</span>
                  </div>
                  <FeatureLabel text="Infrastructure" />
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Backend Infrastructure</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-4">Secure, scalable backend built for growth. APIs, database, auth and cloud hosting — all production-ready.</p>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-2 mt-4 w-fit">
                  {["REST / GraphQL APIs", "Auth + security", "Cloud deployment"].map(t => <Tag key={t} text={t} />)}
                </div>
              </div>

              <div className="rounded-[22px] p-6 relative min-h-[350px]" style={featureGradientUp}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg></IconBadge>
                    <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 03</span>
                  </div>
                  <FeatureLabel text="Management" />
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Admin Dashboard</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-4">Manage users, data and content from a clean web dashboard. No dev needed to run your product.</p>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-4 w-fit">
                  {["User management", "Content control", "Analytics overview"].map(t => <Tag key={t} text={t} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-12 mt-5">
            <div className="w-1/2 min-w-0 flex flex-col gap-5">
              <div className="rounded-[22px] p-6 relative" style={featureGradientDown}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5">
                    <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg></IconBadge>
                    <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 04</span>
                  </div>
                  <FeatureLabel text="Revenue Ready" />
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Payment Integration</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed">Stripe and in-app purchase systems. Start charging users from day one — subscriptions, one-time, and more.</p>
              </div>

              <div className="rounded-[22px] p-6 relative" style={{ background: 'linear-gradient(-180deg, rgba(240, 90, 40, 0.08) 0%, rgba(240, 90, 40, 0.06) 70%, rgba(240, 90, 40, 0.3) 100%)', border: '1px solid rgba(240, 90, 40, 0.16)' }}>
                <div className="flex items-center gap-5 mb-3">
                  <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></IconBadge>
                  <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 05</span>
                  <FeatureLabel text="Engagement" />
                </div>
                <h3 className="text-[28px] font-[600] text-[#1A1A1A] mb-2">Push Notifications</h3>
                <p className="text-[18px] text-[#000000] font-[400] leading-relaxed">Re-engage users with targeted push notifications. Built-in for both iOS and Android from launch day.</p>
              </div>
            </div>

            <div className="w-1/2 min-w-0 rounded-[22px] p-6 relative flex flex-col" style={{ background: 'linear-gradient(-180deg, rgba(240, 90, 40, 0.08) 0%, rgba(240, 90, 40, 0.06) 70%, rgba(240, 90, 40, 0.3) 100%)', border: '1px solid rgba(240, 90, 40, 0.16)' }}>
              <div className="flex items-center gap-5 mb-4">
                <IconBadge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></IconBadge>
                <span className="text-[48px] font-[700] text-[#1A1A1A]">Feature 06</span>
              </div>
              <FeatureLabel text="Go Live" />
              <h3 className="text-[28px] font-[600] text-[#1A1A1A] mt-3 mb-2">App Store Deployment</h3>
              <p className="text-[18px] text-[#000000] font-[400] leading-relaxed mb-5">Full App Store and Google Play submission — screenshots, metadata, review process handled by us. You just approve and go live.</p>
              <div className="flex flex-wrap gap-x-[18px] gap-y-4 mb-6">
                {["App Store", "Google Play"].map(t => <Tag key={t} text={t} />)}
              </div>
              <div className="mt-auto">
                <div className="mb-6" style={{ borderTop: "3px dashed #FF8055" }} />
                <p className="text-[48px] font-[800] text-[#C03A10] text-center">Your App is Live!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[linear-gradient(-180deg,rgba(240,90,40,0.08)_0%,rgba(240,90,40,0.06)_40%,rgba(240,90,40,0.3)_100%)] rounded-[24px] p-[24px] sm:p-[32px] md:p-[40px] border border-[rgba(240,90,40,0.16)] shadow-[0_12px_32px_rgba(200,100,50,0.04)] flex flex-col items-center mt-[40px] sm:mt-[60px] md:mt-[80px]">

          <div className="text-center mb-[20px] sm:mb-[24px]">
            <h3 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] text-[#1A1A1A] leading-[1.1] tracking-[-1px]">
              All 6 deliverables. 60 days. <span className="text-[#C03A10]">Guaranteed.</span>
            </h3>
            <p className="font-body font-semibold text-[15px] sm:text-[17px] md:text-[20px] text-[#2B2E34] mt-[16px] sm:mt-[24px]">
              Not a single item outsourced. Your dedicated team builds everything in-house.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[60px] lg:gap-[80px] mt-[16px] sm:mt-[20px] w-full">
            <div className="flex items-center gap-[24px] sm:gap-[40px] md:gap-[48px]">
              {[{ v: "7+", l: "Years of Exp" }, { v: "40+", l: "Projects Done" }, { v: "100%", l: "Job Success" }].map(({ v, l }) => (
                <div key={v} className="flex flex-col items-center">
                  <span className="font-heading font-extrabold text-[18px] md:text-[22px] text-[#C03A10] leading-none">{v}</span>
                  <span className="font-body text-[14px] md:text-[16px] lg:text-[18px] font-[400] text-[#1A1A1A] mt-[8px]">{l}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="!w-auto min-w-[240px] sm:min-w-[280px] md:min-w-[332px] !rounded-[32px]">
              Book Free Call
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}