import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Component Imports
import HeroSection from '../components/CaseStudy/HeroSection';
import SidebarMenu from '../components/CaseStudy/SidebarMenu';
import ClientHeader from '../components/CaseStudy/ClientHeader';
import { OverviewTab, GoalsTab, ChallengesTab, SolutionsTab, SpecialFeaturesTab, ImpactTab, ConclusionTab } from '../components/CaseStudy/TabsContent';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderActiveTab = () => {
    switch(activeTab) {
      case 'Overview': return <OverviewTab />;
      case 'Goals': return <GoalsTab />;
      case 'Challenges': return <ChallengesTab />;
      case 'Solutions': return <SolutionsTab />;
      case 'Special Features': return <SpecialFeaturesTab />;
      case 'Impact': return <ImpactTab />;
      case 'Conclusion': return <ConclusionTab />;
      default: return <div className="text-gray-500 mt-8">Content mapping for {activeTab} is currently being developed.</div>;
    }
  };

  return (
    <div className="w-full relative pb-[96px] bg-[#FFF5F2] pt-[100px] sm:pt-[120px] md:pt-[140px]">
      <HeroSection />

      <div className="mx-auto w-[92%] max-w-[1240px] mt-[32px] md:mt-[64px] flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-[24px] md:gap-[64px]">
        <SidebarMenu activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-col w-full pb-[40px] min-h-[400px]">
          <ClientHeader />
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
}
