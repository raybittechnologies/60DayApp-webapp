
import React, { useState, useEffect } from 'react';
import EyebrowPill from '../ui/EyebrowPill';
import Phone1 from '../../assets/images/phone1.png';
import Phone2 from '../../assets/images/phone2.png';

const TOTAL = 6;
const ASSET_W = 550;
const ASSET_H = 322;

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % TOTAL), 3000);
    return () => clearInterval(t);
  }, []);

  const getAsset = (index) => (index % 2 === 0 ? Phone1 : Phone2);

  const slots = [
    { key: (active - 1 + TOTAL) % TOTAL, pos: 'left' },
    { key: active, pos: 'center' },
    { key: (active + 1) % TOTAL, pos: 'right' },
  ];

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 md:px-0">
      <div
        className="w-full bg-white flex flex-col items-center overflow-hidden"
        style={{ borderRadius: '24px', border: '1.5px solid #FFCAB2' }}
      >
        {/* Text Section */}
        <div className="pt-[40px] px-[20px] sm:px-[48px] flex flex-col items-center text-center w-full">
          <EyebrowPill variant="label">IT Industry</EyebrowPill>
          <h1 className="font-heading font-black text-[32px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-1.5px] mt-[14px]">
            <span className="text-[#F05A28]">Expense Tracking</span><br />
            <span className="text-[#1A1A1A]">Mobile App</span>
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#1A1A1A] max-w-[756px] mt-[14px] leading-[1.65]">
            A smart expense tracking app with AI-powered spend categorisation, budget alerts,
            multi-currency support, and monthly reports — built and live on both stores in just 8 weeks.
          </p>
        </div>

        {/* Carousel Section */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          height: '450px',
          marginTop: '20px',
          overflow: 'hidden',
        }}>
          {slots.map(({ key, pos }) => {
            const isCenter = pos === 'center';

            const dx = pos === 'left' ? -320 : pos === 'right' ? 320 : 0;

            const scale = isCenter ? 1.3 : 0.65;

            const zIndex = isCenter ? 50 : 10;

            return (
              <div
                key={key}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  width: `${ASSET_W}px`,
                  height: `${ASSET_H}px`,
                  zIndex: zIndex,

                  transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                  willChange: 'transform',

                  transform: `translateX(calc(-50% + ${dx}px)) scale(${scale})`,
                  transformOrigin: 'bottom center',
                  opacity: 1,
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
      </div>
    </div>
  );
}