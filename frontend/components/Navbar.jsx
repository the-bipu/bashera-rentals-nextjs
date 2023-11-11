'use client';
import Link from 'next/link'
import React, { useState } from 'react'

import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  


  return (
    <div className={`h-[73px] w-[auto] flex items-center bg-[#ffffff4d] border-b-white border-b-2 ${isActive ? 'active' : ''}`}>

      <div className='w-[100vw] flex items-center justify-between lg:px-[80px] p-[20px]'>
            <a href="/" className='text-[25px] font-bold text-white'>Bashera</a>

            <div id="menu-btn" onClick={toggleNavbar} className="text-[25px] cursor-pointer text-white lg:hidden block">
              <FaBars className='w-[2rem] h-[2rem] text-white' />
            </div>

            <nav className={`lg:flex hidden flex-row gap-[2rem]`}>
                <Link href="/">Home</Link>
                <Link href="/Services">Services</Link>
                <Link href="/Gallery">Gallery</Link>
                <Link href="/About">About</Link>
                <Link href="/Contact">Contact</Link>
            </nav>

      </div>

      <div id="sidebar" className={`fixed top-0 left-[-250px] w-[250px] h-[100%] bg-white text-black transition-all pt-[60px] flex flex-col items-center gap-4 ${isActive ? 'left-[0px]' : ''}`}>

        <div id="close-navbar" className={`w-[2rem] h-[2rem] text-[2rem] cursor-pointer text-[#000] ${isActive ? 'block' : ''}`} onClick={toggleNavbar}>
          <AiOutlineCloseSquare className='w-[2rem] h-[2rem] text-black' />
        </div>

          <Link href="/">Home</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
      </div>

    </div>
  )
}

export default Navbar
      
//         a {
//           text-decoration: none;
//           color: rgb(0, 0, 0);
//           font-size: 18px;
//           font-weight: 600;
//         }
      
//         a:hover {
//           color: #0eb582;
//         }
//     }
      
//     .sidebar.active {
//         left: 0;
//     }
// }

  