
import React from 'react';
import Phone1 from '../../assets/images/phone1.png';

export const TABS = ['Overview', 'Goals', 'Challenges', 'Solutions', 'Special Features', 'Impact', 'Conclusion'];

export default function SidebarMenu({ activeTab, setActiveTab }) {
  return (
    <>
      {/* ── Mobile / Tablet: horizontal scrollable tab strip ── */}
      <div className="lg:hidden sticky top-[80px] z-30 -mx-[4.35vw] w-screen">
        <div
          className="w-full overflow-x-auto no-scrollbar bg-[#FFF5F2] shadow-[0_2px_12px_rgba(240,90,40,0.10)] border-b border-[#FFCAB2]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-[4px] px-[16px] py-[8px] min-w-max">
            {TABS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(item)}
                className={`whitespace-nowrap px-[14px] py-[8px] rounded-full text-[13px]  font-semibold font-body transition-all duration-200
                  ${activeTab === item
                    ? 'bg-[#F05A28] text-white shadow-md'
                    : 'text-[#1A1A1A] hover:bg-[#FFCAB2]/40'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop: vertical sticky sidebar ── */}
      <div className="hidden lg:flex flex-col sticky top-[100px] gap-[32px] lg:self-start">
        <div className="w-full relative rounded-[24px] bg-[#FFF5F2] shadow-[0_0_0_1px_#FFCAB2] p-[32px]">
          <h3 className="font-heading font-bold text-[24px] text-[#F05A28] mb-[24px] tracking-tight">Table Of Content</h3>

          {/* Background Track on right edge */}
          <div className="absolute right-0 top-[88px] bottom-[32px] w-[4px] bg-[#FFCAB2] bg-opacity-40 rounded-l-md" />

          <ul className="flex flex-col gap-[20px] relative">
            {TABS.map((item, idx) => (
              <li key={idx} className="relative">
                {activeTab === item && (
                  <div className="absolute right-[-32px] top-1/2 -translate-y-1/2 h-[32px] w-[4px] bg-[#F05A28] rounded-l-md" />
                )}
                <button
                  onClick={() => setActiveTab(item)}
                  className={`font-body font-semibold text-[16px] tracking-tight transition-colors text-left ${activeTab === item ? 'text-[#F05A28]' : 'text-[#1A1A1A] hover:text-[#F05A28]'
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full rounded-[24px] bg-[#FFF5F2] border-[1px] border-[#FFCAB2] shadow-sm p-[32px] pb-[8px] text-left flex flex-col overflow-hidden">
          <h3 className="font-heading font-extrabold text-[24px] text-[#F05A28] leading-[1.2]">Have a Project in<br />Mind ?</h3>
          <p className="font-body text-[14px] font-normal text-[#1A1A1A] mt-[16px] mb-[16px] leading-[1.5]">Contact us today and our team will reach out to you .....</p>
          <div className="w-[200px] h-auto mx-auto mt-auto flex items-end justify-center translate-y-3">
            <img src={Phone1} className="w-full h-auto object-contain object-bottom drop-shadow-xl" alt="Contact Us Mockups" />
          </div>
        </div>
      </div>
    </>
  );
}