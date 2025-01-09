import { Component } from 'solid-js';

import bashera from '../assets/bashera.svg'

const Navbar: Component = () => {
    return (
        <div class='flex flex-row items-center justify-between md:w-10/12 w-11/12 h-auto py-4'>
            {/* navbar here */}
            <img src={bashera} alt="logo" class='w-36' />
            <div class='flex flex-row gap-2 capitalize text-base'>
                <a href='/'>
                    <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>Home</button>
                </a>
                <a href='/property'>
                    <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>Property</button>
                </a>
                <a href='/services'>
                    <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>Services</button>
                </a>
                <a href="/about">
                    <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>About Us</button>
                </a>
            </div>
            <a href="/contact">
                <button class='px-4 h-9 transition-all bg-foreground hover:bg-[#222] text-[#fff] rounded-md'>Contact us</button>
            </a>
        </div>
    )
}

export default Navbar;