import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";

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
          <div className="flex flex-col grow py-24 pr-8 pl-20 text-3xl text-black border-2 border-sky-500 border-solid max-md:px-5 max-md:pb-24 max-md:mt-6 max-md:max-w-full">
            <h3 className="self-start text-4xl font-bold max-md:max-w-full">
              DMCT Oldage Hospital
            </h3>
            <div className='text-black text-xl   flex flex-1 gap-0'>
              <IoLocationOutline className='h-20 w-20 mt-5 '/>
              <NavLink
                exact
                className="   hover:text-blue-400 mx-2 pl-1 mt-10"
                activeClassName="menu_active"
                aria-current="page"
                to="https://www.google.com/maps/dir//64FH%2B38X+Gun+Gopal+Mandir+Road,+Circle,+near+Chakkinaka,+New+Rachana+Park,+Society,+Kalyan,+Maharashtra+421306/@19.2227072,73.0459667,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be794554741f145:0xf727d8b1757fe178!2m2!1d73.1283684!2d19.2227256?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
              >
                New Rachana Park Shopping Centre, Near Gun Gopal Temple Ground, Near Chakkinaka Chowk, Chakkinaka, Kalyan(E). Dist.-Thane - 421306
              </NavLink>
            </div>
            {/* <address className="mt-16 max-md:mt-10 max-md:max-w-full not-italic">
              
            </address> */}

            <div className="text-black text-xl mx-2 flex flex-1 gap-3  mt-10 text">
            <MdOutlineAddIcCall className=' mt-1 h-10 w-10 ' />
              <p className='hover:text-blue-400'>+91-7738530370 / +91-9833155731 / +91-7977211807 / +91-7021651887</p> 
            </div>
            <div className="text-black text-xl mx-2 flex flex-1 gap-3  mt-2 ">
            <CiMail className=' mt-1 h-5 w-5 ' />
              <a className='hover:text-blue-400' href="mailto:drravindrajadhav2@gmail.com">
                drravindrajadhav2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;