import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io'; // Importing the icon
import HistorySection from './HistorySection.jsx';
import AwardsSection from './AwardsSection.jsx';
import about from '../src/images/about.jpg';

const AboutSection2 = () => {
  const bulletPoints = [
    '24/7 availability of general physicians on-site.',
    'Easy access to specialists through scheduled appointments.',
    'Personalized nursing care and regular health monitoring.',
    'Nutritious, well-balanced meals designed to suit individual dietary needs.'
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
            className="h-[500px] object-contain self-stretch mt-10 md:mt-0 w-[608px] max-md:w-full max-md:h-auto max-md:mb-5"
          />

          {/* Text Section */}
          <div className="flex flex-col self-stretch min-w-[240px] w-[503px] max-md:w-full">
            <div className="flex flex-col w-full">
              {/* About Us Heading */}
              <h2 className="text-5xl font-bold md:mt-20 text-zinc-800 max-md:text-4xl text-center max-md:text-left">
                About Us
              </h2>
              {/* Description */}
              <p className="mt-4 text-md leading-7 text-zinc-500 max-md:text-base max-md:leading-normal max-md:mt-2">
                DMCT Oldage Hospital, established in 2005 with just 4 beds, has grown into a 50-bed facility, offering compassionate care for bedridden patients and senior citizens in need of daily assistance. We provide 24/7 access to general physicians, specialist appointments, personalized nursing care, and nutritious meals tailored to individual needs. With open visiting hours around the clock, we prioritize both the medical and emotional well-being of our residents, creating a sanctuary where they can live with dignity, comfort, and respect.
              </p>
            </div>
            {/* Bullet Points */}
            <ul className="flex flex-col items-start text-base leading-loose text-zinc-500 mt-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <IoIosCheckmarkCircle className="text-blue-500 h-5 w-5" /> {/* Bullet point icon */}
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
