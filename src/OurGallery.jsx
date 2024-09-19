import React from 'react';
import WorkSection from './WorkSection.jsx';
import Footer from './Footer.jsx';

const OurGallery = () => {
  return (
    <>
    
    <div className="flex overflow-hidden flex-col bg-white">
       <WorkSection />
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Hospital Facility" className="object-contain mt-14 w-full aspect-[1.94] max-md:mt-10 max-md:max-w-full" />
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Hospital Services" className="object-contain self-center w-full aspect-[2.04] max-w-[1504px] max-md:max-w-full" />
       <a href="#top" aria-label="Scroll to top">
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b616506102a7720a0663482c099578abc01ab3bcf202b5483eaef863b9cf6a48?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Scroll to top" className="object-contain self-end mr-11 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mr-2.5" />
       </a>
       <Footer />
    </div>
    </>
    
       
  )
}

export default OurGallery