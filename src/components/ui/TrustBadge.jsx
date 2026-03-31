/* ============================================================
   TrustBadge.jsx
   Used in: SocialProof (S5)
   
   variant="check" → ✓ green check + label
   variant="star"  → ⭐ star + label
   ============================================================ */

import React from 'react';

export default function TrustBadge({ children, variant = 'check', className = '' }) {

  const icons = {
    check: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7L5.5 10.5L12 3.5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    star: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L8.854 5.168L13.5 5.635L10.25 8.532L11.326 13L7 10.5L2.674 13L3.75 8.532L0.5 5.635L5.146 5.168L7 1Z"
          fill="#F97316" />
      </svg>
    ),
  };

  return (
    <div className={`
      inline-flex items-center gap-[8px]
      px-[16px] py-[8px]
      rounded-full
      border border-border-default
      bg-white
      ${className}
    `}>
      {icons[variant]}
      <span className="font-body text-[14px] font-medium text-text-primary">
        {children}
      </span>
    </div>
  );
}