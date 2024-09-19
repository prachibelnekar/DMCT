import React from 'react';

const StuffDonationForm = () => {
  return (
    <section className="flex flex-col justify-center items-center p-20 mt-20 max-w-full text-sm tracking-wide leading-relaxed bg-white rounded-2xl border border-blue-400 border-solid w-[884px] max-md:px-5 max-md:mt-10">
      <form className="flex flex-col max-w-full w-[565px]">
        <div className="flex flex-col w-full text-base min-h-[421px] max-md:mr-2.5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col pt-3 w-full h-[55px] text-neutral-400">
            <div className="flex flex-col justify-center py-1 w-full">
              <div className="flex flex-col justify-center items-center max-md:max-w-full">
                <label htmlFor="contactName" className="max-md:max-w-full">Contact name</label>
                <input type="text" id="contactName" className="flex mt-3 w-full bg-black min-h-[1px]" />
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col pt-3 mt-2 w-full whitespace-nowrap h-[54px] text-neutral-400">
            <div className="flex flex-col justify-center py-0.5 w-full">
              <div className="flex flex-col justify-center items-center max-md:max-w-full">
                <label htmlFor="street" className="max-md:max-w-full">Street</label>
                <input type="text" id="street" className="flex mt-3 w-full bg-black min-h-[1px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-start mt-2 whitespace-nowrap h-[46px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-col pt-3 min-w-[240px] text-neutral-400 w-[357px]">
              <div className="flex flex-col pb-7 max-w-full w-[357px]">
                <div className="flex flex-col justify-center items-center">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" className="flex mt-3 w-full bg-black min-h-[1px]" />
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col pt-3 text-neutral-400 w-[167px]">
              <div className="flex flex-col pb-7 max-w-full w-[167px]">
                <div className="flex flex-col justify-center items-center">
                  <label htmlFor="postcode">Postcode</label>
                  <input type="text" id="postcode" className="flex mt-3 w-full bg-black min-h-[1px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col pt-3 mt-2 w-full h-14 text-neutral-400">
            <div className="flex flex-col pb-1.5 w-full">
              <div className="flex flex-col justify-center items-center max-md:max-w-full">
                <label htmlFor="contactPhone" className="max-md:max-w-full">Contact Phone</label>
                <input type="tel" id="contactPhone" className="flex mt-3 w-full bg-black min-h-[1px]" />
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col pt-3 mt-2 w-full whitespace-nowrap h-[55px] text-neutral-400">
            <div className="flex flex-col justify-center py-1 w-full">
              <div className="flex flex-col justify-center items-center max-md:max-w-full">
                <label htmlFor="email" className="max-md:max-w-full">E-mail</label>
                <input type="email" id="email" className="flex mt-3 w-full bg-black min-h-[1px]" />
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col pt-3 mt-2 w-full h-[62px] text-neutral-400">
            <div className="flex flex-col pb-3 w-full">
              <div className="flex flex-col justify-center items-center max-md:max-w-full">
                <label htmlFor="idea" className="max-md:max-w-full">Let's talk about your idea</label>
                <textarea id="idea" className="flex mt-3 w-full bg-black min-h-[1px]"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-center px-4 py-10 mt-2.5 w-full border border-dashed border-neutral-400 text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
          <label htmlFor="file1" className="flex gap-6 items-center cursor-pointer">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Upload Additional file</span>
            <input type="file" id="file1" className="sr-only" />
          </label>
        </div>
        <div className="flex overflow-hidden z-10 flex-col justify-center items-center px-4 py-10 mt-0 w-full border border-dashed border-neutral-400 text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
          <label htmlFor="file2" className="flex gap-6 items-center cursor-pointer">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Upload Additional file</span>
            <input type="file" id="file2" className="sr-only" />
          </label>
        </div>
        <p className="self-start mt-2.5 text-sm text-neutral-400 max-md:max-w-full">
          Attach file. File size of your documents should not exceed 10MB
        </p>
        <div className="flex overflow-hidden flex-col justify-center items-center px-4 py-10 mt-20 w-full border border-dashed border-neutral-400 text-neutral-400 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <label htmlFor="file3" className="flex gap-6 items-center cursor-pointer">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Upload Additional file</span>
            <input type="file" id="file3" className="sr-only" />
          </label>
        </div>
        <p className="self-start mt-2.5 text-sm text-neutral-400 max-md:max-w-full">
          Attach file. File size of your documents should not exceed 10MB
        </p>
        <button type="submit" className="overflow-hidden py-4 mt-14 ml-4 font-bold text-center text-white uppercase whitespace-nowrap bg-sky-500 rounded-xl max-md:mt-10 max-md:max-w-full">
          Submit
        </button>
      </form>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/854bfe99e798f22790ca25312702111326ab742f05fc641a8c75793a492f5c12?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Chat icon" className="object-contain self-end mt-2.5 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px]" />
    </section>
  );
};

export default StuffDonationForm;