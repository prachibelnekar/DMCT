import React from 'react';

const EnquireNow = () => {
  return (
    <section className="flex flex-col px-20 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-start py-10 pr-20 pl-8 w-full max-w-[1332px] bg-white rounded-lg shadow-lg text-zinc-800 max-md:px-5 max-md:max-w-full">
        <h2 className="text-5xl font-bold mb-8 max-md:text-4xl">Enquire Now</h2>

        {/* Enquiry Form */}
        <form className="w-full flex flex-col gap-6">
          {/* Full Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="fullName" className="text-lg font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-lg font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col w-full">
            <label htmlFor="mobile" className="text-lg font-medium text-gray-800">
              Mobile No
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>

          {/* Query */}
          <div className="flex flex-col w-full">
            <label htmlFor="query" className="text-lg font-medium text-gray-800">
              Your Query
            </label>
            <textarea
              id="query"
              placeholder="Enter your query"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-start py-3 px-6 mt-6 font-bold text-white uppercase bg-sky-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquireNow;
