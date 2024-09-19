import React from 'react';

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 z-50"
      aria-label="Scroll to top"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bdfa92161e4380a88393f8b611dc04f772c5886dbe06c529c7eb4e38a7d66a5?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
        alt=""
        className="object-contain self-end mt-96 mr-16 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10 max-md:mr-2.5"
      />
    </button>
  );
}

export default ScrollToTop;