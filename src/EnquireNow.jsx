import React from 'react';

const EnquireNow = () => {
  return (
    <section className="flex flex-col px-20 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-start py-10 pr-20 pl-8 w-full text-5xl font-bold border-2 border-green-700 border-solid max-w-[1332px] text-zinc-800 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <h2 className="max-md:text-4xl">Enquire Now</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1139bef23d89e5e703af2d7563ee95c909ac700d2eaa233eed8a3bb7d65a982d?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
          alt="Enquire Now form or contact information"
          className="object-contain mt-5 max-w-full aspect-[1.51] w-[935px]"
        />
      </div>
    </section>
  );
};

export default EnquireNow;