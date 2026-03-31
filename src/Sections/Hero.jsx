import React from 'react';
import Button from '../components/ui/Button';

// Image imports
import HeroMockup   from '../assets/images/HeroMockup.png';
import UpworkLogo   from '../assets/images/logos_upwork.png';
import TickIcon     from '../assets/images/icon_tick.png';
import ProjectIcon  from '../assets/images/project-outlined.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[815px] bg-bg-page flex justify-center items-start">

      <div className="
        absolute top-[155px]
        w-[1280px] h-[600px]
        bg-white
        rounded-card
        border-b border-border-default
        flex items-center justify-between
        px-[24px]
        py-[46px]
        gap-[24px]
        overflow-hidden
        shadow-card
      ">

        {/* ── LEFT BOX ── */}
{/* ── LEFT BOX ── */}
<div className="flex flex-col w-[657px] h-[528px] justify-center gap-[52px] flex-none">
          <h1 className="
            font-heading font-bold
            text-[64px]
            leading-[110%]
            tracking-[-1px]
            text-text-primary
            mb-[4px]
          ">
            Launch Your StartUp <br />
            MVP In <span className="text-brand-orange">60 Days!</span>
          </h1>

          <p className="w-[500px] font-body text-[24px] text-text-primary mb-[16px]">
            From Idea to <span className="text-brand-orange font-semibold">App Store</span> With a Dedicated Team.
          </p>

          <div className="flex-none mb-[32px]">
            <Button variant="primary" showArrow={false}>
              Book Free Call
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex items-start h-[100px] gap-[24px]">

            <div className="flex flex-col items-center w-[180px] gap-[8px]">
              <div className="h-8 flex items-center justify-center">
                <img src={UpworkLogo} alt="Upwork" className="h-full w-auto object-contain" />
              </div>
              <p className="font-body text-[18px] text-text-body text-center leading-[170%]">
                Top rated Upwork <br /> Agency
              </p>
            </div>

            <div className="flex flex-col items-center w-[180px] gap-[8px]">
              <div className="h-8 flex items-center justify-center">
                <img src={TickIcon} alt="Success" className="w-7 h-7 object-contain" />
              </div>
              <p className="font-body text-[18px] text-text-body text-center leading-[170%]">
                100% Job <br /> Success
              </p>
            </div>

            <div className="flex flex-col items-center w-[180px] gap-[8px]">
              <div className="h-8 flex items-center justify-center">
                <img src={ProjectIcon} alt="Projects" className="w-7 h-7 object-contain" />
              </div>
              <p className="font-body text-[18px] text-text-body text-center leading-[170%]">
                40+ Projects <br /> Completed
              </p>
            </div>

          </div>
        </div>

        {/* ── RIGHT BOX ── */}
        <div className="relative w-[458px] h-[600px] flex-none">
          <img
            src={HeroMockup}
            alt="App Mockup"
            className="w-full h-full object-contain object-right"
          />
        </div>

      </div>
    </section>
  );
}