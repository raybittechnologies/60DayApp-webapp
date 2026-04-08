import React from 'react';
import MentalImageImg from '../../assets/images/MentalImage.png';
import PhonesImg from '../../assets/images/3_Phones.png';

export const BlockListElement = ({ num, title, desc }) => (
  <div className="flex gap-[16px]">
    <span className="font-heading font-extrabold text-[20px] text-[#F05A28] mt-[1px]">{num}</span>
    <div>
      <h4 className="font-heading font-bold text-[20px] text-[#F05A28]">{title}</h4>
      <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[10px]">{desc}</p>
    </div>
  </div>
);

export const OverviewTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight">Overview</h2>
    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]">
      ABC FinTech Solutions is a modern digital product company focused on simplifying personal finance management. The goal was to design and develop a <span className="text-[#F05A28]">mobile-first Expense Tracking Application</span> that helps users manage daily expenses, monitor spending habits, and improve financial decision-making.
    </p>
    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]">
      The app was envisioned as a <span className="text-[#F05A28]">simple, secure, and user-friendly platform</span> tailored for individuals dealing with frequent and scattered expenses.
    </p>

    <div className="w-full mt-[48px] flex justify-center bg-transparent mix-blend-multiply rounded-[32px] overflow-hidden drop-shadow-sm border border-black/5">
      <img src={MentalImageImg} alt="Mental Diagram Architecture" className="w-full h-auto object-contain max-h-[800px]" />
    </div>
  </div>
);

export const GoalsTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight">Goals</h2>
    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[40px]">
      To build a <span className="text-[#F05A28]">fast, intuitive, and visually clear expense tracking mobile app</span> that enables users to manage their finances efficiently from a single platform.
    </p>

    <div className="flex flex-col gap-[36px]">
      <BlockListElement num="#1" title="Quick Expense Entry" desc="The objective was to allow users to log expenses within seconds with minimal input effort." />
      <BlockListElement num="#2" title="Clear Financial Insights" desc="The app needed to provide visual summaries such as charts and reports to help users understand spending patterns." />
      <BlockListElement num="#3" title="Budget Management" desc="It required features for setting budgets and tracking limits to encourage better financial discipline." />
    </div>

    <div className="w-full mt-[48px] flex justify-center bg-transparent mix-blend-multiply rounded-[32px] overflow-hidden drop-shadow-sm border border-black/5">
      <img src={MentalImageImg} alt="Mental Diagram Architecture" className="w-full h-auto object-contain max-h-[800px]" />
    </div>
  </div>
);

export const ChallengesTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight">Challenges</h2>
    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[40px]">
      The project required balancing simplicity with functionality while ensuring users remained engaged and consistent in tracking their expenses.
    </p>

    <div className="flex flex-col gap-[36px]">
      <BlockListElement num="#1" title="User Retention" desc="Users often stop using expense apps after a short time due to complexity or lack of motivation." />
      <BlockListElement num="#2" title="Data Clarity" desc="Presenting financial data in a simple, understandable way without overwhelming users was a key challenge." />
      <BlockListElement num="#3" title="Speed vs Functionality" desc="Ensuring quick expense entry while still offering meaningful insights." />
      <BlockListElement num="#4" title="Intuitive, Minimal UI" desc="Designing an interface that is minimal but still provides all essential features." />
    </div>
  </div>
);

export const SolutionsTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="w-full rounded-[32px] bg-[#FFF5F2] border border-[#FFCAB2] shadow-sm pt-[48px] pb-[16px] px-[24px] flex flex-col items-center mb-[40px] overflow-hidden">
      <h2 className="font-heading font-extrabold text-[36px] sm:text-[40px] text-[#F05A28] tracking-tight mb-[24px] text-center">Desired Solutions</h2>
      <div className="w-full flex justify-center mt-auto opacity-90 h-[220px] sm:h-[280px]">
        <img src={PhonesImg} alt="Solutions mockups" className="w-full h-full object-contain object-bottom drop-shadow-xl" />
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
  </div>
);

export const SpecialFeaturesTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight">Special Features</h2>
    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[40px]">
      The application offers powerful yet simple tools that make financial tracking effortless and engaging.
    </p>

    <div className="flex flex-col gap-[36px]">
      <BlockListElement num="#1" title="Expense Tracking Dashboard" desc="A centralized dashboard showing total balance, recent transactions, and spending summaries." />
      <BlockListElement num="#2" title="Quick Add Expense" desc="One-tap expense entry with category selection and minimal input fields." />
      <BlockListElement num="#3" title="Visual Analytics" desc="Interactive charts (pie/bar) to display spending patterns and category distribution." />
      <BlockListElement num="#4" title="Budget Tracking" desc="Users can set monthly budgets and receive alerts when limits are exceeded." />
      <BlockListElement num="#5" title="Smart Categorization" desc="Predefined categories like Food, Travel, Bills, and Shopping for easy organization." />
    </div>
  </div>
);

export const ImpactTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight">Impact</h2>

    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]">
      The launch of the Expense Tracking App significantly improved how users manage their finances.
    </p>

    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px] mb-[12px]">
      Users were able to:
    </p>

    <ul className="list-disc pl-[24px] font-body text-[16px] leading-[1.8] text-[#1A1A1A] flex flex-col gap-[8px]">
      <li>Track expenses quickly and consistently</li>
      <li>Gain clear insights into their spending habits</li>
      <li>Improve budgeting and financial discipline</li>
      <li>Access their data easily through a clean and responsive mobile interface</li>
    </ul>

    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[24px]">
      The app's simplicity and visual approach increased user engagement and made expense tracking a <span className="text-[#FF8055]">daily habit rather than a burden.</span>
    </p>
  </div>
);

export const ConclusionTab = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[40px] text-[#F05A28] tracking-tight">Conclusion</h2>

    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]">
      This project demonstrates how a <span className="text-[#FF8055]">user-centered design approach</span> can simplify financial management.
    </p>

    <p className="font-body text-[16px] leading-[1.8] text-[#1A1A1A] mt-[16px]">
      By focusing on <span className="text-[#FF8055]">speed, clarity, and usability</span>, the Expense Tracking App transforms a complex task into a <span className="text-[#FF8055]">seamless and intuitive experience</span>, empowering users to take control of their finances.
    </p>
  </div>
);
