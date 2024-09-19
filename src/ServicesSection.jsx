import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/af8d4383d8b14dc0051efa7efe4c8732107e5eba352344dcfb53f1a7e1377042?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Resident Care",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/401e3e4ccb8261da69cbc44eb992d304ed08851584a60496f7034eb939dce5a6?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Elderly Nutrition",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/956244689b783ef683739f19abaedc199a50a06e99fec7bd0e4dd1586d4e42b9?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Skilled Nursing",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1e0a421aac6206d7650248ec64b3475d32c48bece77cfef0de9a53d5ecf5b7e?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Caring Staff",
      description: "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac."
    }
  ];

  return (
    <section className="flex flex-col self-center mt-16 ml-6 w-full max-w-[1348px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center self-start max-md:max-w-full">
        <h2 className="text-5xl font-bold text-zinc-800 max-md:text-4xl">Our Services</h2>
        <div className="flex flex-wrap gap-6 items-start mt-16 max-md:mt-10 max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <button className="object-contain self-end mt-12 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bdfa92161e4380a88393f8b611dc04f772c5886dbe06c529c7eb4e38a7d66a5?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Scroll to top" className="w-full h-full" />
      </button>
    </section>
  );
};

export default ServicesSection;