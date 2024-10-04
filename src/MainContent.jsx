import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import OurTeam from './OurTeam.jsx';
import OurGallery from './OurGallery.jsx';
import Navigation from './Navigation.jsx';
import ContactUs from './ContactUs.jsx';
import DonateNow from './DonateNow.jsx';
import Our_Gallery2 from './Our_Gallery2.jsx'
import StuffDonationForm from './StuffDonationForm.jsx';
import DonationForm from './DonationForm.jsx';


const MainContent = () => {
  return (
    <Router>
        {/* <Header/> */}
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/our_team" element={<OurTeam/>} />
          <Route path="/our_gallery2" element={<Our_Gallery2/>} />
          <Route path="/contact_us" element={<ContactUs/>} />
          <Route path="/donate_now" element={<DonationForm/>} />
          <Route path="/our_gallery2/admin/*" element={<OurGallery />}/>
          <Route path='/DonationForm' element={<StuffDonationForm/>}/>
          <Route path='/DonationPayment' element={<DonationForm/>}/>
        </Routes>
        
      </Router>
  );
};

export default MainContent;

//About
// import React from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import AboutSection from './AboutSection';
// import HistorySection from './HistorySection';
// import AwardsSection from './AwardsSection';
// import Footer from './Footer';

// const MainContent = () => {
//   return (
//     <div className="flex overflow-hidden flex-col bg-white">
//       <Header />
//       <Navigation />
//       <main>
//         <AboutSection />
//         <HistorySection />
//         <AwardsSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainContent;

//Our Team
// import React from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import AboutSection from './AboutSection';
// import AdditionalInfo from './AdditionalInfo';
// import ImageGallery from './ImageGallery';
// import Footer from './Footer';

// const MainLayout = () => {
//   return (
//     <div className="flex overflow-hidden flex-col bg-white">
//       <Header />
//       <Navigation />
//       <main>
//         <AboutSection />
//         <AdditionalInfo />
//         <ImageGallery />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

//Our Gallery
// import React from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import WorkSection from './WorkSection';
// import Footer from './Footer';

// function MainContent() {
//   return (
//     <main className="flex overflow-hidden flex-col bg-white">
//       <Header />
//       <Navigation />
//       <WorkSection />
//       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/501e9b46bba1eaadf772d408c6874dd7f5cbc7e63359721f479d8a2226d4d9dc?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Hospital Facility" className="object-contain mt-14 w-full aspect-[1.94] max-md:mt-10 max-md:max-w-full" />
//       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8134dc08ac54291ce062e22fc0e3937f727deffbc8d0931bc1041c08787b6ba?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Hospital Services" className="object-contain self-center w-full aspect-[2.04] max-w-[1504px] max-md:max-w-full" />
//       <a href="#top" aria-label="Scroll to top">
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b616506102a7720a0663482c099578abc01ab3bcf202b5483eaef863b9cf6a48?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce" alt="Scroll to top" className="object-contain self-end mr-11 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mr-2.5" />
//       </a>
//       <Footer />
//     </main>
//   );
// }

// export default MainContent;


//Contact Us
// import React from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import EnquireNow from './EnquireNow';
// import ContactDetails from './ContactDetails';
// import Footer from './Footer';

// const MainContent = () => {
//   return (
//     <main className="flex overflow-hidden flex-col bg-white">
//       <Header />
//       <Navigation />
//       <EnquireNow />
//       <ContactDetails />
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba12fd810949669bfb656d1c84079789576d41b7e1c419e1fb5bfe979bd4320b?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
//         alt="Scroll to top button"
//         className="object-contain self-end mt-72 aspect-square rounded-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] w-[60px] max-md:mt-10"
//       />
//       <Footer />
//     </main>
//   );
// };

// Donate Now
// import React from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import DonationForm from './DonationForm';
// import StuffDonationForm from './StuffDonationForm';
// import Footer from './Footer';

// const App = () => {
//   return (
//     <div className="flex overflow-hidden flex-col bg-white">
//       <Header />
//       <Navigation />
//       <DonationForm />
//       <StuffDonationForm />
//       <Footer />
//     </div>
//   );
// };

// export default App;
// export default MainContent;