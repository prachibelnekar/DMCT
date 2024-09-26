import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

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

  return (
    <section className="w-full max-md:max-w-full relative">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ml-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/299b073d3a80b7cf914e93ac856c94537155de616d20a38f3e45687bb67cbbd2?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
            alt="Hospital specialties"
            className="object-contain self-stretch my-auto w-full aspect-[1.36] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full relative mr-10">
          <div className="flex flex-col grow pt-12 pb-24 w-full font-bold text-white bg-sky-500 max-md:max-w-full relative">
            <h2 className="ml-7 text-4xl text-center">Our Specialties</h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-2xl mt-20  ml-16 mr-16 mtext-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full relative">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="relative z-10 cursor-pointer flex items-center"
                  onMouseEnter={() => setHoveredSpecialty(specialty)}
                  onMouseLeave={() => setHoveredSpecialty(null)}
                >
                  <IoIosArrowDropdown className="mr-2" /> {/* Add icon */}
                  {specialty}
                  {/* Tooltip on hover */}
                  {hoveredSpecialty === specialty && (
                    <div
                      className="absolute top-10 left-0 mt-2 p-4 bg-white border border-slate-950 rounded-lg text-black w-full shadow-lg"
                      style={{ zIndex: 9999 }} // Ensure it appears over everything
                    >
                      <h3 className="text-xl  mb-2">{specialty}</h3>
                      <p>{specialtyDetails[specialty]}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
