import React from 'react';
import Hero from "@/components/about/HeroAbout";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import LaunchStartup from "@/components/about/LaunchStartup";

export default function About() {
    return (
        <div className="w-full bg-transparent">
            <Hero />
            <OurStory />
            <OurTeam />
            <LaunchStartup />
        </div>
    );
}
