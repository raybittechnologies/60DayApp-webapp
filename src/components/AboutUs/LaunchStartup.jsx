


import React from 'react';
import Button from '../ui/Button';

const LaunchStartup = () => {
  return (
    <div className="section-outer py-8 sm:py-10 bg-transparent">
      <div className="section-inner">
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            minHeight: '284px',
            borderRadius: '16px',
            border: '1px solid #FFCAB2',
            padding: '28px 20px',
            gap: '32px',
            background: 'linear-gradient(135deg, #FFE8DC 0%, #FFF0E8 40%, #FFD4BC 100%)',
          }}
        >
          <div
            className="absolute -right-20 -top-20 w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,180,130,0.30) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -left-20 -bottom-20 w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,200,160,0.20) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center gap-2">
            <h2 className="font-heading font-bold text-[22px] sm:text-[32px] md:text-[40px] text-[#1A1A1A] tracking-tight leading-tight">
              Ready to Launch Your{' '}
              <span style={{ color: '#F05A28' }}>Startup ?</span>
            </h2>
            <p className="font-body text-[13px] sm:text-[15px] font-medium text-[#555555]">
              Book a free 15-minute MVP scoping call.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="ghost" className="w-full sm:w-auto justify-center">
              Get MVP Estimate
            </Button>
            <Button variant="primary" showArrow={true} className="w-full sm:w-auto justify-center">
              Start Your MVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchStartup;