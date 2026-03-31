/* ============================================================
   Navbar.jsx — Top navigation bar
   Path: src/components/layout/Navbar.jsx
   
   Layout (left → center → right):
     60DayApp (logo)  |  EyebrowPill (nav links)  |  Book Free Call (button)
   
   Position: absolute, floats 24px from the top of the page.
   It sits ON TOP of the Hero section — there's no space reserved
   for it. The Hero section accounts for this with its top padding.
   ============================================================ */

import React from 'react';
import EyebrowPill from '../ui/EyebrowPill';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    /*
      absolute            → floats over the page, doesn't push content down
      top-6               → 24px from the top
      left-0 right-0      → stretches full page width
      z-[100]             → sits above all page content
      flex justify-center → centers the inner row
      w-full              → needed so justify-center has room to work
    */
    <nav className="absolute top-6 left-0 right-0 z-[100] flex justify-center w-full">

      {/*
        Inner row — this is what you actually see:

        w-full max-w-[1280px]
          → fills width up to 1280px then stops (matches Hero card width)
        h-[71px]
          → exact navbar height from Figma
        px-6
          → 24px padding on left and right sides
        flex items-center justify-between
          → logo on far left, pill in center, button on far right
      */}
      <div className="w-full max-w-[1280px] h-[71px]  flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────── */}
        {/* Two spans with different colors to make "60Day" + "App" */}
        <div className="font-heading text-3xl font-semibold tracking-tighter flex items-center">
          <span className="text-text-primary">60Day</span>
          <span className="text-brand-orange">App</span>
        </div>

        {/* ── Nav Links Pill ───────────────────────────────── */}
        {/* Hidden on mobile (md:flex shows it on tablet and up) */}
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