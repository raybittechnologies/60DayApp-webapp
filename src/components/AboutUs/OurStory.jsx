import React from 'react';



const OurStory = () => {
  return (
    <div className="section-outer bg-transparent">
      <div
        className="section-inner py-10 sm:py-[64px]"
        style={{ minHeight: '518px' }}
      >

        {/* Heading */}
        <h2
          className="font-heading font-bold text-[32px] sm:text-[44px] md:text-[56px] leading-tight tracking-tight mb-6 sm:mb-8"
          style={{ color: '#1A1A1A' }}
        >
          Our <span style={{ color: '#C43E1C' }}>Story</span>
        </h2>

        {/* Paragraphs */}
        <div className="space-y-5 sm:space-y-6 text-[#1A1A1A] text-[14px] sm:text-[15px] md:text-[20px] leading-[1.85]">

          <p>
            At <strong>60Day<span style={{ color: '#F05A28' }}>App</span></strong>, we transform
            the traditional development grind into a high-velocity sprint designed to get your startup
            live in exactly <strong>60 days</strong>. By pioneering a continuous design-to-code
            workflow, we've eliminated the &quot;lost in translation&quot; phase that usually kills
            momentum between design and development. Our dedicated team works directly with your{' '}
            <strong>Figma, Adobe XD</strong>, or <strong>Sketch</strong> files to generate
            production-ready <strong>React, Vue,</strong> or <strong>HTML</strong>, ensuring your
            vision is executed with 100% precision. This <strong>10x</strong> speed advantage allows
            you to bypass months of back-and-forth and head straight to the App Store with a scalable,
            professional-grade MVP. We provide the technical powerhouse needed to turn abstract ideas
            into functional businesses, giving you a fixed-timeline path to market that prioritizes
            rapid innovation and zero-friction execution.
          </p>

          <p>
            This accelerated timeline isn't just about speed; it's about providing founders with a
            competitive edge that traditional agencies simply can't match. By assigning a dedicated
            squad of product managers and developers to your project, we ensure that every iteration
            is purposeful and every line of code is optimized for future growth. You won't just
            receive a static shell, but a dynamic, production-ready environment built on clean
            architecture that allows for seamless updates long after the initial launch. This approach
            empowers you to test your core hypothesis with real users immediately, gathering the data
            necessary to pivot or scale without the heavy technical debt that usually plagues rapid
            prototyping. Whether you are aiming for a seed round or immediate market entry, we provide
            the reliable engineering foundation and strategic momentum required to transform a
            visionary concept into a robust, investor-ready digital product.
          </p>

        </div>
      </div>
    </div>
  );
};

export default OurStory;