import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navItems = ['Home', 'About', 'Our Team', 'Our Gallery', 'Contact Us', 'Donate Now'];

  return (
    <nav className="flex flex-col justify-center items-center px-16 py-3 w-full leading-none text-white bg-blue-400 font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1255px] max-md:max-w-full">
        {/* {navItems.map((item, index) => (
          <button key={index} className="flex overflow-hidden gap-2 justify-center items-center p-3 whitespace-nowrap bg-blue-400 rounded-lg border border-blue-400 border-solid min-h-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <span className="self-stretch my-auto opacity-[var(--sds-size-stroke-border)]">{item}</span>
          </button>
        ))} */}
        <div className="hidden lg:flex items-center gap-12">
        <NavLink
          exact
          className="text-white text-2xl mx-8 hover:bg-white  hover:text-blue-400 hover:rounded-3xl w-20"
          activeClassName="menu_active"
          aria-current="page"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white text-2xl mx-8 hover:bg-slate-300 hover:text-slate-950 hover:w-40 hover:rounded-xl"
          activeClassName="menu_active"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          exact
          className="text-white text-2xl mx-8 hover:bg-white  hover:text-sky-500 hover:rounded-3xl w-28"
          activeClassName="menu_active"
          aria-current="page"
          to="/our_team"
        >
          Our Team
        </NavLink>
        <NavLink
          exact
          className="text-white text-2xl mx-8 hover:bg-white  hover:text-sky-500 hover:rounded-3xl w-32"
          activeClassName="menu_active"
          aria-current="page"
          to="/our_gallery"
        >
          Our Gallery
        </NavLink>
        <NavLink
          exact
          className="text-white text-2xl mx-8 hover:bg-white  hover:text-sky-500 hover:rounded-3xl w-32"
          activeClassName="menu_active"
          aria-current="page"
          to="/contact_us"
        >
          Contact Us
        </NavLink>
        <NavLink
          exact
          className="text-white text-2xl mx-8 hover:bg-white  hover:text-sky-500 hover:rounded-3xl w-36"
          activeClassName="menu_active"
          aria-current="page"
          to="/donate_now"
        >
          Donate Now
        </NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;