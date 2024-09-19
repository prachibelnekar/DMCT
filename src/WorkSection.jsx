import React from 'react';

function WorkSection() {
  const workItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7cd69aff8699297b71dbeba34a033e44f9d15f7c71181a11012e6821a7ada63?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Private Rooms",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/972879496b6cd71c5690a98759cfd0431f492a2b8cfff4c9f4ec3d0ec82e661f?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce",
      title: "Semi- Private Rooms",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <section className="flex flex-col self-center mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl">
        some Work done{" "}
      </h2>
      <div className="flex flex-wrap gap-6 items-start mt-10 max-md:max-w-full">
        {workItems.map((item, index) => (
          <div key={index} className="flex flex-col min-w-[240px] w-[608px] max-md:max-w-full">
            <img loading="lazy" src={item.image} alt={item.title} className="object-contain max-w-full aspect-[1.9] w-[608px]" />
            <div className="flex flex-col mt-6 max-w-full w-[575px]">
              <div className="flex flex-col w-full">
                <h3 className="text-2xl font-semibold text-green-900">{item.title}</h3>
                <p className="mt-5 text-sm leading-5 text-zinc-600 max-md:max-w-full">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkSection;