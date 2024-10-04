import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import Nurse_Patient from '../src/images/Nurse_Patient.jpg';

const SpecialtiesSection = () => {
  const specialties = [
    "Professional Staff",
    "Healthy Food",
    "Experienced Doctors",
    "24/7 Emergency Cares",
    "Clean Beds",
    "Good Hygiene",
    "Security Personnel",
    "Regular Health Checkup"
  ];

  const specialtyDetails = {
    "Professional Staff": "Our staff is highly trained and professional in every aspect.",
    "Healthy Food": "We provide nutritious and balanced meals for all patients.",
    "Experienced Doctors": "Our doctors are highly qualified and have extensive experience.",
    "24/7 Emergency Cares": "We offer emergency care services around the clock.",
    "Clean Beds": "Our beds and rooms are regularly sanitized for your health and safety.",
    "Good Hygiene": "We maintain strict hygiene protocols to ensure a clean environment.",
    "Security Personnel": "Our hospital is secured with well-trained security personnel.",
    "Regular Health Checkup": "We offer regular health checkups for preventive care."
  };

  const [hoveredSpecialty, setHoveredSpecialty] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-md:max-w-full relative mt-28 select-none">
      <div className="flex max-md:flex-col">
        {/* Image Section */}
        <div className={`flex flex-col w-6/12 max-md:w-full max-md:ml-0 ml-16 ${isVisible ? 'animate-slideInLeft' : ''}`}>
          <img
            src={Nurse_Patient}
            alt="Nurse and Patient"
            className="w-full h-[500px] max-md:h-auto max-md:mt-5 mt-10 object-cover"
          />
        </div>

        {/* Specialties Section */}
        <div className={`flex flex-col w-6/12 max-md:w-full max-md:ml-0 ml-5 relative mr-10 ${isVisible ? 'animate-slideInRight' : ''}`}>
          <div className="flex flex-col grow pt-12 pb-24 w-full font-bold text-white bg-sky-500 max-md:max-w-full relative">
            <h2 className="ml-7 text-4xl text-center max-md:text-3xl">Our Specialties</h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-2xl mt-20 ml-16 mr-16 max-md:grid-cols-1 max-md:gap-y-8 max-md:px-5 max-md:mt-10 relative">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer flex items-center"
                  onMouseEnter={() => setHoveredSpecialty(specialty)}
                  onMouseLeave={() => setHoveredSpecialty(null)}
                >
                  <IoIosArrowDropdown className="mr-2" /> {/* Add icon */}
                  {specialty}
                  {/* Tooltip on hover */}
                  {hoveredSpecialty === specialty && (
                    <div
                      className="absolute top-10 left-0 mt-2 p-4 bg-white border border-slate-950 rounded-lg text-black w-full shadow-lg max-md:left-auto max-md:right-0 max-md:h-auto max-md:top-8 max-md:bottom-auto max-md:text-base"
                      style={{ zIndex: 9999 }} // Ensure it appears above everything
                    >
                      <h3 className="text-xl mb-2 max-md:text-xl">{specialty}</h3>
                      <p className="">{specialtyDetails[specialty]}</p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesSection;
