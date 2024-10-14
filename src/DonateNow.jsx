import React from 'react';
import Footer from './Footer.jsx';
import DonationButtons from './DonationButtons.jsx';

const DonateNow = () => {
  return (
    <>
    
    <div className="flex overflow-hidden flex-col bg-white select-none">

       <DonationButtons/>
        <Footer/>
    </div>
    </>
  )
}

export default DonateNow