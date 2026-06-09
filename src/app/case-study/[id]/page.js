"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import HeroSection from "@/components/case-study/HeroSection";
import SidebarMenu from "@/components/case-study/SidebarMenu";
import ClientHeader from "@/components/case-study/ClientHeader";
import { OverviewTab, GoalsTab, ChallengesTab, SolutionsTab, SpecialFeaturesTab, ImpactTab, ConclusionTab } from "@/components/case-study/TabsContent";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderActiveTab = () => {
    switch(activeTab) { 
      case 'Overview': return <OverviewTab id={id} />;
      case 'Goals': return <GoalsTab id={id} />;
      case 'Challenges': return <ChallengesTab id={id} />;
      case 'Solutions': return <SolutionsTab id={id} />;
      case 'Special Features': return <SpecialFeaturesTab id={id} />;
      case 'Impact': return <ImpactTab id={id} />;
      case 'Conclusion': return <ConclusionTab id={id} />;
      default: return <div className="text-gray-500 mt-8">Content mapping for {activeTab} is currently being developed.</div>;
    }
  };

  return (
    <div className="w-full relative pb-0 sm:pb-[40px] bg-peach pt-[100px] sm:pt-[120px] lg:pt-[135px]">
      <HeroSection id={id} />

      <div className="section-outer mt-[32px] md:mt-[64px]">
        <div className="section-inner flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-[24px] md:gap-[64px]">
        <SidebarMenu activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-col w-full pb-[10px] min-h-[400px]">
          <ClientHeader id={id} />
          <AnimatePresence mode="wait">
            {renderActiveTab()}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </div>
  );
}
