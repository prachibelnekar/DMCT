import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center justify-center object-contain self-start mt-12 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10 bg-blue-500 text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:bg-blue-600" // Added hover effects
      style={{
        animation: 'glow 1.5s infinite', // Glow animation
      }}
    >
      <FaChevronUp className="w-5 h-5" /> {/* Icon inside the button */}
    </button>
  );
};

export default ScrollToTopButton;
