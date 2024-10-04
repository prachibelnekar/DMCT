import React from 'react';
import HistorySection from './HistorySection.jsx';
import AwardsSection from './AwardsSection.jsx';
import about from '../src/images/about.jpg';

const AboutSection2 = () => {
  const bulletPoints = [
    'Lorem ipsum dolor sit amet consectetur.',
    'Augue non malesuada placerat faucibus nam purus sem.',
    'Urna pulvinar porttitor dignissim congue pellentesque ac hac.',
    'Eu adipiscing massa ut proin mauris orci tincidunt ac in.'
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white select-none">
      {/* About Us Section */}
      <section className="flex flex-col px-20 w-full max-md:px-5">
        <div className="flex flex-wrap gap-10 items-center max-md:flex-col max-md:max-w-full">
          {/* Image Section */}
          <img
            src={about}
            alt="nurse"
            className="h-[500px] object-contain self-stretch  mt-10 md:mt-0  w-[608px] max-md:w-full max-md:h-auto max-md:mb-5"
          />

          {/* Text Section */}
          <div className="flex flex-col self-stretch min-w-[240px] w-[503px] max-md:w-full">
            <div className="flex flex-col w-full">
              {/* About Us Heading */}
              <h2 className="text-5xl font-bold md:mt-20 text-zinc-800 max-md:text-4xl text-center max-md:text-left">
                About Us
              </h2>
              {/* Description */}
              <p className="mt-4 text-lg leading-7 text-zinc-500 max-md:text-base max-md:leading-normal max-md:mt-2">
                Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
              </p>
            </div>
            {/* Bullet Points */}
            <ul className="flex flex-col items-start text-base leading-loose text-zinc-500 mt-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <span className="self-stretch my-auto">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection2;
