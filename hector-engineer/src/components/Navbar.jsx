import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'; 

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img 
            width="266" height="73" className="w-[124px] h-[110px]" 
            src="https://dcassetcdn.com/design_img/3324778/191499/191499_18260599_3324778_62142c9d_image.png" 
            alt="metrics logo" 
        />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

    </nav>
  )
}

export default Navbar