
import React from 'react';
const Button = ({
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
  ...props
}) => {

  const base = `
    inline-flex items-center justify-center gap-[10px]
    min-h-[52px] sm:min-h-[60px]
    rounded-pill
    px-6 sm:px-8 py-3 sm:py-4
    font-heading font-semibold text-base sm:text-xl
    whitespace-nowrap
    border border-solid
    cursor-pointer
    transition-all duration-300
    active:scale-95
  `;

  const variants = {
    
    primary: `
      bg-brand-orange-light
      text-white
      border-brand-orange-light
      shadow-orange
      hover:bg-[#F05A28]
      hover:border-[#F05A28]
      hover:shadow-orange-lg
    `,

   
    ghost: `
      bg-rgba(255, 255, 255, 0.05)
      text-[#F05A28]
      border-[#F05A28]
      shadow-orange
      hover:bg-[#F05A28]
      hover:text-white
      hover:shadow-orange-lg
    `,
  };

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}

      {showArrow && (
        <svg
          width="18" height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
};

export default Button;