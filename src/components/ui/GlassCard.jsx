/* ============================================================
   GlassCard.jsx — reusable card base
   Used in: SocialProof, Features, CaseStudies
   ============================================================ */

import React from 'react';

export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`
      bg-white
      rounded-card
      border border-border-default
      shadow-card
      p-[24px]
      ${className}
    `}>
      {children}
    </div>
  );
}