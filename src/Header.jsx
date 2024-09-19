import React from 'react';
import ContactInfo from './ContactInfo';

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-col bg-zinc-100">
      <div className="self-end mt-1.5 w-full max-w-[1480px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aad59e60e10582c202bb0d343f9de77a1b706fc670c91180d5e0bf9237c36e91?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Hospital logo" className="object-contain shrink-0 max-w-full aspect-[0.73] w-[121px] max-md:mt-6" />
                </div>
                <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center p-2.5 mt-3 text-5xl text-red-500 max-md:mt-9 max-md:text-4xl">
                    <div className="flex flex-col w-full max-md:text-4xl">
                      <div className="flex gap-2.5 justify-center items-center py-2.5 pr-0.5 pl-1 w-full max-md:text-4xl">
                        <h1 className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)] w-[390px] max-md:text-4xl">
                          DMCT Hospital & Oldage Home
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;