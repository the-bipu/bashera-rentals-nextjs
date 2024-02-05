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
    <div className={`fixed top-0 z-40 w-full h-auto flex items-center duration-500 border-b-[1px] border-[#cbcbcb9b] ${isActive ? 'active' : ''} ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>

      <div className={`w-[100vw] h-full flex items-center justify-between text-left lg:px-[80px] px-[20px] transition-all ${isScrolled ? 'py-[15px]' : 'py-[30px]'}`}>
        <div className='flex flex-row items-center justify-center gap-2 text-[22px]'>
          <IoHome className={`mb-1 ${isScrolled ? 'text-black' : 'text-white'}`} />
          <a href="/" className={`text-[22px] font-bold ${isScrolled ? 'text-black' : 'text-white'}`}> Bashera</a>
        </div>

        <div id="menu-btn" onClick={toggleNavbar} className="text-[25px] cursor-pointer text-white lg:hidden block">
          <FaBars id='bars-nav' className='w-[2rem] h-[2rem] text-white drop-shadow-lg' />
          <div className="secNav text-white">
            <Link href="/">Home</Link>
            <Link href="/Services">Services</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Login">Login</Link>
          </div>
        </div>

        <nav id='main-nav' className={`lg:flex hidden flex-row justify-center items-center gap-[2rem] text-base ${isScrolled ? 'text-black' : 'text-white'}`}>
          <Link href="/">Home</Link>
          <Link href="/Services">Services</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <button href="/Login" className='py-3 px-8 bg-blue-700 rounded-lg'>Login</button>
        </nav>

      </div>

    </div>
  )
}

export default Navbar
