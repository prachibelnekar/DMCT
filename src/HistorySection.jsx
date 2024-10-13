import React from 'react';

const HistorySection = () => {
  const historyEvents = [
    { year: '1990', title: 'New Beginning', description: 'Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.' },
    { year: '2000', title: 'Residence Expand', description: 'Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.' },
    { year: '2010', title: 'Home Care Service Started', description: 'Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.' },
    { year: '2020', title: 'Country Wide Coverage', description: 'Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.' }
  ];

  return (
    <section className="flex flex-col mt-10 ml-5 px-20  max-w-[1240px] bg-white text-zinc-800 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">History of the DMCT</h2>
      <div className="flex flex-col mt-16 w-full text-xl font-medium leading-none max-md:mt-10 max-md:max-w-full">
        {historyEvents.map((event, index) => (
          <div key={index} className="flex flex-wrap gap-6 mt-5">
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex gap-5 justify-between">
                <div>{event.year}</div>
                <div className="flex shrink-0 my-auto w-3 h-3 bg-black rounded-full fill-[linear-gradient(135deg,#028A0F_0%,#90D296_100%)] opacity-[var(--sds-size-stroke-border)]" />
              </div>
              <div className="shrink-0 self-end mt-4 w-0.5 border-2 border-solid border-zinc-800 h-[120px] max-md:mr-1.5" />
            </div>
            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
              <h3 className="self-start">{event.title}</h3>
              <p className="mt-5 text-lg leading-7 text-neutral-500 max-md:max-w-full">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;