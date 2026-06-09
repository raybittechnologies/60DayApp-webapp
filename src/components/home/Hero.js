"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeUp, slideRight, staggerContainer, staggerItem, float, viewport } from '@/utils/motionVariants';

import HeroMockup from '@/assets/images/HeroMockup.png';
import UpworkLogo from '@/assets/images/logos_upwork.png';
import TickIcon from '@/assets/images/icon_tick.png';
import ProjectIcon from '@/assets/images/project-outlined.png';

const stats = [
  { icon: UpworkLogo, alt: 'Upwork', label: 'Top rated Upwork\nAgency', isImg: true },
  { icon: TickIcon, alt: 'Success', label: '100% Job\nSuccess', isImg: false },
  { icon: ProjectIcon, alt: 'Projects', label: '40+ Projects\nCompleted', isImg: false },
];

export default function Hero() {
  return (
    <section className="section-outer pt-[100px] sm:pt-[120px] lg:pt-[135px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
      <div className="section-inner">

        <div className="
          w-full
          bg-white
          rounded-2xl lg:rounded-card
          border-b border-border-default
          shadow-card
          overflow-hidden
          flex flex-col lg:flex-row
          items-center
          justify-between
          lg:px-[24px] xl:px-[48px]
          lg:py-[20px] xl:py-[24px]
          lg:gap-[20px] xl:gap-[24px]
        ">

          <motion.div
            className="lg:hidden w-full flex items-center justify-center min-h-[200px] sm:min-h-[260px] overflow-hidden"
            animate={float}
          >
              <img
                src={HeroMockup.src}
              alt="App Mockup"
              className="w-full h-full object-cover object-center p-3 sm:p-4 lg:p-4"
            />
          </motion.div>

          <motion.div
            className="flex flex-col w-full lg:flex-1 lg:max-w-[557px] xl:max-w-[657px] items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-0 py-6 sm:py-8 lg:py-[32px] xl:py-[48px] gap-6 sm:gap-8 lg:gap-[40px] xl:gap-[52px]"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Heading + subheading */}
            <motion.div variants={staggerItem}>
              <h1 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[110%] tracking-[-1px] text-text-primary">
                Launch Your StartUp <br className="hidden sm:block" />
                MVP In{' '}
                <span className="text-brand-orange">60 Days!</span>
              </h1>
              <p className="font-body text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-text-primary mt-2 lg:mt-[12px] xl:mt-[16px] max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] mx-auto lg:mx-0">
                From Idea to{' '}
                <span className="text-brand-orange font-semibold">App Store</span>{' '}
                With a Dedicated Team.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="w-full sm:w-auto">
              <Button variant="primary" showArrow={false} className="w-full sm:w-auto justify-center">
                Book Free Call
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex items-start justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-[20px] xl:gap-[24px] flex-wrap sm:flex-nowrap w-full"
              variants={staggerContainer(0.12)}
            >
              {stats.map(({ icon, alt, label, isImg }) => (
                <motion.div
                  key={alt}
                  className="flex flex-col items-center gap-[4px] lg:gap-[6px] xl:gap-[8px] w-[70px] sm:w-[100px] lg:w-[140px] xl:w-[180px]"
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.4 } }}
                >
                  <div className="h-5 sm:h-6 lg:h-7 xl:h-8 flex items-center justify-center">
                    {isImg
                      ? <img src={icon.src} alt={alt} className="h-full w-auto object-contain" />
                      : <img src={icon.src} alt={alt} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 object-contain" />
                    }
                  </div>
                  <p className="font-body text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-text-body text-center leading-[140%] lg:leading-[150%] xl:leading-[170%]">
                    {label.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative flex-none self-stretch lg:w-[358px] xl:w-[458px]"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.img
              src={HeroMockup.src}
              alt="App Mockup"
              className="w-full h-full object-contain object-right"
              animate={float}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
