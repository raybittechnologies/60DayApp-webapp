

import React from 'react';

export default function EyebrowPill({ variant = 'nav', children }) {

  if (variant === 'label') {
    return (
      <div
        className="
          inline-flex items-center justify-center gap-[10px]
          px-[14px] py-[6px]
          min-h-[36px] sm:min-h-[40px]
          rounded-[48px]
          border border-brand-orange/40
          bg-brand-orange/10
          text-brand-orange
        "
        style={{ width: 'max-content' }}
      >
        <span className="w-[7px] h-[7px] sm:w-[8px] sm:h-[8px] rounded-full bg-brand-orange flex-none" />
        <span className="font-heading font-semibold text-sm sm:text-base lg:text-[18px] tracking-normal leading-[1.4]">
          {children}
        </span>
      </div>
    );
  }

  // nav variant (pill with links)
  return (
    <div className="
      flex items-center gap-6 lg:gap-10
      px-6 lg:px-10
      h-[52px] md:h-[60px] lg:h-[71px]
      rounded-full
      bg-brand-orange/10
      backdrop-blur-xl
      border border-brand-orange/20
      transition-all duration-300
      hover:bg-brand-orange/15
      hover:border-brand-orange/40
    ">
      <a href="#how"   className="font-body text-base lg:text-lg text-text-primary whitespace-nowrap transition-colors duration-200 hover:text-brand-orange">How It Works</a>
      <a href="#cases" className="font-body text-base lg:text-lg text-text-primary whitespace-nowrap transition-colors duration-200 hover:text-brand-orange">Case Studies</a>
      <a href="#about" className="font-body text-base lg:text-lg text-text-primary whitespace-nowrap transition-colors duration-200 hover:text-brand-orange">About Us</a>
    </div>
  );
}