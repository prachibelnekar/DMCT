import React from 'react';

const ContactInfo2 = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex gap-3 self-stretch my-auto text-base text-black max-md:mt-10">
        <img loading="lazy" src={icon} alt={title} className="object-contain shrink-0 bg-blue-400 aspect-[0.96] h-[79px] w-[79px]" />
        <div className="my-auto">
          <span className="text-xl">{title}</span>
          <br />
          <span className="text-xl">{content}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo2;