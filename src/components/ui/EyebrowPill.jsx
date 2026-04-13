import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const NavItem = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) =>
      `relative font-body text-base lg:text-[17px] whitespace-nowrap transition-all duration-300 hover:text-brand-orange flex flex-col items-center ${
        isActive ? 'text-brand-orange font-bold' : 'text-text-primary'
      }`
    }>
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <motion.div
              layoutId="nav-pill-active-line"
              className="absolute -bottom-[4px] w-[20px] h-[3px] rounded-full bg-brand-orange"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </>
      )}
    </NavLink>
  );

  // nav variant (pill with links)
  return (
    <div className="
      flex items-center gap-6 lg:gap-10
      px-6 lg:px-12
      h-[52px] md:h-[60px] lg:h-[71px]
      rounded-full
      bg-brand-orange/10
      backdrop-blur-xl
      border border-[#FFCAB2]
      transition-all duration-500
      hover:shadow-[0_4px_32px_rgba(240,90,40,0.15)]
      hover:border-brand-orange/40
    ">
      <NavItem to="/#how">How It Works</NavItem>
      <NavItem to="/case-study/expense-tracker">Case Studies</NavItem>
      <NavItem to="/about-us">About Us</NavItem>
      <NavItem to="/blog">Blogs</NavItem>
    </div>
  );
}