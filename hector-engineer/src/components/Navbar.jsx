import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'; 

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img 
            className="w-[130px] h-[50px]" 
            src="https://usercontent.one/wp/www.nextec.engineering/wp-content/uploads/2022/08/nextec-engineering-logo.png" 
            alt="metrics logo" 
        />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
                src={toggle ? close : menu} 
                alt="burger menu" 
                className="w-[28px] h-[28px] object-contain" 
                onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar