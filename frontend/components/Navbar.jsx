'use client';
import Link from 'next/link'
import React, { useState } from 'react'

import { FaBars } from "react-icons/fa"
import { IoHome } from "react-icons/io5";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className={`sticky top-0 z-40 w-full backdrop-blur h-[73px] flex items-center transition-colors duration-500 lg:z-50 border-b border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent ${isActive ? 'active' : ''}`}>

      <div className='w-[100vw] flex items-center justify-between lg:px-[80px] px-[30px]'>
            <div className='flex flex-row items-center justify-center gap-2 text-[25px]'>
              <IoHome className='mb-1' /> 
              <a href="/" className='text-[25px] font-bold text-black'> Bashera</a>
            </div>

            <div id="menu-btn" onClick={toggleNavbar} className="text-[25px] cursor-pointer text-white lg:hidden block">
              <FaBars id='bars-nav' className='w-[2rem] h-[2rem] text-black drop-shadow-lg' />
                <div className="secNav">
                  <Link href="/">Home</Link>
                  <Link href="/Services">Services</Link>
                  <Link href="/Gallery">Gallery</Link>
                  <Link href="/About">About</Link>
                  <Link href="/Contact">Contact</Link>
                </div>
            </div>

            <nav id='main-nav' className={`lg:flex hidden flex-row gap-[2rem] text-[20px]`}>
                <Link href="/">Home</Link>
                <Link href="/Services">Services</Link>
                <Link href="/Gallery">Gallery</Link>
                <Link href="/About">About</Link>
                <Link href="/Contact">Contact</Link>
            </nav>

      </div>

    </div>
  )
}

export default Navbar
