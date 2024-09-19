import React from 'react';

const AdditionalInfo = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between items-start mt-28 max-w-full text-5xl font-bold text-black leading-[58px] w-[959px] max-md:mt-10 max-md:text-4xl max-md:leading-[54px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4428f89061d3096e4698080b7bd05815347899a74a0667aea2f9fb833fce2c51?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Additional information image" className="object-contain mt-4 w-full aspect-[0.61]" />
      <div className="flex flex-col max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d173e205029baa509ba1f7725ae10f17d04882b48a245da6c9419898773b7bd9?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Decorative element" className="object-contain max-w-full aspect-[2.17] w-[382px]" />
        <h3 className="mt-2.5 ml-9 max-md:ml-2.5 max-md:text-4xl max-md:leading-[54px]">
          about her and her qualification
        </h3>
      </div>
    </section>
  );
};

export default AdditionalInfo;