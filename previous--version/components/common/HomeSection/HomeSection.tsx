import React from 'react'
import './HomeSectionModule.scss';

import { IoMdSearch } from "react-icons/io";

const HomeSection = () => {
    return (
        <div className='w-full min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center' >
            <div className='text-white md:text-7xl text-3xl font-bold mb-8 mt-16 lufga'>Find Your Bashera Here</div>

            <div className='bg-white rounded-sm md:w-3/4 w-11/12 h-20 p-3 flex flex-row justify-between pl-8'>
                <div className='flex flex-row gap-2 justify-center items-center w-auto h-full'>
                    <IoMdSearch className='text-3xl font-light text-[#979797]' />
                    <input type="text" placeholder='Keywords...' className='w-full h-full outline-none font-light' />
                </div>
                <button className='w-auto h-full bg-[#1967d2] text-white rounded-sm px-8 font-light'>Search</button>
            </div>
        </div>
    )
}

export default HomeSection