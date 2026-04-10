import React from 'react';
import { NavLink } from 'react-router-dom';

export default function EyebrowPill({ variant = 'nav', children }) {

  if (variant === 'label') {
    return (
      <div
        className="
          inline-flex items-center justify-center gap-[10px]
          min-w-[174px]
          px-[14px] py-[6px]
          min-h-[40px] sm:min-h-[40px]
          rounded-[48px]
          border border-[#FF8055]
          bg-[#FF80551A]
          text-brand-orange
          text-[20px]
          text-[600]
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

  const navClass = ({ isActive }) =>
    `font-body text-base lg:text-lg whitespace-nowrap transition-colors duration-200 hover:text-brand-orange ${isActive ? 'text-brand-orange' : 'text-text-primary'
    }`;

  // nav variant (pill with links)
  return (
    <div className="
      flex items-center gap-6 lg:gap-10
      px-6 lg:px-10
      h-[52px] md:h-[60px] lg:h-[71px]
      rounded-full
      bg-brand-orange/10
      backdrop-blur-xl
      border border-[#FFCAB2]
      transition-all duration-300
      hover:bg-brand-orange/15
      hover:border-brand-orange/40
    ">
      <NavLink to="/#how" className={navClass}>How It Works</NavLink>
      <NavLink to="/case-study/expense-tracker" className={navClass}>Case Studies</NavLink>
      <NavLink to="/about-us" className={navClass}>About Us</NavLink>
    </div>
  );
}