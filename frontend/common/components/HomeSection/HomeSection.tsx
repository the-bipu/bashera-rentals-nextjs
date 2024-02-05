import React from 'react'
import './HomeSectionModule.scss';

const HomeSection = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center homeBG' >
            <div className='text-white md:text-7xl text-3xl font-bold mb-8 mt-16 lufga'>Find Your Bashera Here</div>

            <div className='bg-white rounded-sm md:w-3/4 w-11/12 h-20 p-3 flex flex-row justify-between pl-8'>
                <input type="text" placeholder='Search your area ........' className='w-full h-full outline-none font-light' />
                <button className='w-auto h-full bg-[#1967d2] text-white rounded-sm px-8 font-light'>Search</button>
            </div>
        </div>
    )
}

export default HomeSection