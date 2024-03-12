import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal text-[16px] text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        )
        
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
