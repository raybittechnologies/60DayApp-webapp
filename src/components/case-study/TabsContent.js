"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MentalImageImg from '@/assets/images/MentalImage.png';
import Phone1 from '@/assets/images/phone1.png';
import Phone2 from '@/assets/images/phone2.png';
import { caseStudiesData } from '@/data/caseStudies';

const tabVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1
    } 
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export const BlockListElement = ({ num, title, desc }) => (
  <motion.div 
    className="flex gap-[12px] sm:gap-[16px]"
    variants={staggerItemVariants}
    whileHover={{ x: 10, transition: { duration: 0.3, ease: 'easeOut' } }}
  >
    <motion.span 
      className="font-heading font-extrabold text-[16px] sm:text-[20px] text-[#F05A28] mt-[1px] flex-shrink-0"
      whileHover={{ scale: 1.1, color: '#FF8055' }}
      transition={{ duration: 0.2 }}
    >
      {num}
    </motion.span>
    <div className="flex-1">
      <motion.h4 
        className="font-heading font-bold text-[16px] sm:text-[20px] text-[#F05A28]"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h4>
      <p className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[8px] sm:mt-[10px]">{desc}</p>
    </div>
  </motion.div>
);

export const OverviewTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.overview || caseStudiesData['expense-tracker'].tabs.overview;
  return (
    <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 className="font-heading font-extrabold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#F05A28] tracking-tight" variants={staggerItemVariants}>
        Overview
      </motion.h2>
      <motion.p className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p1 }} />
      <motion.p className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p2 }} />
      <motion.div className="w-full mt-[32px] sm:mt-[48px] flex justify-center bg-transparent mix-blend-multiply rounded-[24px] sm:rounded-[32px] overflow-hidden drop-shadow-sm border border-black/5" variants={staggerItemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <img src={MentalImageImg.src} alt="Mental Diagram Architecture" className="w-full h-auto object-contain max-h-[600px] sm:max-h-[800px]" />
      </motion.div>
    </motion.div>
  );
};

export const GoalsTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.goals || caseStudiesData['expense-tracker'].tabs.goals;
  return (
    <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 className="font-heading font-extrabold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#F05A28] tracking-tight" variants={staggerItemVariants}>
        Goals
      </motion.h2>
      <motion.p className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px] mb-[24px] sm:mb-[40px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p1 }} />

      <motion.div className="flex flex-col gap-[24px] sm:gap-[36px]" variants={tabVariants}>
        {data.list.map((item, idx) => (
          <BlockListElement key={idx} num={item.num} title={item.title} desc={item.desc} />
        ))}
      </motion.div>

      <motion.div className="w-full mt-[32px] sm:mt-[48px] flex justify-center bg-transparent mix-blend-multiply rounded-[24px] sm:rounded-[32px] overflow-hidden drop-shadow-sm border border-black/5" variants={staggerItemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <img src={MentalImageImg.src} alt="Mental Diagram Architecture" className="w-full h-auto object-contain max-h-[600px] sm:max-h-[800px]" />
      </motion.div>
    </motion.div>
  );
};

export const ChallengesTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.challenges || caseStudiesData['expense-tracker'].tabs.challenges;
  return (
    <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 className="font-heading font-extrabold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#F05A28] tracking-tight" variants={staggerItemVariants}>
        Challenges
      </motion.h2>
      <motion.p className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px] mb-[24px] sm:mb-[40px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p1 }} />

      <motion.div className="flex flex-col gap-[24px] sm:gap-[36px]" variants={tabVariants}>
        {data.list.map((item, idx) => (
          <BlockListElement key={idx} num={item.num} title={item.title} desc={item.desc} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export const SolutionsTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.solutions || caseStudiesData['expense-tracker'].tabs.solutions;
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const TOTAL = 6;
  const ASSET_W = 398;
  const ASSET_H = 298.5;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
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

  return (
    <motion.div 
      variants={tabVariants} initial="hidden" animate="visible" exit="exit"
    >
      <div className="w-full rounded-[32px] bg-[#FFF5F2] border border-[#FFCAB2] shadow-sm pt-[48px] flex flex-col items-center mb-[40px] overflow-hidden">
        <h2 className="font-heading font-extrabold text-[36px] sm:text-[40px] text-[#F05A28] tracking-tight mb-[24px] text-center px-4">{data.title}</h2>

        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          height: isMobile ? '300px' : '480px',
          overflow: 'hidden',
          marginTop: isMobile ? '10px' : '0px'
        }}>
          {slots.map(({ key, pos }) => {
            const isCenter = pos === 'center';
            // Adjusted scales/dx to give massive focus structure
            const dxAmount = isMobile ? 0 : 340;
            const finalDx = isCenter ? 0 : (pos === 'left' ? -dxAmount : dxAmount);

            // Massively increase center
            const scale = isCenter ? (isMobile ? 1.2 : 1.5) : (isMobile ? 1.4 : 0.8);
            const zIndex = isCenter ? 50 : 10;
            const isHiddenMobile = isMobile && !isCenter;

            return (
              <div
                key={key}
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '10px' : '20px',
                  left: '50%',
                  width: isMobile ? 'calc(100% - 60px)' : `${ASSET_W}px`,
                  maxWidth: isMobile ? '280px' : 'none',
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
                  alt="Solutions mockup"
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

      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A]" dangerouslySetInnerHTML={{ __html: data.p1 }} />
      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]" dangerouslySetInnerHTML={{ __html: data.p2 }} />
      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]" dangerouslySetInnerHTML={{ __html: data.p3 }} />
    </motion.div>
  );
};

export const SpecialFeaturesTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.features || caseStudiesData['expense-tracker'].tabs.features;
  return (
    <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight" variants={staggerItemVariants}>
        Special Features
      </motion.h2>
      <motion.p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[40px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p1 }} />

      <motion.div className="flex flex-col gap-[36px]" variants={tabVariants}>
        {data.list.map((item, idx) => (
          <BlockListElement key={idx} num={item.num} title={item.title} desc={item.desc} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export const ImpactTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.impact || caseStudiesData['expense-tracker'].tabs.impact;
  return (
    <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight" variants={staggerItemVariants}>
        Impact
      </motion.h2>

      <motion.p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p1 }} />

      <motion.p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[12px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p2 }} />

      <motion.ul className="list-disc pl-[24px] font-body text-[16px] leading-[1.8] text-[#1A1A1A] flex flex-col gap-[8px]" variants={tabVariants}>
        {data.list.map((item, idx) => (
          <motion.li key={idx} variants={staggerItemVariants}>{item}</motion.li>
        ))}
      </motion.ul>

      <motion.p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p3 }} />
    </motion.div>
  );
};

export const ConclusionTab = ({ id = 'expense-tracker' }) => {
  const data = caseStudiesData[id]?.tabs?.conclusion || caseStudiesData['expense-tracker'].tabs.conclusion;
  return (
    <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight" variants={staggerItemVariants}>
        Conclusion
      </motion.h2>

      <motion.p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p1 }} />

      <motion.p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]" variants={staggerItemVariants} dangerouslySetInnerHTML={{ __html: data.p2 }} />
    </motion.div>
  );
};
