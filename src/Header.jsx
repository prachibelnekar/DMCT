import React from 'react';
import logo from '../src/images/logo.png';
import ContactInfo from './ContactInfo';

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-col bg-zinc-100 h-32">
      <div className="self-end mt-1.5 w-full max-w-[1480px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col ">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                <img src={logo} alt="logo" className=" h-28 w-28 rounded-2xl" />                </div>
                <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center p-2.5 mt-3  text-5xl text-red-500 max-md:mt-9 max-md:text-4xl">
                    <div className="flex flex-col w-full max-md:text-4xl">
                      <div className="flex gap-2.5 justify-center items-center py-2.5 pr-0.5 pl-1 w-full max-md:text-4xl">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;