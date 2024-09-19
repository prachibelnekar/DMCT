import React from 'react';

const AboutSection = () => {
  const aboutPoints = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Augue non malesuada placerat faucibus nam purus sem.",
    "Urna pulvinar porttitor dignissim congue pellentesque ac hac.",
    "Eu adipiscing massa ut proin mauris orci tincidunt ac in."
  ];

  return (
    <section className="flex flex-wrap gap-10 items-center self-center mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/17145be8177d7a288df959dc4ec567eda7c5d3aaa5d5e99cd8b6334b8d455a2e?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="About us illustration" className="object-contain self-stretch my-auto aspect-[0.93] min-w-[240px] w-[608px] max-md:max-w-full" />
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[503px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[503px]">
          <div className="flex flex-col w-full h-[142px]">
            <h2 className="text-5xl font-bold text-zinc-800 max-md:text-4xl">About Us</h2>
            <p className="mt-4 text-lg leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
            </p>
          </div>
          <div className="flex flex-col items-start mt-10 text-base leading-loose text-zinc-500 max-md:max-w-full">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex gap-2 items-center mt-3 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/480489884ad13b9b7dba30f7f0a8284b0b3ba15d65778a8bbf4cebb383756525?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                <div className="self-stretch my-auto">{point}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="gap-2 self-start px-6 py-4 mt-16 text-base font-bold text-white bg-blue-500 rounded-md max-md:px-5 max-md:mt-10">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;