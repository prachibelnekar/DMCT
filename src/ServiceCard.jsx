import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative w-[300px] max-md:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="flex justify-center mb-4">
        {icon} {/* Display the icon directly */}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
