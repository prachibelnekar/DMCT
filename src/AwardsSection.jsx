import React from 'react';
import ScrollToTopButton from './ScrollToTopButton.jsx';
import award1 from '../src/images/Award_1.jpg';
import award2 from '../src/images/Award_2.jpg';
import award3 from '../src/images/Award_3.jpg';
import award4 from '../src/images/Award_4.jpg';

const AwardsSection = () => {
  return (
    <>
      <div className="mt-36 ml-24 max-md:mt-10 max-md:ml-2.5 mb-20 select-none">
        <h2 className="text-5xl font-bold leading-none text-black text-center max-md:text-4xl">
          AWARDS
        </h2>
        <div className="self-end mt-10 w-full max-w-[1338px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-5">
            {/* Award 1 */}
            <div className="flex flex-col w-[25%] h-[300px] max-md:w-full max-md:h-[200px] transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <img
                loading="lazy"
                src={award1}
                alt="Award 1"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Award 2 */}
            <div className="flex flex-col w-[25%] h-[300px] max-md:w-full max-md:h-[200px] transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <img
                loading="lazy"
                src={award2}
                alt="Award 2"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Award 3 */}
            <div className="flex flex-col w-[25%] h-[300px] max-md:w-full max-md:h-[200px] transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <img
                loading="lazy"
                src={award3}
                alt="Award 3"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Award 4 */}
            <div className="flex flex-col w-[25%] h-[300px] max-md:w-full max-md:h-[200px] transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <img
                loading="lazy"
                src={award4}
                alt="Award 4"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton className="ml-10" />
    </>
  );
};

export default AwardsSection;
