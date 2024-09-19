import React from 'react';

const AboutSection3 = () => {
  return (
    <section className="flex flex-col items-center self-end mt-28 mr-16 w-full max-w-[1285px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="self-start w-full max-w-[1219px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e729c500e8c7c1e1605064e206488bf1ddf2924d3e2416dbc3add4c625f9ea4b?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Doctor's portrait" className="object-contain grow w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-11 text-5xl font-bold text-black leading-[58px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51330801eb6476b2ab3eb9a8f10ff5595af421342d76f4ed05cdfb3ead49488f?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Decorative element" className="object-contain max-w-full aspect-[2.18] w-[375px]" />
              <h2 className="mt-11 ml-7 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                ABOUT HIM AND HIS QUALIFICATIONS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;