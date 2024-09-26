import React from 'react';

const StuffDonationForm = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-10 bg-white rounded-2xl border border-blue-400 w-[500px] max-md:px-5 max-md:w-full">
        <form className="w-full max-w-md space-y-6">
          {/* Contact Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-700 font-semibold">Your Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder='Your Name'
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm text-gray-700 font-semibold">Address</label>
            <textarea 
              id="address" 
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none" 
            />
          </div>

          {/* City and Postcode */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="city" className="text-sm text-gray-700 font-semibold">City</label>
              <input 
                type="text" 
                id="city" 
                placeholder='e.g.Mumbai'
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="postcode" className="text-sm text-gray-700 font-semibold">Pin Code</label>
              <input 
                type="number" 
                id="pincode" 
                placeholder='400231'
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="Phone" className="text-sm text-gray-700 font-semibold">Contact No.</label>
            <input 
              type="tel" 
              id="Phone" 
              placeholder='1234567899'
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-700 font-semibold">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder='abc@gmail.com'
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          {/* Idea */}
          <div className="flex flex-col">
            <label htmlFor="idea" className="text-sm text-gray-700 font-semibold">What would you like to donate?</label>
            <textarea 
              id="idea" 
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 resize-none" 
            />
          </div>

          {/* File Uploads */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-dashed border-2 border-gray-300 p-1 rounded-lg">
              <label htmlFor="file1" className="text-gray-600 cursor-pointer flex items-center">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583" 
                  alt="upload icon" 
                  className="w-6 h-4 mr-2"
                />
                Upload Top View
              </label>
              <input type="file" id="file1" className="sr-only" />
            </div>

            <div className="flex items-center justify-between border-dashed border-2 border-gray-300 p-1 rounded-lg">
              <label htmlFor="file2" className="text-gray-600 cursor-pointer flex items-center">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583" 
                  alt="upload icon" 
                  className="w-6 h-4 mr-2"
                />
                Upload Front View
              </label>
              <input type="file" id="file2" className="sr-only" />
            </div>
            <div className="flex items-center justify-between border-dashed border-2 border-gray-300 p-1 rounded-lg">
              <label htmlFor="file2" className="text-gray-600 cursor-pointer flex items-center">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583" 
                  alt="upload icon" 
                  className="w-6 h-4 mr-2"
                />
                Upload Side View
              </label>
              <input type="file" id="file2" className="sr-only" />
            </div>

            <div className="text-sm text-gray-600">
              Attach file(s). File size should not exceed 10MB.
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
        
        
      </div>
    </div>
  );
};

export default StuffDonationForm;
