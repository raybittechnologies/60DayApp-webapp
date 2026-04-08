import React from 'react';
import MaleImg from '../../assets/images/UIUX.jpg';

const teamMembers = [
    { name: 'Syed Eshan Qadri', role: 'Co-Founder & CEO', image: MaleImg, bgColor: '#E8956D' },
    { name: 'Aamir Bashir', role: 'Co-Founder & CTO', image: MaleImg, bgColor: '#B89FCC' },
    { name: 'Basit Bashir', role: 'UI UX Designer', image: MaleImg, bgColor: '#C49A6C' },
    { name: 'Zahid Hussain', role: 'Sr. Full Stack Developer', image: MaleImg, bgColor: '#C8B89A' },
    { name: 'Bisma Mushtaq', role: 'UI UX Designer', image: MaleImg, bgColor: '#88AACC' },
    { name: 'Jasia Hassan', role: 'Backend Developer', image: MaleImg, bgColor: '#9ABCB0' },
];

const OurTeam = () => {
    return (
        <div className="section-outer bg-[#FFF5F2] py-8 sm:py-10">
            <div className="section-inner bg-white" style={{ borderRadius: '24px', padding: '16px' }}>
                <div className="px-6 sm:px-10 pt-8 pb-10">

                    <h2 className="font-heading font-bold text-[28px] sm:text-[40px] md:text-[52px] leading-tight tracking-tight text-[#1A1A1A]">
                        Our <span style={{ color: '#C43E1C' }}>Team</span>
                    </h2>

                    <div style={{ marginTop: 'clamp(32px, 5vw, 65px)' }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-20 gap-y-8 sm:gap-y-12 md:gap-y-16">

                            {teamMembers.map((member, index) => (
                                <div key={index} className="flex flex-col items-start group">

                                    <div
                                        className="mb-[16px] flex-shrink-0 relative"
                                        style={{
                                            width: '100%',
                                            /* CHANGED: Switched from fixed 280px to a clamp for responsiveness, 
                                               allowing it to grow much taller (up to 420px) */
                                            height: 'clamp(280px, 35vw, 420px)'
                                        }}
                                    >
                                        <svg width="0" height="0" style={{ position: 'absolute' }}>
                                            <defs>
                                                <clipPath id={`arch-${index}`} clipPathUnits="objectBoundingBox">
                                                    /* CHANGED: The starting 'y' value (0.35) cut off too much of the head.
                                                    Changed 0.35 to 0.15 to start the arch much higher up.
                                                    Changed Q0.5,0.05 to Q0.5,-0.10 to make the curve gentler. */
                                                    <path d="M0,0.15 Q0.5,-0.10 1,0.15 L1,1 L0,1 Z" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <div
                                            className="w-full h-full overflow-hidden"
                                            style={{
                                                backgroundColor: member.bgColor,
                                                clipPath: `url(#arch-${index})`,
                                            }}
                                        >
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                /* CHANGED: Added transition classes here directly instead of using style */
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-heading font-bold text-[17px] sm:text-[20px] text-[#1A1A1A] mb-[3px] leading-snug">
                                        {member.name}
                                    </h3>
                                    <p className="font-body font-medium text-[13px] sm:text-[15px]" style={{ color: '#F05A28' }}>
                                        {member.role}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurTeam;