import React from 'react';
import { HiCreditCard } from "react-icons/hi2";
import { SiPaytm } from "react-icons/si";
import { PiBankFill } from "react-icons/pi";

const DonationForm = () => {
  return (
    <>
    <div className="flex justify-center items-center   ">
      {/* Donation Form */}
      <div className="flex flex-col justify-center items-center p-4 mx-5 w-full rounded-2xl border border-sky-500 max-w-[600px] max-md:px-2 max-md:max-w-full bg-white shadow-lg">
        <form className="w-full   ">
          <div className="flex flex-col gap-6 items-center p-4  max-md:max-w-full">
            {/* Payment Options */}
            <div className="flex flex-wrap gap-4 max-w-full justify-center">
              {/* Credit Card Option */}
              <div className="flex flex-col items-center border p-4 rounded-lg w-32 shadow-md">
                <HiCreditCard className="text-4xl" aria-label="Card payment" />
                <span className="mt-2">Card</span>
              </div>

              {/* Paytm Option */}
              <div className="flex flex-col items-center border p-4 rounded-lg w-32 shadow-md ">
                <SiPaytm className="text-4xl" aria-label="Pay" />
                <span className="mt-2">Pay</span>
              </div>

              {/* Bank Account Option */}
              <div className="flex flex-col items-center border p-4 rounded-lg w-32 shadow-md">
                <PiBankFill className="text-4xl" aria-label="Bank" />
                <span className="mt-2">Bank</span>
              </div>
            </div>

            {/* Card Information */}
            <div className="flex flex-col w-full space-y-4 max-w-[484px]">
              <InputField
                label="Card number"
                placeholder="1234 1234 1234 1234"
                id="cardNumber"
                iconSet={["visa-icon", "mastercard-icon", "amex-icon"]}
              />
              <div className="flex gap-4">
                <InputField label="Expiration" placeholder="MM / YY" id="expiration" />
                <InputField label="CVC" placeholder="CVC" id="cvc" />
              </div>
              <SelectField
                label="Country"
                id="country"
                options={["Select", "USA", "India", "Canada", "Istanbul", "Russia", "Ukraine"]}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

const InputField = ({ label, placeholder, id, iconSet }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id} className="text-base font-medium text-gray-800">
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
            <img key={idx} src={src} alt="" className="w-6 h-auto" />
          ))}
        </div>
      )}
    </div>
  </div>
);

const SelectField = ({ label, id, options }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id} className="text-base font-medium text-gray-800">
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
