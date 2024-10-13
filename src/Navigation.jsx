import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../src/images/logo.png';

const Navigation = () => {
  // State to manage dropdown visibility and active link
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Default active link

  // Function to toggle dropdown menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle between true/false
  };

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set active link state
    // Close the menu if it is open
    setIsMenuOpen(false); 
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/our_team', label: 'Our Team' },
    { path: '/our_gallery2', label: 'Our Gallery' },
    { path: '/contact_us', label: 'Contact Us' },
    { path: '/donate_now', label: 'Donate Now' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex flex-col justify-center items-center px-6 py-3 w-full bg-white select-none drop-shadow-md">
      <div className="flex flex-wrap justify-between items-center w-full max-w-[1255px]">
        {/* Logo Section */}
        <NavLink to="/" onClick={() => handleLinkClick('/')}>
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-contain hover:opacity-80 max-md:w-16 max-md:h-16"
          />
        </NavLink>

        {/* Menu for Large Screens */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              exact
              to={path}
              className={`flex items-center justify-center text-lg xl:text-xl px-4 py-2 transition-all duration-300 ease-in-out rounded-lg nav-link ${
                activeLink === path
                  ? 'bg-blue-500 text-white active'
                  : 'text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white'
              }`}
              onClick={() => handleLinkClick(path)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu} // Toggle menu on click
            className="text-2xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden mt-5 flex flex-col gap-2 text-center w-full">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              exact
              to={path}
              className={`flex items-center justify-center text-lg w-full md:w-64 p-2 transition-all duration-300 ease-in-out rounded-lg nav-link ${
                activeLink === path
                  ? 'bg-blue-600 text-white active'
                  : 'text-blue-600 bg-transparent hover:bg-blue-500 hover:text-white'
              }`}
              onClick={() => handleLinkClick(path)} // Just update active link and close the menu
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
