import React from 'react';
import Home from '../src/images/Home.jpg';


const AboutSection = () => {
  const aboutPoints = [
    "Founded in 2005 with just 4 beds, DMCT Oldage Hospital has grown into a 50-bed facility, known for compassionate and comprehensive care.",
    "Specializes in caring for bedridden patients and senior citizens who need assistance with daily activities, ensuring dignity and comfort.",
    "Dedicated staff provides personalized nursing care and prepares nutritious meals tailored to individual health needs.",
    "Easy access to specialists by appointment, ensuring expert care for specific medical needs.",
    "In-house nursing team ensures timely assistance and continuous health monitoring.",
    "Visiting hours are open 24 hours a day to provide emotional support and maintain family connections.",
    "The mission is to offer a sanctuary for the elderly, where they are treated with care, respect, and compassion.",
  ];

  return (
    < div className=' mx-auto xl:mx-0 2xl:mx-0'>
      <h2 className="text-5xl mt-16 font-bold text-center text-zinc-800 max-md:text-3xl">
        About Us
      </h2>
      <div className="flex flex-wrap gap-10 items-center justify-center mt-2 px-4 max-md:gap-6 max-md:mt-6 select-none">
        {/* Image Section */}
        <img
          src={Home}
          alt="About Us"
          className="bg-cover shadow-2xl shadow-sky-100 p-5  bg-white  self-stretch my-auto w-[608px] h-auto max-md:w-full max-md:h-auto"
        />

        {/* Text Section */}
        <div className="flex flex-col w-[620px] max-md:w-full">
          {/* Points Section */}
          <div className="flex flex-col items-start  text-base leading-loose text-zinc-500 max-md:mt-6">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex gap-2 items-center max-md:gap-2">
                {/* Bullet Point Icon */}
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/480489884ad13b9b7dba30f7f0a8284b0b3ba15d65778a8bbf4cebb383756525?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
                alt="Bullet Point"
                className="w-6 h-6 object-contain max-md:w-5 max-md:h-5"
              /> {/* Set icon size uniformly */}
                <div className="mt-4 ">{point}</div> {/* Ensures consistent alignment */}

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
