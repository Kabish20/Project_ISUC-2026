import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyISUC from './components/WhyISUC';
import ShowcaseLogo from './components/ShowcaseLogo';
import HowItWorks from './components/HowItWorks';
import WhoShouldAttend from './components/WhoShouldAttend';
import ExhibitPage from './components/ExhibitPage';
import RegisterBuyer from './components/RegisterBuyer';
import TourSchedule from './components/TourSchedule';
import Venue from './components/Venue';
import OrganizedBy from './components/OrganizedBy';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-secondary-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <WhyISUC />
      <ShowcaseLogo />
      <HowItWorks />
      <WhoShouldAttend />
      <ExhibitPage />
      <RegisterBuyer />
      <TourSchedule />
      <Venue />
      <OrganizedBy />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
