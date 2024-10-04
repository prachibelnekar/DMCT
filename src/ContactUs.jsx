import React from 'react';
import ContactDetails from './ContactDetails';
import EnquireNow from './EnquireNow.jsx';
import Footer from './Footer.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';

const ContactUs = () => {
  return (
    <>
    <div className="flex overflow-hidden flex-col  bg-zinc-100  select-none">
    
       
       <EnquireNow />
       <ContactDetails />
       <ScrollToTopButton/>
      <Footer />
     
    </div>
    </>
  )
}

export default ContactUs