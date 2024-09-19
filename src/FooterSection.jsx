import React from 'react';

const FooterSection = ({ icon, title, content, children }) => {
  return (
    <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2.5 items-start max-w-full text-2xl font-bold text-white whitespace-nowrap">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[42px]"
        />
        <h4 className="self-start mt-3.5">{title}</h4>
      </div>
      <div className="mt-3 text-xl text-white max-md:max-w-full">{content}</div>
      {children}
    </div>
  );
};

export default FooterSection;
