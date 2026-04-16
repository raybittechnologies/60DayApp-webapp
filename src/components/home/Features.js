"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerScale, scaleUp, viewport } from '@/utils/motionVariants';
import EyebrowPill from '@/components/ui/EyebrowPill';
import Button from '@/components/ui/Button';

const gradientCard = {
  background: 'rgba(255, 128, 85, 0.1)',
  border: '1px solid #FF8055',
};

const IconBadge = ({ children }) => (
  <div
    className="w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0"
    style={{
      background: 'linear-gradient(135deg, #E66D3D 0%, #D45A2A 100%)',
      boxShadow: '0 3px 10px rgba(230,109,61,0.25)',
    }}
  >
    {children}
  </div>
);

const FeatureLabel = ({ text }) => (
  <span className="inline-flex w-fit items-center justify-center text-[12px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-[400] text-white bg-[#C03A10] rounded-full px-3 sm:px-4 md:px-5 xl:px-6 py-1 sm:py-1.5 xl:py-2">
    {text}
  </span>
);

const Tag = ({ text }) => (
  <span className="flex items-center gap-1.5 px-2 py-1 bg-[#FFCAB2] rounded-[4px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.5] font-[400] text-[#C03A10]">
    <span className="w-[10px] h-[10px] rounded-full bg-[#C03A10] shrink-0" />
    {text}
  </span>
);

const FeatureCard = ({ n, label, title, desc, tags = [], icon }) => (
  <div 
    className="rounded-[18px] p-4 sm:p-5 xl:p-6 flex flex-col gap-3 md:gap-4 xl:gap-5 w-full min-h-[260px] sm:min-h-[300px] md:min-h-[360px] xl:min-h-[420px] transition-transform duration-300 hover:-translate-y-1" 
    style={gradientCard}
  >
    <div className="flex items-center gap-3 xl:gap-6">
      <IconBadge>{icon}</IconBadge>
      <span className="text-[15px] sm:text-[17px] md:text-[19px] xl:text-[22px] font-[600] text-[#1A1A1A] leading-none">Feature {n}</span>
    </div>
    <div><FeatureLabel text={label} /></div>
    <h3 className="text-[15px] sm:text-[17px] md:text-[19px] xl:text-[22px] font-[600] text-[#1A1A1A] leading-snug whitespace-normal">{title}</h3>
    <p className="text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] text-[#000000] font-[400] leading-relaxed font-body">{desc}</p>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(t => <Tag key={t} text={t} />)}
      </div>
    )}
  </div>
);

/* ── Icons ── */
const ICONS = {
  phone: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
  server: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
  grid: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
  dollar: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
  bell: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
  check: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
};

const FEATURES = [
  { n: '01', label: 'Core deliverable', icon: ICONS.phone, title: 'Mobile App Development', desc: 'Cross-platform iOS and Android app built simultaneously. One codebase, both stores, full native performance.', tags: ['iOS App Store', 'Cross-platform','Google Play Store', ] },
  { n: '02', label: 'Infrastructure', icon: ICONS.server, title: 'Backend Infrastructure', desc: 'Secure, scalable backend built for growth. APIs, database, auth and cloud hosting — all production-ready.', tags: ['REST Apis', 'Auth + security', 'Cloud deployment'] },
  { n: '03', label: 'Management', icon: ICONS.grid, title: 'Admin Dashboard', desc: 'Manage users, data and content from a clean web dashboard. No dev needed to run your product.', tags: ['User management', 'Content control', 'Analytics'] },
  { n: '04', label: 'Revenue Ready', icon: ICONS.dollar, title: 'Payment Integration', desc: 'Stripe and in-app purchase systems. Start charging users from day one — subscriptions, one-time, and more.', tags: ['Paypal', 'Stripe', ' Google Pay Store '] },
  { n: '05', label: 'Engagement', icon: ICONS.bell, title: 'Push Notifications', desc: 'Re-engage users with targeted push notifications. Built-in for both iOS and Android from launch day.', tags: ['REST / APIs', 'Auth + security', 'Cloud deployment'] },
  { n: '06', label: 'Go Live', icon: ICONS.check, title: 'App Store Deployment', desc: 'Full App Store and Google Play submission — screenshots, metadata, review process handled by us. You just approve and go live.', tags: ['App Store', 'Google Play'] },
];

export default function Features() {
  return (
    <section className="section-outer relative overflow-hidden pt-[40px] sm:pt-[60px] pb-[40px] sm:pb-[60px]">
      <div className="section-inner flex flex-col items-center">

        {/* ── Header ── */}
        <motion.div
          className="flex flex-col items-center max-w-[700px] mb-[40px] sm:mb-[60px] text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <EyebrowPill variant="label">What You Get</EyebrowPill>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-1.5px] text-[#1A1A1A] mt-[20px]">
            Everything You Need <br />to{' '}
            <span className="text-brand-orange">Launch Your MVP</span>
          </h2>
          <p className="font-body text-[14px] sm:text-[16px] md:text-[17px] leading-[1.6] font-semibold text-[#222222] mt-[16px] max-w-[580px]">
            Six battle-tested deliverables — from first{' '}
            <span className="text-[#FA8B61]">commit to App Store</span>{' '}
            approval. Nothing missing, nothing extra.
          </p>
        </motion.div>

        {/* ── 3×2 Bento Grid ── */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {FEATURES.map(f => (
            <motion.div key={f.n} variants={staggerScale}>
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="w-full rounded-[18px] mt-5 py-6 px-8 flex items-center justify-center"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-[32px] sm:text-[40px] md:text-[64px] font-[800] text-[#C03A10] text-center leading-none">
            Your App is Live!
          </p>
        </motion.div>

        
        <motion.div
          className="w-full rounded-[24px] p-[24px] sm:p-[32px] md:p-[40px] flex flex-col items-center mt-[20px]"
          style={{
            background: 'linear-gradient(180deg, rgba(240,90,40,0.06) 0%, rgba(240,90,40,0.05) 60%, rgba(240,90,40,0.22) 100%)',
            border: '1.5px solid #FF8055',
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="text-center mb-[20px] sm:mb-[24px]">
            <h3 className="font-heading font-extrabold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-[#1A1A1A] leading-[1.1] tracking-[-1px]">
              All 6 deliverables. 60 days.{' '}
              <span className="text-[#C03A10]">Guaranteed.</span>
            </h3>
            <p className="font-body font-semibold text-[14px] sm:text-[16px] md:text-[18px] text-[#2B2E34] mt-[14px] sm:mt-[20px]">
              Not a single item outsourced. Your dedicated team builds everything in-house.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[60px] mt-[16px] w-full">
            <div className="flex items-center gap-[32px] sm:gap-[48px]">
              {[
                { v: '7+', l: 'Years of Exp' },
                { v: '40+', l: 'Projects Done' },
                { v: '100%', l: 'Job Success' },
              ].map(({ v, l }) => (
                <div key={v} className="flex flex-col items-center">
                  <span className="font-heading font-extrabold text-[20px] md:text-[24px] text-[#C03A10] leading-none">{v}</span>
                  <span className="font-body text-[13px] md:text-[15px] font-[400] text-[#1A1A1A] mt-[6px]">{l}</span>
                </div>
              ))}
            </div>
            <Button variant="primary" className="!w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px] !rounded-[32px]">
              Book Free Call
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
