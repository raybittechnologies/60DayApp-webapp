import React from 'react';

export default function ClientHeader() {
  return (
    <div className="w-full bg-[#FF8055] rounded-[24px] p-[24px] flex flex-col sm:flex-row items-center justify-between gap-[24px] text-white shadow-xl shadow-[#FF8055]/20 overflow-hidden relative mb-[48px]">
      <div className="absolute -right-12 -top-12 opacity-30 pointer-events-none">
         <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1"/>
         </svg>
      </div>
      <div className="flex items-center gap-[20px] z-10">
        <div className="w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center font-heading font-extrabold text-[#1A1A1A] text-[18px]">ABC</div>
        <div className="flex flex-col">
          <span className="font-heading font-bold text-[20px] tracking-tight">ABC Software Solutions</span>
          <span className="font-body font-normal text-[15px] opacity-90 mt-[2px]">Saudi Arabia</span>
        </div>
      </div>
      <button className="bg-white text-[#1A1A1A] font-bold text-[16px] tracking-tight px-[32px] py-[14px] rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2 z-10 hover:shadow-lg">
        Visit App →
      </button>
    </div>
  );
}
