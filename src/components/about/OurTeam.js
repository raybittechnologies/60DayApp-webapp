"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerScale, viewport } from '@/utils/motionVariants';
import CeoImg from '@/assets/images/Ceo.jpg';
import CtoImg from '@/assets/images/CTO.jpg';
import DesignerImg from '@/assets/images/Designer.jpg';
import FullStackDevImg from '@/assets/images/FullStackDev.jpg';
import UiUxImg from '@/assets/images/UIUX.jpg';
import BackendImg from '@/assets/images/backendDev.jpg';

const teamMembers = [
    { name: 'Syed Eshan Qadri', role: 'Co-Founder & CEO', image: CeoImg, bgColor: '#E8956D' },
    { name: 'Aamir Bashir', role: 'Co-Founder & CTO', image: CtoImg, bgColor: '#B89FCC' },
    { name: 'Basit Bashir', role: 'UI UX Designer', image: DesignerImg, bgColor: '#C49A6C' },
    { name: 'Zahid Hussain', role: 'Sr. Full Stack Developer', image: FullStackDevImg, bgColor: '#C8B89A' },
    { name: 'Bisma Mushtaq', role: 'UI UX Designer', image: UiUxImg, bgColor: '#88AACC' },
    { name: 'Jasia Hassan', role: 'Backend Developer', image: BackendImg, bgColor: '#9ABCB0' },
];

const OurTeam = () => {
    return (
        <div className="section-outer bg-transparent py-8 sm:py-10">
            <motion.div
                className="section-inner bg-white flex flex-col w-full max-w-[1280px] mx-auto rounded-[24px] p-[16px] gap-[65px] lg:min-h-[921px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
            >
                <motion.h2
                    className="font-heading font-bold text-[28px] sm:text-[40px] md:text-[52px] leading-tight tracking-tight text-[#1A1A1A]"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    Our <span style={{ color: '#C43E1C' }}>Team</span>
                </motion.h2>

                <div className="w-full">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] sm:gap-[65px]"
                        variants={staggerContainer(0.12, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >

                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center group"
                                variants={staggerScale}
                                whileHover={{ y: -8, transition: { duration: 0.4, ease: 'easeOut' } }}
                            >

                                <div
                                    className="mb-[16px] flex-shrink-0 relative w-full max-w-[260px] h-[260px]"
                                >
                                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                                        <defs>
                                            <clipPath id={`arch-${index}`} clipPathUnits="objectBoundingBox">
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
                                            src={member.image.src}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <h3 className="font-heading font-bold text-[28px] sm:text-[20px] text-[#1A1A1A] mb-[3px] leading-snug">
                                    {member.name}
                                </h3>
                                <p className="font-body font-[400] text-[18px] sm:text-[15px]" style={{ color: '#F05A28' }}>
                                    {member.role}
                                </p>

                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default OurTeam;
