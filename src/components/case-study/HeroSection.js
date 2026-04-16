"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleUp, viewport } from '@/utils/motionVariants';
import EyebrowPill from '@/components/ui/EyebrowPill';
import Phone1 from '@/assets/images/phone1.png';
import Phone2 from '@/assets/images/phone2.png';

const TOTAL = 6;
const ASSET_W = 398;
const ASSET_H = 298.5;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    setMounted(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TOTAL), 3000);
    return () => clearInterval(t);
  }, []);

  const getAsset = (index) => (index % 2 === 0 ? Phone1.src : Phone2.src);

  const slots = [
    { key: (active - 1 + TOTAL) % TOTAL, pos: 'left' },
    { key: active, pos: 'center' },
    { key: (active + 1) % TOTAL, pos: 'right' },
  ];

  if (!mounted) return <div className="h-[420px] md:h-[550px]" />;

  return (
    <div className="section-outer">
      <motion.div
        className="section-inner w-full bg-white flex flex-col items-center overflow-hidden"
        style={{ borderRadius: '24px', border: '1.5px solid #FFCAB2' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {/* Text Section */}
        <motion.div 
          className="pt-[40px] px-[20px] sm:px-[48px] flex flex-col items-center text-center w-full relative z-20"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <EyebrowPill variant="label">IT Industry</EyebrowPill>
          <h1 className="font-heading font-black text-[32px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-1.5px] mt-[14px]">
            <span className="text-[#F05A28]">Expense Tracking</span><br />
            <span className="text-[#1A1A1A]">Mobile App</span>
          </h1>
          <p className="font-[400] text-[14px] sm:text-[16px] text-[#1A1A1A] max-w-[756px] mt-[14px] leading-[1.65]">
            A smart expense tracking app with AI-powered spend categorisation, budget alerts,
            multi-currency support, and monthly reports — built and live on both stores in just 8 weeks.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative w-full max-w-[1280px] overflow-hidden z-10 h-[420px] md:h-[550px] mt-[-10px] md:mt-0">
          {slots.map(({ key, pos }) => {
            const isCenter = pos === 'center';

            const dxAmount = isMobile ? 0 : 380;
            const finalDx = isCenter ? 0 : (pos === 'left' ? -dxAmount : dxAmount);

            const scale = isCenter ? (isMobile ? 1.25 : 1.7) : (isMobile ? 1.5 : 0.85);

            const zIndex = isCenter ? 50 : 10;
            const isHiddenMobile = isMobile && !isCenter;

            return (
              <div
                key={key}
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '10px' : '20px',
                  left: '50%',
                  width: isMobile ? 'calc(100% - 40px)' : `${ASSET_W}px`,
                  maxWidth: isMobile ? '320px' : 'none',
                  height: isMobile ? 'auto' : `${ASSET_H}px`,
                  aspectRatio: isMobile ? '398/298.5' : 'auto',
                  zIndex: zIndex,

                  transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s',
                  willChange: 'transform',

                  transform: `translateX(calc(-50% + ${finalDx}px)) scale(${scale})`,
                  transformOrigin: 'bottom center',
                  opacity: isHiddenMobile ? 0 : 1,
                  pointerEvents: isHiddenMobile ? 'none' : 'auto',
                }}
              >
                <img
                  src={getAsset(key)}
                  alt="App mockup"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom'
                  }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
