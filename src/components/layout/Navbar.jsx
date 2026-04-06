

import React, { useState, useEffect } from 'react';
import EyebrowPill from '../ui/EyebrowPill';
import Button from '../ui/Button';

const NAV_LINKS = [
  { href: '#how',   label: 'How It Works' },
  { href: '#cases', label: 'Case Studies' },
  { href: '#about', label: 'About Us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── NAV BAR ──
          Outer nav: absolute, full width, same responsive padding as section-outer.
          Inner div: max-w-[1280px] + mx-auto = same as section-inner.

          Why not use section-outer/section-inner directly:
          section-outer switches to `display:flex` at 1360px+ for centering,
          but absolute-positioned elements ignore flex flow from their parent,
          so we replicate the padding + max-width manually here instead.
      -->
      */}
      <nav className="
        absolute top-4 sm:top-6 left-0 right-0 z-[100]
        w-full
        px-[16px] sm:px-[40px] 
      ">
        <div className="w-full max-w-[1280px] mx-auto h-[60px] sm:h-[71px] flex items-center justify-between">

          {/* Logo */}
          <div className="font-heading text-2xl sm:text-3xl font-semibold tracking-tighter flex items-center shrink-0">
            <span className="text-text-primary">60Day</span>
            <span className="text-brand-orange">App</span>
          </div>

          {/* Centre pill — tablet + desktop */}
          <div className="hidden md:flex items-center">
            <EyebrowPill />
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center">
            <Button variant="primary">Book Free Call</Button>
          </div>

          {/* Hamburger / X — mobile only
              FIX: dynamic classes moved to inline style to avoid Tailwind v4 scan warnings.
          */}
          <button
            className="sm:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
            />
            <span
              className="block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)' }}
            />
            <span
              className="block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU BACKDROP ──
          FIX: dynamic opacity/pointer-events moved to style prop.
      */}
      <div
        className="sm:hidden fixed inset-0 z-[110] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        onClick={close}
      />

      {/* ── MOBILE SLIDE-DOWN PANEL ──
          FIX: dynamic translate moved to style prop.
      */}
      <div
        className="sm:hidden fixed top-0 left-0 right-0 z-[120] bg-[#FFF3EE] rounded-b-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-in-out"
        style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="flex items-center justify-between px-5 h-[72px]">
          <div className="font-heading text-2xl font-semibold tracking-tighter flex items-center">
            <span className="text-text-primary">60Day</span>
            <span className="text-brand-orange">App</span>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-orange/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M14 4L4 14M4 4L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-border-default mx-5" />

        <div className="flex flex-col px-5 py-3">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="font-body text-[17px] font-medium text-text-primary py-4 border-b border-border-default last:border-0 hover:text-brand-orange transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="px-5 pb-7 pt-2">
          <Button variant="primary" className="w-full justify-center" onClick={close}>
            Book Free Call
          </Button>
        </div>
      </div>
    </>
  );
}