import React, { useState } from 'react';

const EnquireNow = () => {
  // State for form fields and error messages
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobile: '',
    query: '',
  });

  // Validate inputs
  const validateForm = () => {
    const newErrors = { fullName: '', email: '', mobile: '', query: '' };
    let isValid = true;

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    // Validate mobile number
    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }

    // Validate query
    if (!query.trim()) {
      newErrors.query = 'Your query is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission (e.g., send to an API)
      alert('Form submitted successfully!');
      // Reset form fields
      setFullName('');
      setEmail('');
      setMobile('');
      setQuery('');
      setErrors({ fullName: '', email: '', mobile: '', query: '' });
    }
  };

  return (
    <div className="flex flex-col px-10 mt-8 max-md:px-5 max-md:mt-10 md:w-[900px] mx-auto">
      <div className="flex flex-col py-10 pr-8 pl-8 w-full max-w-[1332px] bg-white rounded-lg shadow-lg text-zinc-800 mx-auto">
        <h2 className="text-3xl font-bold mb-4 max-md:text-4xl text-center">Enquire Now</h2>

        {/* Enquiry Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="fullName" className="text-lg font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className={`mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500 ${errors.fullName ? 'border-red-500' : ''}`}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-lg font-medium text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500 ${errors.email ? 'border-red-500' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
              className={`mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500 ${errors.mobile ? 'border-red-500' : ''}`}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* Query */}
          <div className="flex flex-col w-full">
            <label htmlFor="query" className="text-lg font-medium text-gray-800">
              Your Query
            </label>
            <textarea
              id="query"
              placeholder="Enter your query"
              className={`mt-2 p-3 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500 ${errors.query ? 'border-red-500' : ''}`}
              rows="5"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            {errors.query && <p className="text-red-500 text-sm">{errors.query}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-start py-3 px-6 mt-6 font-bold text-white uppercase bg-sky-600 rounded-lg transition-colors hover:bg-sky-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireNow;
