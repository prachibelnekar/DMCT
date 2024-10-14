import React from 'react';
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import ScrollToTopButton from './ScrollToTopButton'; // Import the ScrollToTopButton

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebook />, alt: "Facebook", href: "https://www.facebook.com/dmct.delhi/?locale=fi_FI" },
    { icon: <BsYoutube />, alt: "YouTube", href: "https://www.youtube.com/@DRMITRACHANNEL" },
    { icon: <FaInstagram />, alt: "Instagram", href: "https://www.instagram.com/dr.ravindra_jadhav?igsh=MTkza2JyZDFkNHd2MA==" },
  ];

  return (
    <>
    <div className="flex justify-end mt-5 mr-4 md:mr-8 lg:mr-12 xl:mr-16">
  <ScrollToTopButton className="" />
</div>


      <footer className="px-10 pt-10 pb-5 mt-8 w-full max-md:px-5 bg-sky-400 text-white relative">
        {/* Footer content */}
        <div className="flex flex-wrap justify-between max-md:flex-col gap-8">
          
          {/* Email Section */}
          <div className="flex-1 max-md:w-full">
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-2xl" />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <div className="text-lg">
              <a href="mailto:drravindrajadhav2@gmail.com">drravindrajadhav2@gmail.com</a>
              <br />
              <a href="mailto:dmct103@gmail.com">dmct103@gmail.com</a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex-1 max-md:w-full">
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-2xl" />
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <div className="text-lg">
              <a href="tel:+917738530370">+91-7738530370</a>
              <br />
              <a href="tel:+919833155731">+91-9833155731</a>
              <br />
              <a href="tel:+917977211807">+91-7977211807</a>
              <br />
              <a href="tel:+917021651887">+91-7021651887</a>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex-1 max-md:w-full">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-6 items-center max-md:justify-center">
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.href} aria-label={icon.alt} className="text-3xl hover:text-slate-300">
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="flex-1 max-md:w-full">
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-2xl" />
              <h3 className="text-xl font-bold">Address</h3>
            </div>
            <div className="mt-8">
              <a
                href="https://www.google.com/maps/dir//64FH%2B38X+Gun+Gopal+Mandir+Road,+Circle,+near+Chakkinaka,+New+Rachana+Park,+Society,+Kalyan,+Maharashtra+421306"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c4f388d8f8b9fe74574386204bf502df7e51eb1ee024beb886635884c93fd8?placeholderIfAbsent=true&apiKey=ecbe1396c2284b6a90ede3eda49be9ce"
                  alt="Location map"
                  className="rounded-2xl object-cover max-md:mt-10"
                  style={{ height: '200px' }}
                />
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-center">
          © {new Date().getFullYear()} DMCT Old Age Home and Hospital | All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
