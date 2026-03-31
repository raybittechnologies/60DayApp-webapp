
import React from 'react';
import EyebrowPill from '../ui/EyebrowPill';
import Button from '../ui/Button';

export default function Navbar() {
  return (
   
    <nav className="absolute top-6 left-0 right-0 z-[100] flex justify-center w-full">

      
      <div className="w-full max-w-[1280px] h-[71px]  flex items-center justify-between">

        <div className="font-heading text-3xl font-semibold tracking-tighter flex items-center">
          <span className="text-text-primary">60Day</span>
          <span className="text-brand-orange">App</span>
        </div>

        
        <div className="hidden md:flex items-center">
          <EyebrowPill />
        </div>

        {/* ── CTA Button ───────────────────────────────────── */}
        <Button variant="primary">
          Book Free Call
        </Button>

      </div>
    </nav>
  );
}