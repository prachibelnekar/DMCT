import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-10 py-9 bg-white rounded-md min-w-[240px] shadow-[-6px_-12px_40px_rgba(105,127,175,0.25)] w-[608px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <img loading="lazy" src={icon} alt="" className="object-contain w-12 rounded-xl aspect-square" />
        <div className="flex flex-col mt-6 max-w-full w-[504px]">
          <h3 className="text-xl font-semibold leading-none text-zinc-900">{title}</h3>
          <p className="mt-4 text-lg leading-7 text-zinc-500 max-md:max-w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;