import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/AboutUs/HeroAbout';
import OurStory from '../components/AboutUs/OurStory';
import OurTeam from '../components/AboutUs/OurTeam';
import LaunchStartup from '../components/AboutUs/LaunchStartup';


export default function About() {
    return (
    <div className="w-full bg-[#FFF5F2]">
            <Hero />
            <OurStory />
            <OurTeam />
            <LaunchStartup />
        </div>
    );
}