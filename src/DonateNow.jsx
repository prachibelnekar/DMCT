import React from 'react';
import Footer from './Footer.jsx';
import DonationForm from './DonationForm.jsx';
import StuffDonationForm from './StuffDonationForm.jsx';

const DonateNow = () => {
  return (
    <>
    
    <div className="flex overflow-hidden flex-col bg-white">

       <DonationForm />
       <StuffDonationForm />
        <Footer/>
    </div>
    </>
  )
}

export default DonateNow