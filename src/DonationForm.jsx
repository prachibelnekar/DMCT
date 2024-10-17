import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import QR from '../src/images/QR.jpeg';

const DonationForm = () => {

  const navigate = useNavigate();
  const handle = () => {
    navigate('/DonationForm');
  }

  const handleGPay = () => {
    window.open('upi://pay?pa=gpay-11193330128@okbizaxis&mc=5399&pn=Google%20Pay%20Merchant&oobe=fos123&qrst=stn&tr=1193330128&cu=INR', '_blank');
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

      {/* Donation section with bank details and QR code */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-8">

        {/* Bank details section */}
        <div className="md:w-1/2 w-full border p-5 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
          <textarea
            className="w-full h-48 p-2 border rounded-lg border-gray-300"
            readOnly
            value={`Bank Name: Bank of Baroda
Account Name: Doctor Mitra Charitable Trust
Account Number: 27690200000209
IFSC Code: BARB0TISGAO
Branch: Tisgaon Naka ,Kalyan(E)`}
          />
        </div>

        {/* QR code and Google Pay button section */}
        <div className="flex flex-col items-center">
          <p className="mb-4">Scan the QR code to donate:</p>
          <img
            src={QR}
            alt="QR Scanner"
            className="w-48 h-48 border border-gray-300 shadow-lg rounded-lg"
          />

          <div className="flex items-center justify-center mt-5">
            <button
              className="px-4 py-2 text-white bg-sky-500 shadow-lg rounded-lg"
              onClick={handleGPay}
            >
              Pay with GPay
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonationForm;
