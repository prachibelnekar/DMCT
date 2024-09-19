import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import AboutSection from './AboutSection';
import SpecialtiesSection from './SpecialtiesSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';


const Home = () => {
  return (
    <>
    <main className="flex overflow-hidden flex-col bg-zinc-100">
      
      
      <AboutSection />
      <SpecialtiesSection />
      <ServicesSection />
      <Footer />
    </main>
    </>
  )
}

export default Home