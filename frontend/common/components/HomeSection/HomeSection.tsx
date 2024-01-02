import React from 'react'

import { FaBuildingColumns } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { GiVikingLonghouse } from "react-icons/gi";
import { BsBuildingFillLock } from "react-icons/bs";

import './HomeSectionModule.scss';

const HomeSection = () => {
    return (
        <div id='home-head' className='w-full h-full flex flex-col items-center justify-center p-16' >
            <div className='text-white text-5xl mb-12 mt-16'>Find You Bashera Here</div>
            <div className='text-white text-lg mb-12 font-normal'>Search for 10k+ houses</div>

            <div className='bg-white rounded-full md:w-2/4 w-4/5 h-20 p-3 flex flex-row justify-between pl-8'>
                <input type="text" placeholder='Search your area ........' className='w-full h-full outline-none font-light' />
                <button className='w-auto h-full bg-[#1967d2] text-white rounded-full px-8 font-light'>Search</button>
            </div>

            <div className='mt-20 w-1/2 flex flex-row justify-between'>

                <div className='w-16 h-auto flex flex-col items-center justify-center'>
                    <div id='circle-div' className='p-2 bg-[#FFFFFF45] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                        <FaBuildingColumns id='logo-div' className='w-full h-auto mx-2 text-white' />
                    </div>
                    <p className='text-white h-auto mt-4 text-sm'>Secure</p>
                </div>

                <div className='w-16 h-auto flex flex-col items-center justify-center'>
                    <div id='circle-div' className='p-2 bg-[#FFFFFF45] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                        <BsBuildingsFill id='logo-div' className='w-full h-auto mx-2 text-white' />
                    </div>
                    <p className='text-white h-auto mt-4 text-sm'>Apartments</p>
                </div>

                <div className='w-16 h-auto flex flex-col items-center justify-center'>
                    <div id='circle-div' className='p-2 bg-[#FFFFFF45] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                        <GiFamilyHouse id='logo-div' className='w-full h-auto mx-2 text-white' />
                    </div>
                    <p className='text-white h-auto mt-4 text-sm'>Family</p>
                </div>

                <div className='w-16 h-auto flex flex-col items-center justify-center'>
                    <div id='circle-div' className='p-2 bg-[#FFFFFF45] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                        <GiVikingLonghouse id='logo-div' className='w-full h-auto mx-2 text-white' />
                    </div>
                    <p className='text-white h-auto mt-4 text-sm'>Long</p>
                </div>

                <div className='w-16 h-auto flex flex-col items-center justify-center'>
                    <div id='circle-div' className='p-2 bg-[#FFFFFF45] w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                        <BsBuildingFillLock id='logo-div' className='w-full h-auto mx-2 text-white' />
                    </div>
                    <p className='text-white h-auto mt-4 text-sm'>Secure</p>
                </div>

            </div>
        </div>
    )
}

export default HomeSection