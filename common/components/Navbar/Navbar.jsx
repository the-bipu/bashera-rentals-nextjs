'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import './Navbar.scss';

import { FaBars } from "react-icons/fa"
import { IoHome } from "react-icons/io5";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 50;

      console.log('Scroll Position:', scrollPosition);

      if (scrollPosition > offset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`absolute top-0 z-40 w-full h-auto flex items-center duration-500 border-b-[1px] border-[#cbcbcb79] ${isActive ? 'active' : ''} ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>

        <div className={`w-[100vw] h-full flex items-center justify-between text-left lg:px-20 px-5 transition-all py-4`}>
          <div className='flex flex-row items-center justify-center gap-2 text-[22px]'>
            <IoHome className={`mb-1 ${isScrolled ? 'text-black' : 'text-white'}`} />
            <a href="/" className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}> Bashera.Rentals</a>
          </div>

          <div id="menu-btn" onClick={toggleNavbar} className="text-[25px] cursor-pointer text-white lg:hidden block">
            <FaBars id='bars-nav' className='w-[2rem] h-[2rem] text-white drop-shadow-lg' />
            <div className="secNav text-white">
              <Link href="/">Home</Link>
              <Link href="/Places">Places</Link>
              <Link href="/About">About</Link>
              <Link href="/Contact">Contact</Link>
              <Link href="/Login">Login</Link>
            </div>
          </div>

          <nav id='main-nav' className={`lg:flex hidden flex-row justify-center items-center gap-8 text-base font-light ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Link href="/">Home</Link>
            <Link href="/Places">Places</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <button href="/Login" className='py-3 px-8 bg-[#08184b] rounded-sm'>Login</button>
          </nav>
        </div>

      </div>

      {isScrolled && <div className={`fixed top-0 z-40 w-full h-auto flex items-center transition-opacity duration-500 border-b-[1px] border-[#cbcbcb79] ${isActive ? 'active' : ''} bg-white`}>

        <div className={`w-full h-full flex items-center justify-between text-left lg:px-20 px-5 transition-all py-3`}>
          <div className='flex flex-row items-center justify-center gap-2 text-xl'>
            <IoHome className={`mb-1 text-black`} />
            <a href="/" className={`text-xl font-bold text-black`}> Bashera.Rentals</a>
          </div>

          <nav className={`lg:flex hidden flex-row items-center justify-end w-full h-auto gap-8 text-base font-light text-black bg-white`}>
            <Link href="/">Home</Link>
            <Link href="/Places">Places</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <button href="/Login" className={`py-3 px-8 bg-[#08184b] text-white border-[1px] border-[#08184b] rounded-sm`}>Login</button>
          </nav>
        </div>
      </div>}
    </>
  )
}

export default Navbar
