import React from 'react';

const SpecialtiesSection = () => {
  const specialties = [
    "Professional Staff",
    "Healthy Food",
    "Experience Doctors",
    "24/7 Emergency Cares",
    "Clean Beds",
    "Good Hygiene",
    "Security Personnel",
    "Regular Health Checkup"
  ];

  return (
    <section className="w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/299b073d3a80b7cf914e93ac856c94537155de616d20a38f3e45687bb67cbbd2?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Hospital specialties" className="object-contain self-stretch my-auto w-full aspect-[1.36] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pt-12 pb-24 w-full font-bold text-white bg-sky-500 max-md:max-w-full">
            <h2 className="ml-7 text-4xl">Our Specialties</h2>
            <div className="flex flex-wrap justify-between px-11 mt-24 text-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
              {specialties.map((specialty, index) => (
                <div key={index} className="z-10 mt-24 max-md:mt-10">{specialty}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;