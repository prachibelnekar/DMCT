import React, { useRef } from 'react';
import DonationForm from './DonationForm';
import StuffDonationForm from './StuffDonationForm';

const DonationButtons = () => {
  const donationFormRef = useRef(DonationForm);
  const stuffDonationFormRef = useRef(StuffDonationForm);

  const scrollToForm = (formRef) => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className='mt-10 justify-center'>
      {/* Buttons */}
      <div className="  ml-20 mt-10  space-x-5">
            {/* Primary Button */}
         

            {/* Secondary Button */}
            <button className="px-4 py-2 w-24 text-blue-500 border shadow-lg h-12 border-blue-500 rounded-lg">
              Money
            </button>
            <button className="px-4 py-2 text-white w-24 bg-blue-400 h-12  hover:bg-blue-600 shadow-lg rounded-lg ">
               Stuff
            </button>
        </div>
      <div className="flex justify-center w-full  text-xl">
        <button
          onClick={() => scrollToForm(donationFormRef)}
          className="px-6 py-2.5 text-black bg-white rounded-md border border-black hover:bg-blue-600 transition-colors"
        >
          Money
        </button>
        <button
          onClick={() => scrollToForm(stuffDonationFormRef)}
          className="px-10 py-2.5 text-black bg-white rounded-md border border-black hover:bg-blue-600 transition-colors"
        >
          Stuff
        </button>
      </div>

      {/* Donation Form Section */}
      <div ref={donationFormRef} className="mt-8 p-4 " id="donationForm">
        <DonationForm />
      </div>

      {/* Stuff Donation Form Section */}
      <div ref={stuffDonationFormRef} className="mt-8 p-4 " id="stuffDonationForm">
        <StuffDonationForm />
      </div>
    </div>
    </>
  );
};

export default DonationButtons;
