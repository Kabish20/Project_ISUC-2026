import React, { useState, useEffect } from 'react';
import {
  Header,
  Footer,
  HeroSection,
  WhySection,
  PartnerShowcaseSection,
  HowItWorksSection,
  WhoShouldAttendSection,
  ExhibitSection,
  RegisterBuyerSection,
  TourScheduleSection,
  VenueSection,
  OrganizedBySection,
  FinalCTASection,
} from '@/components';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExhibitModalOpen, setIsExhibitModalOpen] = useState(false);
  const [isBuyerModalOpen, setIsBuyerModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-secondary-900 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header
        onOpenExhibit={() => setIsExhibitModalOpen(true)}
        onOpenBuyer={() => setIsBuyerModalOpen(true)}
      />
      <main>
        <HeroSection
          onOpenExhibit={() => setIsExhibitModalOpen(true)}
          onOpenBuyer={() => setIsBuyerModalOpen(true)}
        />
        <WhySection />
        <PartnerShowcaseSection />
        <HowItWorksSection />
        <WhoShouldAttendSection />
        <ExhibitSection
          isModalOpen={isExhibitModalOpen}
          setIsModalOpen={setIsExhibitModalOpen}
        />
        <RegisterBuyerSection
          isModalOpen={isBuyerModalOpen}
          setIsModalOpen={setIsBuyerModalOpen}
        />
        <TourScheduleSection />
        <VenueSection />
        <OrganizedBySection />
        <FinalCTASection
          onOpenExhibit={() => setIsExhibitModalOpen(true)}
          onOpenBuyer={() => setIsBuyerModalOpen(true)}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
