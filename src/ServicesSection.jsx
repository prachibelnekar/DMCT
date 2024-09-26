import React from 'react';
import ServiceCard from './ServiceCard';
import { FaUserMd, FaUtensils, FaHospitalUser, FaHandsHelping } from 'react-icons/fa';
import ScrollToTopButton from './ScrollToTopButton';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaUserMd className="w-16 h-16 bg-sky-500 rounded-lg shadow-md" />, // Icon for Resident Care
      title: "Resident Care",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    },
    {
      icon: <FaUtensils className="w-16 h-16" />, // Icon for Elderly Nutrition
      title: "Elderly Nutrition",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    },
    {
      icon: <FaHospitalUser className="w-16 h-16" />, // Icon for Skilled Nursing
      title: "Skilled Nursing",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    },
    {
      icon: <FaHandsHelping className="w-16 h-16" />, // Icon for Caring Staff
      title: "Caring Staff",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    }
  ];

  return (
    <>
      <div className="flex flex-col self-center mt-16 ml-6  w-full max-w-[1348px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center self-start max-md:max-w-full">
          <h2 className="text-5xl font-bold text-zinc-800 max-md:text-4xl">Our Services</h2>
          <div className="flex flex-wrap gap-6 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

      </div>
      <ScrollToTopButton />
    </>
  );
};

export default ServicesSection;