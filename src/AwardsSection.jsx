import React from 'react';

const AwardsSection = () => {
  return (
    <section className="mt-36 ml-24 max-md:mt-10 max-md:ml-2.5">
      <h2 className="text-5xl font-bold leading-none text-black max-md:text-4xl">AWARDS</h2>
      <div className="self-end mt-20 w-full max-w-[1338px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3b2d2dea2e458836c17debd5d1144fe9d94390313eb04c9a2e4a50991026793?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Award 1" className="object-contain w-full aspect-[1.23] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a65773a72022ac730052eed33c091784ca6c5db85b9faba1cb8926fead844d2?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Award 2" className="object-contain w-full aspect-[1.23] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 items-start max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a65773a72022ac730052eed33c091784ca6c5db85b9faba1cb8926fead844d2?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Award 3" className="object-contain grow shrink-0 self-start aspect-[1.23] basis-0 w-fit" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8155beda8f3b7ee081cad5834c731bb90a13cf2a3c52970d6099301c102f5d?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 self-end mt-60 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;