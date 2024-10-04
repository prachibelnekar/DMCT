import React from 'react';
import Home from '../src/images/Home.jpg';

const AboutSection = () => {
  const aboutPoints = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Augue non malesuada placerat faucibus nam purus sem.",
    "Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
    "Eu adipiscing massa ut proin mauris orci tincidunt ac in."
  ];

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center mt-16 px-4 max-md:gap-6 max-md:mt-6 select-none">
      {/* Image Section */}
      <img
        src={Home}
        alt="About Us"
        className="object-cover self-stretch my-auto w-[608px] h-auto max-md:w-full max-md:h-auto"
      />
      
      {/* Text Section */}
      <div className="flex flex-col w-[503px] max-md:w-full">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-zinc-800 max-md:text-3xl">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-7 text-zinc-500 max-md:text-base">
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
          </p>
        </div>
        
        {/* Points Section */}
        <div className="flex flex-col items-start mt-8 text-base leading-loose text-zinc-500 max-md:mt-6">
          {aboutPoints.map((point, index) => (
            <div key={index} className="flex gap-3 items-center mt-3 max-md:gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/480489884ad13b9b7dba30f7f0a8284b0b3ba15d65778a8bbf4cebb383756525?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
                alt="Bullet Point"
                className="w-6 h-6 object-contain max-md:w-5 max-md:h-5"
              />
              <div>{point}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
