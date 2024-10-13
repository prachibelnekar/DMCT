import React from 'react';
import ServiceCard from './ServiceCard';
import { FaUserMd, FaUtensils, FaHospitalUser, FaHandsHelping } from 'react-icons/fa';
import { BiHandicap } from "react-icons/bi";
import ScrollToTopButton from './ScrollToTopButton';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaUserMd className="w-16 h-16 text-sky-500 rounded-lg shadow-lg" />, // Icon for Resident Care
      title: "Medical Care",
      description: "Our trained staff is dedicated to delivering essential medical care, including medication reminders and regular monitoring of blood sugar and blood pressure. We also facilitate consultations as needed, with a doctor available on call for any urgent medical assistance."
    },
    {
      icon: <FaUtensils className="w-16 h-16 text-sky-500 rounded-lg shadow-lg" />, // Icon for Elderly Nutrition
      title: "Elderly Nutrition",
      description: "We prioritize the health and well-being of our elderly residents by providing tailored, nutritious meals that meet their individual dietary needs. Our dedicated staff ensures that every meal not only nourishes but also delights, enhancing their quality of life.."
    },
    {
      icon: <BiHandicap className="w-16 h-16 text-sky-500 rounded-lg shadow-lg" />, // Icon for Skilled Nursing
      title: "Special Needs Care",
      description: "We prioritize specialized care for individuals with unique needs, providing tailored support to enhance their quality of life. Our dedicated team is committed to ensuring comfort, dignity, and emotional well-being for every resident."
    },
    {
      icon: <FaHandsHelping className="w-16 h-16 text-sky-500 rounded-lg shadow-lg" />, // Icon for Caring Staff
      title: "Homebound Care",
      description: "We provide compassionate homebound care, ensuring that elderly patients receive personalized support and medical attention in the comfort of their own homes. Our dedicated team of professionals is committed to enhancing their quality of life ."
    }
  ];

  return (
    <>
      <div className="flex flex-col self-center mt-16 w-full max-w-[1348px] px-4 max-md:mt-10 max-md:px-6 select-none">
        <div className="flex flex-col items-center max-md:text-center">
          <h2 className="text-5xl font-bold text-zinc-800 max-md:text-3xl">Our Services</h2>
          <div className="flex flex-wrap gap-6 justify-center mt-16 max-md:mt-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ServicesSection;
