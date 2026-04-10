
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { fadeUp, slideRight, staggerContainer, staggerItem, float, viewport } from '../../utils/motionVariants';

import HeroMockup from '../../assets/images/HeroMockup.png';
import UpworkLogo from '../../assets/images/logos_upwork.png';
import TickIcon from '../../assets/images/icon_tick.png';
import ProjectIcon from '../../assets/images/project-outlined.png';

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
          lg:px-[48px] xl:px-[24px]
          lg:py-[24px]
          lg:gap-[24px]
        ">

          <motion.div
            className="lg:hidden w-full flex items-center justify-center min-h-[260px] sm:min-h-[320px] overflow-hidden"
            animate={float}
          >
            <img
              src={HeroMockup}
              alt="App Mockup"
              className="w-full h-full object-cover object-center p-4 sm:p-6"
            />
          </motion.div>

          <motion.div
            className="flex flex-col w-full lg:flex-1 lg:max-w-[657px] items-center lg:items-start text-center lg:text-left px-5 sm:px-8 lg:px-0 py-8 sm:py-10 lg:py-[48px] gap-8 sm:gap-10 lg:gap-[52px]"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Heading + subheading */}
            <motion.div variants={staggerItem}>
              <h1 className="font-heading font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-[-1px] text-text-primary">
                Launch Your StartUp <br className="hidden sm:block" />
                MVP In{' '}
                <span className="text-brand-orange">60 Days!</span>
              </h1>
              <p className="font-body text-[15px] sm:text-[18px] lg:text-[24px] text-text-primary mt-3 lg:mt-[16px] max-w-[480px] mx-auto lg:mx-0">
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
              className="flex items-start justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-[24px] flex-wrap sm:flex-nowrap w-full"
              variants={staggerContainer(0.12)}
            >
              {stats.map(({ icon, alt, label, isImg }) => (
                <motion.div
                  key={alt}
                  className="flex flex-col items-center gap-[6px] lg:gap-[8px] w-[80px] sm:w-[120px] lg:w-[180px]"
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.4 } }}
                >
                  <div className="h-6 sm:h-7 lg:h-8 flex items-center justify-center">
                    {isImg
                      ? <img src={icon} alt={alt} className="h-full w-auto object-contain" />
                      : <img src={icon} alt={alt} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 object-contain" />
                    }
                  </div>
                  <p className="font-body text-[11px] sm:text-[14px] lg:text-[18px] text-text-body text-center leading-[150%] lg:leading-[170%]">
                    {label.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative flex-none self-stretch lg:w-[458px]"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.img
              src={HeroMockup}
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