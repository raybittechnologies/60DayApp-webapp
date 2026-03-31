/* ============================================================
   IconWrap.jsx
   variant="solid"  → orange bg + white icon (default)
   variant="muted"  → light peach bg + orange icon
   ============================================================ */

import React from 'react';

export default function IconWrap({ children, variant = 'solid', className = '' }) {

  const base = `
    w-[48px] h-[48px]
    rounded-[12px]
    flex items-center justify-center
    flex-none
  `;

  const variants = {
    solid: 'bg-brand-orange',
    muted: 'bg-brand-orange/10',
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}