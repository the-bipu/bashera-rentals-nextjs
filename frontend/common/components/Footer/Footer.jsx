'use client';
import Link from 'next/link'
import React, { useState } from 'react'

import { FaGithub, FaLinkedinIn, FaDribbble, FaTwitter, FaBehance } from "react-icons/fa";

const Footer = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div id='footer-main' className="md:w-full w-[90%] h-auto text-black md:px-[5rem] px-0 py-[2rem]">
        <div className='h-auto flex items-center justify-center'>
            <div id='footer-head' className='w-[300px] h-[60px] bg-white font-semibold text-[20px] flex items-center justify-center mt-[-60px] mb-8 rounded-2xl'>
                🍃Footer🍃
            </div>
        </div>
        <div className='flex md:flex-row flex-col items-start justify-around flex-wrap md:p-0 p-6 md:gap-0 gap-6'>
            <div className='md:w-[35%] w-auto flex flex-col gap-3'>
                <div className='flex flex-row items-center gap-1 text-[22px]'>
                    {/* <IoHome className='mb-1' />  */}
                    <a href="/" className='text-[25px] font-bold text-black'>🏠 Bashera</a>
                </div>
                {/* <div>Discover, Connect, Rent - Your Perfect Home Awaits!</div> */}
                <div className='text-[14px]'>
                    This software revolutionizes home rentals, fostering seamless connections between landlords and tenants. With intuitive features and direct communication, finding or listing a home is effortless and personalized.
                </div>
                <div className='flex flex-row items-start justify-start gap-2 mt-2 text-[14px]'>
                    <FaGithub />
                    <FaLinkedinIn />
                    <FaDribbble />
                    <FaTwitter />
                    <FaBehance />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Quick Links</div>
                <div className='flex flex-col gap-1'>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Quick Links</div>
                <div className='flex flex-col gap-1'>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[#bfbfbf] font-normal'>Quick Links</div>
                <div className='flex flex-col gap-1'>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                    <a href='' className='font-normal text-[#000]'>items</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer