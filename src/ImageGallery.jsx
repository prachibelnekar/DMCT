import React from 'react';

const ImageGallery = () => {
  return (
    <div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8050ba73051d36e5ffa9447cbccfb740b36594a541bd3a09915ea123df3295d?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Gallery image 1" className="object-contain mt-40 max-w-full aspect-[3.98] w-[893px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/457fcaa7e33775cc01b04872d8fce7c3e40023971ac05095037b297990d47f28?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Gallery image 2" className="object-contain mt-28 max-w-full aspect-[4.17] w-[839px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f55c73b9e05032c75f9ff3fbacd128268a7e72b6f2f1330a97c58c50a7a3a2?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Decorative element" className="object-contain self-end mt-64 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10" />
    </div>
  );
};

export default ImageGallery;