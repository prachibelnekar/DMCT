import React from 'react';

const ContactDetails = () => {
  return (
    <section className="self-center mt-24 ml-4 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 items-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/803c6c6d165002d72d893062996ed0b2cd0dbd736f38f0e8e953518a717aaafd?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
              alt="DMCT Oldage Hospital building or staff"
              className="object-contain self-stretch my-auto aspect-[0.93] min-w-[240px] w-[608px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-24 pr-8 pl-20 text-3xl text-black border-2 border-green-700 border-solid max-md:px-5 max-md:pb-24 max-md:mt-6 max-md:max-w-full">
            <h3 className="self-start text-4xl font-bold max-md:max-w-full">
              DMCT Oldage Hospital
            </h3>
            <address className="mt-16 max-md:mt-10 max-md:max-w-full not-italic">
              New Rachana Park Shopping Centre, Near Gun Gopal Temple Ground, Near Chakkinaka Chowk, Chakkinaka, Kalyan(E). Dist.-Thane - 421306
            </address>
            <p className="self-start mt-16 ml-5 max-md:mt-10 max-md:ml-2.5">
              Call us: +91-7738530370 / +91-9833155731 / +91-7977211807 / +91-7021651887 /
            </p>
            <p className="self-center mt-16 max-md:mt-10 max-md:max-w-full">
              Mail us: drravindrajadhav2@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;