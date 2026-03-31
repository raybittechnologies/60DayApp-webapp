
import React from 'react';

export default function EyebrowPill({ variant = 'nav', children }) {
  
  // ── Section Label variant (used in Problem, Process, Features etc.)
  if (variant === 'label') {
    return (
      <div className="
        w-[174px] h-[40px]
        inline-flex items-center justify-center gap-[12px]
        pt-[6px] pr-[12px] pb-[6px] pl-[12px]
        rounded-[32px]
        border-[1px] border-brand-orange/40
        bg-brand-orange/10
        text-brand-orange
      " style={{ borderRadius: '48px' }}>
        <span className="w-[8px] h-[8px] rounded-full bg-brand-orange flex-none mt-[1px]" />
        <span 
          className="font-semibold text-[20px] tracking-normal leading-[1.4]" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {children}
        </span>
      </div>
    );
  }

  // ── Nav variant (default — existing Navbar usage, unchanged)
  return (
    <div className="
      flex items-center gap-10
      px-10 h-[71px]
      rounded-full
      bg-brand-orange/10
      backdrop-blur-xl
      border border-brand-orange/20
      transition-all duration-300
      hover:bg-brand-orange/15
      hover:border-brand-orange/40
    ">
      <a href="#how" className="font-body text-lg text-text-primary whitespace-nowrap transition-colors duration-200 hover:text-brand-orange">
        How It Works
      </a>
      <a href="#cases" className="font-body text-lg text-text-primary whitespace-nowrap transition-colors duration-200 hover:text-brand-orange">
        Case Studies
      </a>
      <a href="#about" className="font-body text-lg text-text-primary whitespace-nowrap transition-colors duration-200 hover:text-brand-orange">
        About Us
      </a>
    </div>
  );
}