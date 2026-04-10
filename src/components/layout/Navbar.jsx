import React, { useState, useEffect } from 'react';
import EyebrowPill from '../ui/EyebrowPill';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/#how', label: 'How It Works', isRouter: true },
  { href: '/case-study/expense-tracker', label: 'Case Studies', isRouter: true },
  { href: '/about-us', label: 'About Us', isRouter: true },
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

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
        fixed top-0 left-0 right-0 z-[100]
        w-full
        
        py-[12px]
        px-[16px] sm:px-[40px] 
        bg-[#FFF5F2]/100 backdrop-blur-md
       
     
      ">
        <div className="w-full max-w-[1280px] mx-auto h-[70px] sm:h-[85px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="font-heading text-2xl sm:text-3xl font-semibold tracking-tighter flex items-center shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
              <span className="text-text-primary">60Day</span>
              <span className="text-brand-orange">App</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center">
            <EyebrowPill />
          </div>

         
          <div className="hidden sm:flex items-center">
            <Button variant="primary">Book Free Call</Button>
          </div>

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
      </motion.nav>

      <div
        className="sm:hidden fixed inset-0 z-[110] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        onClick={close}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden fixed top-0 left-0 right-0 z-[120] bg-[#FFF3EE] rounded-b-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
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
              {NAV_LINKS.map(({ href, label, isRouter }, i) => {
                const classes = "font-body text-[17px] font-medium text-text-primary py-4 border-b border-border-default last:border-0 hover:text-brand-orange transition-colors duration-200 block";
                return isRouter ? (
                  <motion.div key={href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} exit={{ opacity: 0, x: -20 }}>
                    <Link to={href} onClick={close} className={classes}>{label}</Link>
                  </motion.div>
                ) : (
                  <motion.div key={href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} exit={{ opacity: 0, x: -20 }}>
                    <a href={href} onClick={close} className={classes}>{label}</a>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} exit={{ opacity: 0, y: 20 }}
              className="px-5 pb-7 pt-2"
            >
              <Button variant="primary" className="w-full justify-center" onClick={close}>
                Book Free Call
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}