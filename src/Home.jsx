import React from 'react';
import AboutSection from './AboutSection';
import SpecialtiesSection from './SpecialtiesSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import LandingPage from './LandingPage';


const Home = () => {
  return (
    <>
    <main className="flex overflow-hidden flex-col bg-zinc-100">
      
      <LandingPage></LandingPage>
      <AboutSection />
      <SpecialtiesSection />
      <ServicesSection />
      
      <Footer />
    </main>
    </>
  )
}

export default Home