import React from 'react';
import { HiCreditCard } from "react-icons/hi2";
import { SiPaytm } from "react-icons/si";
import { PiBankFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const DonationForm = () => {

  const navigate = useNavigate();
  const handle = () => {
    navigate('/DonationForm');
  }

  const handleGPay = () => {
    // Replace 'gpay_url' with your actual Google Pay link or intent URL
    window.open('https://gpay.app.goo.gl/pay-url', '_blank');
  }

  return (
    <div className='select-none'>
      <div className="flex items-center justify-center space-x-5 mt-10">
        <button className="px-4 py-2 w-24 text-blue-500 border shadow-lg h-12 border-blue-500 rounded-lg">
          Money
        </button>
        <button className="px-4 py-2 text-white w-24 bg-blue-600 h-12 shadow-lg rounded-lg" onClick={handle}>
          Material
        </button>
      </div>

      {/* Scanner image section */}
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="mb-4">Scan the QR code to donate:</p>
        <img
          src="path_to_your_scanner_image.jpg"
          alt="QR Scanner"
          className="w-48 h-48 border border-gray-300 shadow-lg rounded-lg"
        />
      </div>

      {/* Google Pay button */}
      <div className="flex items-center justify-center mt-5">
        <button
          className="px-4 py-2 text-white bg-sky-500 shadow-lg rounded-lg"
          onClick={handleGPay}
        >
          Pay with GPay
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default DonationForm;
