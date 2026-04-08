

import React from 'react';

const Hero = () => {
  return (
    <section className="section-outer pt-[100px] sm:pt-[120px] lg:pt-[135px] pb-[40px] sm:pb-[60px] lg:pb-[10px] bg-[#FFF5F2]">
      <div className="section-inner">

        {/* ── CARD ── */}
        <div
          className="
            w-full
            bg-peach
            rounded-2xl lg:rounded-card
            border-b border-border-default
            shadow-card
            overflow-hidden
            relative
          "
        >
          <div className="relative z-10 w-full flex flex-col h-full px-4 sm:px-10">

            {/* ── Curved SVG headline ── */}
            <div className="w-full">

              {/* Mobile arc — no negative bottom margin, let it flow naturally */}
              <svg
                className="block lg:hidden"
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
            </div>

            {/* ── Subtitle ── */}
            <p
              className="text-center font-[600] text-[#1A1A1A] mx-auto mt-2 mb-6 lg:mb-10 text-[14px] lg:text-[20px]"
              style={{ lineHeight: '1.65', maxWidth: '907px' }}
            >
              We're designers and devs who got tired of the friction. Now, we're using that obsession to
              build your MVP in 60 days flat—from{' '}
              <span className="font-semibold" style={{ color: '#F05A28' }}>
                initial spark to the App Store
              </span>
              .
            </p>

            {/* ── Big brand mark — desktop only ── */}
            <div className="hidden lg:flex mt-auto items-end justify-center">
              <h1
                className="font-black leading-none select-none"
                style={{ fontSize: 'clamp(64px, 13.5vw, 195px)', letterSpacing: '-4px', lineHeight: 1 }}
              >
                <span style={{ color: '#1A1A1A', fontSize: '192px' }}>60Day</span>
                <span style={{ color: '#C03A10', fontSize: '192px' }}>App</span>
              </h1>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;