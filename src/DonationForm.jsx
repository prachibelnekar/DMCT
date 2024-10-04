import React from 'react';
import { HiCreditCard } from "react-icons/hi2";
import { SiPaytm } from "react-icons/si";
import { PiBankFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const DonationForm = () => {
  const handleRazorpayPayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay API key
      amount: 50000, // Donation amount in smallest currency unit (e.g., 50000 paise = INR 500)
      currency: 'INR',
      name: 'Donation',
      description: 'Donate for a Cause',
      image: 'https://your-logo-url.com', // Optional: Add your logo URL
      handler: function (response) {
        // Handle the payment success
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Donor Name', // Prefilled name (optional)
        email: 'donor@example.com', // Prefilled email (optional)
        contact: '9999999999', // Prefilled phone number (optional)
      },
      theme: {
        color: '#3399cc', // Customize the theme color
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
  };

  const navigate = useNavigate();
  const handle = () => {
    navigate('/DonationForm');
  }

  return (
    <div className='select-none'>
      <div className="flex items-center mt-10 ml-20 sm:ml-10 space-x-5">
        <button className="px-4 py-2 w-24 text-blue-500 border shadow-lg h-12 border-blue-500 rounded-lg">
          Money
        </button>
        <button className="px-4 py-2 text-white w-24 bg-blue-600 h-12 shadow-lg rounded-lg" onClick={handle}>
          Stuff
        </button>
      </div>

      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col justify-center items-center p-6 mx-5 w-full rounded-2xl border border-gray-200 max-w-[600px] bg-white shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Donate Securely</h3>
          <form className="w-full space-y-6">
            <div className="flex flex-wrap gap-4 justify-center max-w-full">
              {/* Payment Options */}
              <PaymentOption icon={<HiCreditCard className="text-3xl text-sky-500" />} label="Card" />
              <PaymentOption icon={<SiPaytm className="text-3xl text-sky-500" />} label="Paytm" />
              <PaymentOption icon={<PiBankFill className="text-3xl text-sky-500" />} label="Bank" />
            </div>

            {/* Card Information */}
            <div className="flex flex-col space-y-4 w-full">
              <InputField
                label="Card Number"
                placeholder="1234 1234 1234 1234"
                id="cardNumber"
                iconSet={[
                  "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
                  "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
                ]}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <InputField label="Expiration" placeholder="MM / YY" id="expiration" />
                <InputField label="CVC" placeholder="CVC" id="cvc" />
              </div>
              <SelectField
                label="Country"
                id="country"
                options={["Select", "USA", "India", "Canada", "UK", "Australia"]}
              />
            </div>

            <button
              type="button"
              className="w-full py-3 mt-4 text-white bg-sky-500 rounded-lg hover:bg-sky-600"
              onClick={handleRazorpayPayment}
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const PaymentOption = ({ icon, label }) => (
  <div className="flex flex-col items-center border p-4 rounded-lg w-32 shadow-md transition-transform transform hover:scale-105">
    {icon}
    <span className="mt-2 font-medium text-gray-700">{label}</span>
  </div>
);

const InputField = ({ label, placeholder, id, iconSet }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id} className="text-sm font-medium text-gray-800">
      {label}
    </label>
    <div className="relative mt-1">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
      />
      {iconSet && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
          {iconSet.map((src, idx) => (
            <img key={idx} src={src} alt="card-icon" className="w-6 h-auto" />
          ))}
        </div>
      )}
    </div>
  </div>
);

const SelectField = ({ label, id, options }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id} className="text-sm font-medium text-gray-800">
      {label}
    </label>
    <select
      id={id}
      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default DonationForm;
