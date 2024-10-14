import React, { useState } from 'react';
import award1 from '../src/images/Award_1.jpg';
import award2 from '../src/images/Award_2.jpg';
import award3 from '../src/images/Award_3.jpg';
import award4 from '../src/images/Award_4.jpg';
import award5 from '../src/images/Award_5.jpg';
import award6 from '../src/images/Award_6.jpg';
import award7 from '../src/images/Award_7.jpg';
import award8 from '../src/images/Award_8.jpg';

const awards = [award1, award2, award3, award4, award5, award6, award7, award8];

const AwardsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % awards.length);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="mt-10 ml-24  max-md:mt-10 max-md:ml-2.5 mb-20 select-none bg-white pt-20">
        <h2 className="text-5xl font-bold leading-none text-black text-center max-md:text-4xl">
          AWARDS
        </h2>
        <div className="self-end mt-10 w-full max-w-[1338px] max-md:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 max-md:gap-5">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col w-[300px] mb-10 h-[300px] max-md:w-full max-md:h-[200px] transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden "
                onDoubleClick={() => openModal(index)}
              >
                <img
                  loading="lazy"
                  src={award}
                  alt={`Award ${index + 1}`}
                  className=" w-full h-full cursor-pointer bg-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying full-size image */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div className="relative" onClick={stopPropagation}>
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={awards[currentImageIndex]}
              alt={`Award ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button
                onClick={goToPrevious}
                className="text-white text-3xl bg-gray-600 p-2 rounded-l"
              >
                &#10094;
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button
                onClick={goToNext}
                className="text-white text-3xl bg-gray-600 p-2 rounded-r"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AwardsSection;
