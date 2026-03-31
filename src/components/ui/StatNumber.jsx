/* ============================================================
   StatNumber.jsx
   Used in: Problem, Features, SocialProof
   
   Props:
   - value: "12mo" / "3x" / "70%" / "60d"
   - label: description text beside or below
   - layout: "row" (value + label side by side) | "col" (stacked)
   ============================================================ */

import React from 'react';

export default function StatNumber({ value, label, layout = 'row', className = '' }) {

  if (layout === 'col') {
    return (
      <div className={`flex flex-col gap-[4px] ${className}`}>
        <span className="
          font-heading font-bold
          text-[48px]
          leading-[110%]
          tracking-[-1px]
          text-text-primary
        ">
          {value}
        </span>
        <span className="font-body text-[16px] text-text-body leading-[150%]">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-[16px] ${className}`}>
      <span className="
        font-heading font-bold
        text-[48px]
        leading-[110%]
        tracking-[-1px]
        text-text-primary
      ">
        {value}
      </span>
      <span className="font-body text-[16px] text-text-body leading-[150%] max-w-[120px]">
        {label}
      </span>
    </div>
  );
}