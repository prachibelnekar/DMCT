import React from 'react';

function Logo() {
  return (
    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
      <div className="grow max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/afef561ff86058a643065b0231c4f24405d49c7e1c914f6ee5ac7b5626741e83?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
              alt="DMCT Hospital & Oldage Home Logo"
              className="object-contain grow shrink-0 max-w-full aspect-[0.9] w-[172px] max-md:mt-2"
            />
          </div>
          <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch p-2.5 my-auto text-5xl text-red-500 max-md:mt-6 max-md:text-4xl">
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
  );
}

export default Logo;