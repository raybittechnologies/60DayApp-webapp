"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MentalImageImg from '@/assets/images/MentalImage.png';
import Phone1 from '@/assets/images/phone1.png';
import Phone2 from '@/assets/images/phone2.png';

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

export const OverviewTab = () => (
  <motion.div 
    variants={tabVariants} initial="hidden" animate="visible" exit="exit"
  >
    <motion.h2 
      className="font-heading font-extrabold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#F05A28] tracking-tight"
      variants={staggerItemVariants}
    >
      Overview
    </motion.h2>
    <motion.p 
      className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px]"
      variants={staggerItemVariants}
    >
      ABC FinTech Solutions is a modern digital product company focused on simplifying personal finance management. The goal was to design and develop a <span className="text-[#F05A28]">mobile-first Expense Tracking Application</span> that helps users manage daily expenses, monitor spending habits, and improve financial decision-making.
    </motion.p>
    <motion.p 
      className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px]"
      variants={staggerItemVariants}
    >
      The app was envisioned as a <span className="text-[#F05A28]">simple, secure, and user-friendly platform</span> tailored for individuals dealing with frequent and scattered expenses.
    </motion.p>

    <motion.div 
      className="w-full mt-[32px] sm:mt-[48px] flex justify-center bg-transparent mix-blend-multiply rounded-[24px] sm:rounded-[32px] overflow-hidden drop-shadow-sm border border-black/5"
      variants={staggerItemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img src={MentalImageImg.src} alt="Mental Diagram Architecture" className="w-full h-auto object-contain max-h-[600px] sm:max-h-[800px]" />
    </motion.div>
  </motion.div>
);

export const GoalsTab = () => (
  <motion.div 
    variants={tabVariants} initial="hidden" animate="visible" exit="exit"
  >
    <motion.h2 
      className="font-heading font-extrabold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#F05A28] tracking-tight"
      variants={staggerItemVariants}
    >
      Goals
    </motion.h2>
    <motion.p 
      className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px] mb-[24px] sm:mb-[40px]"
      variants={staggerItemVariants}
    >
      To build a <span className="text-[#F05A28]">fast, intuitive, and visually clear expense tracking mobile app</span> that enables users to manage their finances efficiently from a single platform.
    </motion.p>

    <motion.div 
      className="flex flex-col gap-[24px] sm:gap-[36px]"
      variants={tabVariants}
    >
      <BlockListElement num="#1" title="Quick Expense Entry" desc="The objective was to allow users to log expenses within seconds with minimal input effort." />
      <BlockListElement num="#2" title="Clear Financial Insights" desc="The app needed to provide visual summaries such as charts and reports to help users understand spending patterns." />
      <BlockListElement num="#3" title="Budget Management" desc="It required features for setting budgets and tracking limits to encourage better financial discipline." />
    </motion.div>

    <motion.div 
      className="w-full mt-[32px] sm:mt-[48px] flex justify-center bg-transparent mix-blend-multiply rounded-[24px] sm:rounded-[32px] overflow-hidden drop-shadow-sm border border-black/5"
      variants={staggerItemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img src={MentalImageImg.src} alt="Mental Diagram Architecture" className="w-full h-auto object-contain max-h-[600px] sm:max-h-[800px]" />
    </motion.div>
  </motion.div>
);

export const ChallengesTab = () => (
  <motion.div 
    variants={tabVariants} initial="hidden" animate="visible" exit="exit"
  >
    <motion.h2 
      className="font-heading font-extrabold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-[#F05A28] tracking-tight"
      variants={staggerItemVariants}
    >
      Challenges
    </motion.h2>
    <motion.p 
      className="font-body text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.8] text-[#1A1A1A] mt-[12px] sm:mt-[16px] mb-[24px] sm:mb-[40px]"
      variants={staggerItemVariants}
    >
      The project required balancing simplicity with functionality while ensuring users remained engaged and consistent in tracking their expenses.
    </motion.p>

    <motion.div 
      className="flex flex-col gap-[24px] sm:gap-[36px]"
      variants={tabVariants}
    >
      <BlockListElement num="#1" title="User Retention" desc="Users often stop using expense apps after a short time due to complexity or lack of motivation." />
      <BlockListElement num="#2" title="Data Clarity" desc="Presenting financial data in a simple, understandable way without overwhelming users was a key challenge." />
      <BlockListElement num="#3" title="Speed vs Functionality" desc="Ensuring quick expense entry while still offering meaningful insights." />
      <BlockListElement num="#4" title="Intuitive, Minimal UI" desc="Designing an interface that is minimal but still provides all essential features." />
    </motion.div>
  </motion.div>
);

export const SolutionsTab = () => {
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
        <h2 className="font-heading font-extrabold text-[36px] sm:text-[40px] text-[#F05A28] tracking-tight mb-[24px] text-center px-4">Desired Solutions</h2>

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

      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A]">
        We designed and developed a <span className="text-[#FF8055]">mobile-first expense tracking solution</span> from the ground up, focusing on speed, clarity, and usability.
      </p>

      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]">
        The app was built with a <span className="text-[#FF8055]">streamlined user flow</span>, allowing users to quickly add expenses, categorize them, and instantly view summaries. A clean and modern UI was crafted to ensure ease of use and reduce cognitive load.
      </p>

      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]">
        The system integrates <span className="text-[#FF8055]">real-time data visualization</span>, budget tracking, and categorized expense management, enabling users to monitor their financial behavior effectively.
      </p>
    </motion.div>
  );
};

export const SpecialFeaturesTab = () => (
  <motion.div 
    variants={tabVariants} initial="hidden" animate="visible" exit="exit"
  >
    <motion.h2 
      className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight"
      variants={staggerItemVariants}
    >
      Special Features
    </motion.h2>
    <motion.p 
      className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[40px]"
      variants={staggerItemVariants}
    >
      The application offers powerful yet simple tools that make financial tracking effortless and engaging.
    </motion.p>

    <motion.div 
      className="flex flex-col gap-[36px]"
      variants={tabVariants}
    >
      <BlockListElement num="#1" title="Expense Tracking Dashboard" desc="A centralized dashboard showing total balance, recent transactions, and spending summaries." />
      <BlockListElement num="#2" title="Quick Add Expense" desc="One-tap expense entry with category selection and minimal input fields." />
      <BlockListElement num="#3" title="Visual Analytics" desc="Interactive charts (pie/bar) to display spending patterns and category distribution." />
      <BlockListElement num="#4" title="Budget Tracking" desc="Users can set monthly budgets and receive alerts when limits are exceeded." />
      <BlockListElement num="#5" title="Smart Categorization" desc="Predefined categories like Food, Travel, Bills, and Shopping for easy organization." />
    </motion.div>
  </motion.div>
);

export const ImpactTab = () => (
  <motion.div 
    variants={tabVariants} initial="hidden" animate="visible" exit="exit"
  >
    <motion.h2 
      className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight"
      variants={staggerItemVariants}
    >
      Impact
    </motion.h2>

    <motion.p 
      className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]"
      variants={staggerItemVariants}
    >
      The launch of the Expense Tracking App significantly improved how users manage their finances.
    </motion.p>

    <motion.p 
      className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[12px]"
      variants={staggerItemVariants}
    >
      Users were able to:
    </motion.p>

    <motion.ul 
      className="list-disc pl-[24px] font-body text-[16px] leading-[1.8] text-[#1A1A1A] flex flex-col gap-[8px]"
      variants={tabVariants}
    >
      <motion.li variants={staggerItemVariants}>Track expenses quickly and consistently</motion.li>
      <motion.li variants={staggerItemVariants}>Gain clear insights into their spending habits</motion.li>
      <motion.li variants={staggerItemVariants}>Improve budgeting and financial discipline</motion.li>
      <motion.li variants={staggerItemVariants}>Access their data easily through a clean and responsive mobile interface</motion.li>
    </motion.ul>

    <motion.p 
      className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]"
      variants={staggerItemVariants}
    >
      The app's simplicity and visual approach increased user engagement and made expense tracking a <span className="text-[#FF8055]">daily habit rather than a burden.</span>
    </motion.p>
  </motion.div>
);

export const ConclusionTab = () => (
  <motion.div 
    variants={tabVariants} initial="hidden" animate="visible" exit="exit"
  >
    <motion.h2 
      className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight"
      variants={staggerItemVariants}
    >
      Conclusion
    </motion.h2>

    <motion.p 
      className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]"
      variants={staggerItemVariants}
    >
      This project demonstrates how a <span className="text-[#FF8055]">user-centered design approach</span> can simplify financial management.
    </motion.p>

    <motion.p 
      className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]"
      variants={staggerItemVariants}
    >
      By focusing on <span className="text-[#FF8055]">speed, clarity, and usability</span>, the Expense Tracking App transforms a complex task into a <span className="text-[#FF8055]">seamless and intuitive experience</span>, empowering users to take control of their finances.
    </motion.p>
  </motion.div>
);
