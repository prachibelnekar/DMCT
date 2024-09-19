import React from 'react';
import ContactDetails from './ContactDetails';
import EnquireNow from './EnquireNow.jsx';
import Footer from './Footer.jsx';

const ContactUs = () => {
  return (
    <>
    <div className="flex overflow-hidden flex-col bg-white">
    
       
       <EnquireNow />
       <ContactDetails />
       <img
         loading="lazy"
         src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba12fd810949669bfb656d1c84079789576d41b7e1c419e1fb5bfe979bd4320b?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
         alt="Scroll to top button"
         className="object-contain self-end mt-72 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10"
       />
      <Footer />
     
    </div>
    </>
  )
}

export default ContactUs