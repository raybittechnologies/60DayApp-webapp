"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleUp, staggerContainer, staggerItem, staggerScale, viewport } from '@/utils/motionVariants';
import EyebrowPill from '@/components/ui/EyebrowPill';
import starImage from '@/assets/images/Star.png';


const GlassNumber = ({ value, fontSize = 100 }) => (
  <div className="flex items-center justify-center p-0 m-0 cursor-default select-none pointer-events-none">
    <span
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: `${fontSize}px`,
        lineHeight: '100%',
        letterSpacing: '0px',
        verticalAlign: 'middle',
        color: '#D97459',
      }}
    >
      {value}
    </span>
  </div>
);

const MobileCard = ({ number, icon, title, desc, statValue, statLabel }) => {
  const containerRef = React.useRef(null);
  const [size, setSize] = React.useState({ w: 400, h: 220 });

  React.useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const W = Math.max(size.w, 100);
  const H = Math.max(size.h, 100);
  const notchW = 112;
  const notchH = 88;
  const r = 24;
  const R = 24;

  const path = `
    M ${R} 0
    L ${W - notchW} 0
    A ${r} ${r} 0 0 1 ${W - notchW + r} ${r}
    L ${W - notchW + r} ${notchH - r}
    A ${r} ${r} 0 0 0 ${W - notchW + 2 * r} ${notchH}
    L ${W - r} ${notchH}
    A ${r} ${r} 0 0 1 ${W} ${notchH + r}
    L ${W} ${H - R}
    A ${R} ${R} 0 0 1 ${W - R} ${H}
    L ${R} ${H}
    A ${R} ${R} 0 0 1 0 ${H - R}
    L 0 ${R}
    A ${R} ${R} 0 0 1 ${R} 0
    Z
  `;

  const glassFilter = `
    drop-shadow(-2px 4px 10px rgba(145, 145, 145, 0.05))
    drop-shadow(-7px 17px 18px rgba(145, 145, 145, 0.04))
    drop-shadow(-15px 37px 24px rgba(145, 145, 145, 0.03))
  `;

  return (
    <div className="relative w-full" ref={containerRef}>
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: glassFilter }}
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill="rgba(255, 128, 85, 0.1)" stroke="#FFCAB2" strokeWidth="1.5" />
      </svg>

      <div
        className="absolute z-10 font-heading"
        style={{ top: '10px', right: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <GlassNumber value={number} fontSize={72} />
      </div>

      <div className="relative z-0 flex flex-col px-[20px] sm:px-[24px] pt-[20px] sm:pt-[24px] pb-[20px] sm:pb-[24px]">
        <div className="flex flex-row items-center gap-[12px]" style={{ paddingRight: `${notchW - 20}px`, minHeight: `${notchH - 20}px` }}>
          <div className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#FF8055]/90 border border-[#FFCAB2] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)] shrink-0">
            <div className="scale-[0.8] sm:scale-100 flex items-center justify-center">{icon}</div>
          </div>
          <h3 className="font-heading font-[600] text-[18px] sm:text-[22px] tracking-tight text-[#1A1A1A] leading-[1.2]">
            {title}
          </h3>
        </div>
        <p className="font-body text-[9px] sm:text-[18px] leading-[1.6] text-[#1A1A1A] mt-[8px]">{desc}</p>
        <div className="flex items-center gap-3 pt-3 border-t border-[#FFCAB2] mt-1">
          <span className="font-heading font-extrabold text-[36px] tracking-[-2px] leading-[1] text-[#C03A10] shrink-0">{statValue}</span>
          <div className="w-[1.5px] h-[28px] bg-[#FFCAB2] shrink-0" />
          <p className="font-body text-[12px] sm:text-[13px] font-semibold text-[#1A1A1A] leading-[1.3]">{statLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default function Problem() {
  const ICONS = {
    clock: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 15 12" /><path d="M12 2v2" />
      </svg>
    ),
    chart: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
    alert: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M10.29 3.86l-8.47 14.1A2 2 0 003.54 21h16.92a2 2 0 001.72-3.04l-8.47-14.1a2 2 0 00-3.42 0z" /><path d="M12 9v4" /><path d="M12 17h.01" />
      </svg>
    ),
  };

  return (
    <section className="relative w-full flex justify-center items-start pt-0">

      <div className="absolute top-[80px] right-[15%] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#F05A28]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-8 flex flex-col items-center pt-[10px] pb-[60px]">

        <motion.img
          src={starImage.src}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute left-[40px] top-[40px] w-[250px] h-[250px] -rotate-[15deg] pointer-events-none z-0 select-none"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        />

        <motion.div
          className="flex flex-col items-center max-w-[639px] gap-[24px] mb-[48px] lg:mb-[80px] relative z-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <EyebrowPill variant="label">The Problem</EyebrowPill>

          <h2
            className="font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.5px] text-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Most StartUp MVPs
            <br />
            <span className="text-brand-orange">Never Launch?</span>
          </h2>

          <p className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-[#1A1A1A] font-medium max-w-[580px]">
            Most Founders Lose{' '}
            <span className="text-brand-orange">6-12 months</span>
            {' '}& Thousands of Dollars before Seeing a Single Working Screen. Here's what goes wrong &mdash;
          </p>
        </motion.div>

        <motion.div
          className="lg:hidden w-full flex flex-col gap-5"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={staggerItem}>
            <MobileCard
              number="01" icon={ICONS.clock} title="Slow development"
              desc={<>Most agencies take <span className="text-[#FF8055]">6-12 months</span> just to ship a basic MVP. By then, your Market window is closed and competitors have moved in.</>}
              statValue="12mo" statLabel="average time wasted with typical agencies"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <MobileCard
              number="02" icon={ICONS.chart} title="Feature Overload"
              desc={<>Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#F05A28]">by months</span>. You end up building what nobody asked for.</>}
              statValue="3x" statLabel="Overbudget from unnecessary scope"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <MobileCard
              number="03" icon={ICONS.alert} title="Unreliable Developers"
              desc={<>Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#F05A28]">holding the bag</span> with nothing to show investors or customers.</>}
              statValue="70%" statLabel="of MVPs never reach launch day"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex relative w-full max-w-[1193px] mx-auto items-stretch gap-5 xl:gap-[36px]"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >

          <motion.div
            className="relative flex-none group transition-transform duration-300 hover:-translate-y-1"
            style={{ width: 'clamp(320px, 39%, 465px)', height: '510px' }}
            variants={staggerScale}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 465 554" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M 32 0 L 285 0 A 20 20 0 0 1 305 20 L 305 120 A 20 20 0 0 0 325 140 L 445 140 A 20 20 0 0 1 465 160 L 465 522 A 32 32 0 0 1 433 554 L 32 554 A 32 32 0 0 1 0 522 L 0 32 A 32 32 0 0 1 32 0 Z" fill="#FF80551A" stroke="#FFCAB2" strokeWidth="1" />
            </svg>
            <div className="absolute top-0 right-0 w-[160px] h-[140px] flex items-center justify-center z-10">
              <GlassNumber id="01" value="01" width={154} height={110} fontSize={96} />
            </div>
            <div className="absolute top-[52px] left-[15px] right-[15px] bottom-[20px] z-0 flex flex-col gap-8">
              <div className="flex flex-col gap-[24px]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#FF8055]/90 border border-[#FFCAB2] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">{ICONS.clock}</div>
                <h3 className="font-heading font-bold text-[28px] tracking-tight text-[#1A1A1A]">Slow development</h3>
                <p className="font-body text-[18px] leading-[1.6] text-[#1A1A1A]">
                  Most agencies take <span className="text-[#FF8055]">6-12 months</span> just to ship a basic MVP. By then, your Market window is closed and competitors have moved in.
                </p>
              </div>
              <div className="relative mt-auto">
                <div className="absolute top-[-32px] left-[12px] w-[90%] h-[1px] bg-[#FFCAB2]" />
                <div className="flex items-center gap-[24px]">
                  <div className="flex items-baseline text-[#C03A10]">
                    <span className="font-heading font-extrabold text-[110px] leading-[0.8] tracking-[-5px]">12</span>
                    <span className="font-heading font-bold text-[36px] tracking-tight ml-[4px]">mo</span>
                  </div>
                  <p className="font-body text-[18px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[217px]">average time wasted with typical agencies</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-[30px] min-w-0">
            <motion.div className="relative w-full h-[240px] group transition-transform duration-300 hover:-translate-y-1" variants={staggerScale}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 692 259" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M 32 0 L 542 0 A 20 20 0 0 1 562 20 L 562 80 A 20 20 0 0 0 582 100 L 672 100 A 20 20 0 0 1 692 120 L 692 227 A 32 32 0 0 1 660 259 L 32 259 A 32 32 0 0 1 0 227 L 0 32 A 32 32 0 0 1 32 0 Z" fill="#FF80551A" stroke="#FFCAB2" strokeWidth="1.5" />
              </svg>
              <div className="absolute top-0 right-0 w-[130px] h-[100px] flex items-center justify-center z-10">
                <GlassNumber id="02" value="02" width={122} height={90} fontSize={80} />
              </div>
              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[145px] lg:pr-[110px] xl:pr-[145px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#FF8055]/90 border border-[#FFCAB2] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">{ICONS.chart}</div>
                    <h3 className="font-heading font-bold text-[28px] tracking-tight text-[#1A1A1A]">Feature Overload</h3>
                  </div>
                  <p className="font-body text-[18px] leading-[1.5] text-[#1A1A1A]">Too many unnecessary features bloat the scope, inflate costs, and delay your launch <span className="text-[#F05A28]">by months</span>. You end up building what nobody asked for.</p>
                </div>
                <div className="mt-auto flex items-center gap-[40px] pl-[12px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">3x</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[20px] font-semibold text-[#1A1A1A] leading-[1.3] max-w-[313px]">Overbudget from unnecessary scope</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative w-full h-[240px] group transition-transform duration-300 hover:-translate-y-1" variants={staggerScale}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 692 259" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M 32 0 L 542 0 A 20 20 0 0 1 562 20 L 562 80 A 20 20 0 0 0 582 100 L 672 100 A 20 20 0 0 1 692 120 L 692 227 A 32 32 0 0 1 660 259 L 32 259 A 32 32 0 0 1 0 227 L 0 32 A 32 32 0 0 1 32 0 Z" fill="#FF80551A" stroke="#FFCAB2" strokeWidth="1.5" />
              </svg>
              <div className="absolute top-0 right-0 w-[130px] h-[100px] flex items-center justify-center z-10">
                <GlassNumber id="03" value="03" width={122} height={90} fontSize={80} />
              </div>
              <div className="relative z-0 pt-[24px] pb-[32px] pl-[32px] pr-[145px] lg:pr-[110px] xl:pr-[145px] flex flex-col h-full justify-between">
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#FF8055]/90 border border-[#FFCAB2] flex items-center justify-center shadow-[0_0_16px_rgba(240,90,40,0.4)]">{ICONS.alert}</div>
                    <h3 className="font-heading font-semibold text-[28px] tracking-tight text-[#1A1A1A]">Unreliable Developers</h3>
                  </div>
                  <p className="font-body font-normal text-[18px] leading-[1.6] text-[#1A1A1A]">Missed deadlines, Poor communications, and half finished code. You're left <span className="text-[#F05A28]">holding the bag</span> with nothing to show investors or customers.</p>
                </div>
                <div className="mt-auto flex items-center gap-[40px] pl-[16px]">
                  <span className="font-heading font-extrabold text-[56px] tracking-[-3px] leading-[1] text-[#C03A10]">70%</span>
                  <div className="w-[1.5px] h-[40px] bg-[#FFCAB2]" />
                  <p className="font-body text-[20px] font-semibold text-[#1A1A1A] leading-[1.3] max-w-[283px]">of MVPs never reach launch day</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
