"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleUp, staggerContainer, staggerItem, viewport } from '@/utils/motionVariants';

const Hero = () => {
  return (
    <section className="section-outer pt-[100px] sm:pt-[120px] lg:pt-[135px] pb-[40px] sm:pb-[60px] lg:pb-[10px] bg-transparent">
      <div className="section-inner">

       
        <motion.div
          className="
            w-full
            bg-peach
            rounded-2xl lg:rounded-card
            border-b border-border-default
            shadow-card
            overflow-hidden
            relative
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            className="relative z-10 w-full flex flex-col h-full px-4 sm:px-10"
            variants={staggerContainer(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >

            {/* ── Curved SVG headline ── */}
            <motion.div
              className="w-full"
              variants={staggerItem}
            >

              {/* Mobile arc */}
              <svg
                className="block md:hidden"
                viewBox="0 0 700 280"
                width="100%"
                height="auto"
                aria-label="Stop Explaining. Start Launching!"
                style={{ marginTop: '8px', marginBottom: '0px' }}
              >
                <defs>
                  <path id="heroTextArcMobile" d="M 20,260 Q 350,40 680,260" fill="none" />
                </defs>
                <text
                  fontFamily="'Caveat', cursive"
                  fontWeight="700"
                  fontSize="50"
                  fill="#C03A10"
                  letterSpacing="2"
                  textAnchor="middle"
                >
                  <textPath href="#heroTextArcMobile" startOffset="50%">
                    Stop Explaining. Start Launching!
                  </textPath>
                </text>
              </svg>

              {/* Medium arc */}
              <svg
                className="hidden md:block lg:hidden"
                viewBox="0 0 1000 350"
                width="100%"
                height="auto"
                aria-label="Stop Explaining. Start Launching!"
                style={{ marginTop: '0px', marginBottom: '-20px' }}
              >
                <defs>
                  <path id="heroTextArcMedium" d="M 50,320 Q 500,50 950,320" fill="none" />
                </defs>
                <text
                  fontFamily="'Caveat', cursive"
                  fontWeight="700"
                  fontSize="65"
                  fill="#C03A10"
                  letterSpacing="2.5"
                  textAnchor="middle"
                >
                  <textPath href="#heroTextArcMedium" startOffset="50%">
                    Stop Explaining. Start Launching!
                  </textPath>
                </text>
              </svg>

              {/* Desktop arc */}
              <svg
                className="hidden lg:block"
                viewBox="0 0 1400 420"
                width="100%"
                height="auto"
                aria-label="Stop Explaining. Start Launching!"
                style={{ marginTop: '-80px', marginBottom: '-60px' }}
              >
                <defs>
                  <path id="heroTextArc80" d="M 0,400 Q 600,20 1400,400" fill="none" />
                </defs>
                <text
                  fontFamily="'Caveat', cursive"
                  fontWeight="700"
                  fontSize="80"
                  fill="#C03A10"
                  letterSpacing="3"
                  textAnchor="middle"
                >
                  <textPath href="#heroTextArc80" startOffset="50%">
                    Stop Explaining. Start Launching!
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* ── Subtitle ── */}
            <motion.p
              className="text-center font-[600] text-[#1A1A1A] mx-auto mt-2 mb-4 md:mb-6 lg:mb-10 text-[14px] md:text-[16px] lg:text-[20px]"
              style={{ lineHeight: '1.65', maxWidth: '907px' }}
              variants={staggerItem}
            >
              We're designers and devs who got tired of friction. Now, we're using that obsession to
              build your MVP in 60 days flat—from{' '}
              <span className="font-semibold" style={{ color: '#F05A28' }}>
                initial spark to App Store
              </span>
              .
            </motion.p>

            {/* ── Big brand mark — desktop only ── */}
            <motion.div
              className="hidden md:flex mt-auto items-end justify-center"
              variants={scaleUp}
            >
              <h1
                className="font-black leading-none select-none"
                style={{ fontSize: 'clamp(48px, 10vw, 195px)', letterSpacing: '-4px', lineHeight: 1 }}
              >
                <span className="text-[#1A1A1A]" style={{ fontSize: 'clamp(80px, 16vw, 192px)' }}>60Day</span>
                <span className="text-[#C03A10]" style={{ fontSize: 'clamp(80px, 16vw, 192px)' }}>App</span>
              </h1>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
