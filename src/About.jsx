import React from 'react';
import AboutSection2 from './AboutSection2.jsx';
import HistorySection from './HistorySection.jsx';
import AwardsSection from './AwardsSection.jsx';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <>
   
       <div className=' bg-white'>
       <AboutSection2 />
       <HistorySection />
       <AwardsSection />
        </div>
       <Footer />
    </>
  )
}

export default About