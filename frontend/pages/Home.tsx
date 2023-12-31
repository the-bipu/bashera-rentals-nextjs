import React from 'react'

import { IoMdHome } from "react-icons/io";

export default function Home() {
  return (
    <div className='bg-white'>
        <div id='home-head' className='w-full h-full flex flex-col items-center justify-center p-16' >
          <div className='text-white text-5xl mb-12'>Find You Bashera Here</div>
          <div className='text-white text-lg mb-12'>Search for 10k+ houses</div>

          <div className='bg-white rounded-full md:w-2/4 w-4/5 h-20 p-3 flex flex-row justify-between pl-8'>
              <input type="text" placeholder='Search your area ........' className='w-full h-full outline-none' />
              <button className='w-auto h-full bg-[#1967d2] text-white rounded-full px-8'>Search</button>
          </div>

          <div className='mt-12 flex flex-row gap-28'>

            <div className='w-16 h-auto flex flex-col items-center justify-center'>
              <div className='p-2 bg-[#FFFFFF45] hover:bg-white w-20 h-20 rounded-full flex items-center justify-center'>
                <IoMdHome className='w-full h-auto mx-2 text-white hover:text-[#1967d2]' />
              </div>
              <p className='text-white h-auto mt-4 text-lg'>Home</p>
            </div>

            <div className='w-16 h-auto flex flex-col items-center justify-center'>
              <div className='p-2 bg-[#FFFFFF45] w-20 h-20 rounded-full flex items-center justify-center'>
                <IoMdHome className='w-full h-auto mx-2 text-white' />
              </div>
              <p className='text-white h-auto mt-4 text-lg'>Home</p>
            </div>

            <div className='w-16 h-auto flex flex-col items-center justify-center'>
              <div className='p-2 bg-[#FFFFFF45] w-20 h-20 rounded-full flex items-center justify-center'>
                <IoMdHome className='w-full h-auto mx-2 text-white' />
              </div>
              <p className='text-white h-auto mt-4 text-lg'>Home</p>
            </div>

            <div className='w-16 h-auto flex flex-col items-center justify-center'>
              <div className='p-2 bg-[#FFFFFF45] w-20 h-20 rounded-full flex items-center justify-center'>
                <IoMdHome className='w-full h-auto mx-2 text-white' />
              </div>
              <p className='text-white h-auto mt-4 text-lg'>Home</p>
            </div>
            
            <div className='w-16 h-auto flex flex-col items-center justify-center'>
              <div className='p-2 bg-[#FFFFFF45] w-20 h-20 rounded-full flex items-center justify-center'>
                <IoMdHome className='w-full h-auto mx-2 text-white' />
              </div>
              <p className='text-white h-auto mt-4 text-lg'>Home</p>
            </div>

          </div>
        </div>

        <div className='flex flex-col w-full h-auto bg-[#ffffff]'>
          <div className='text-center p-4 text-[1.4rem]'>Why Bashera !??</div>

          <div className='flex flex-row w-full h-auto gap-8 p-20 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/home-7.jpg" alt="" className='' />
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              Welcome to our house rental platform, where your perfect tenant is just a click away. List your property with detailed information and captivating visuals, allowing potential renters to explore, engage, and connect directly with you. From liking and exploring properties to initiating real-time conversations, finding the ideal home or tenant has never been easier!
            </div>
          </div>
          
          <div className='flex flex-row w-full h-auto gap-8 p-20 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              In a fast-paced world where convenience matters, this website streamlines the daunting process of finding or renting a house. For landlords, it offers a centralized platform to showcase their properties comprehensively, reaching a wider audience while facilitating direct interaction with potential tenants. This efficiency saves time, simplifies negotiations, and ensures a more tailored rental experience.
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/home-8.jpg" alt="" className='' />
            </div>
          </div>

          <div className='flex flex-row w-full h-auto gap-8 p-20 pb-8 pt-0'>
            <div className='md:w-50% w-[90%] h-auto'>
              <img src="/home-16.jpg" alt="" className='' />
            </div>
            <div className='md:w-50% w-[90%] h-auto'>
              On the other hand, for tenants seeking their next home, this platform provides a diverse array of rental options with detailed information, high-quality images, and direct communication channels with landlords. It simplifies the search process, empowering renters to make informed decisions and fostering a more transparent and efficient renting experience.
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full h-auto bg-[#e6e9f0]'>
          <div className='text-center p-4 text-[1.4rem]'>Your Nearby Locations</div>
          <div className='md:px-[5rem] px-[2rem] pt-0 pb-16 flex flex-wrap flex-row items-center justify-center gap-4'>

            {/* First Card */}
            <div className='bg-[#fff] flex flex-col items-start w-[320px]'>
              <div>
                <img src="/home-11.jpg" alt="Home Image" className='' />
              </div>
              <div className='p-4'>
                <div>Name</div>
                <div>Location</div>
              </div>
            </div>

            {/* Second Card */}
            <div className='bg-[#fff] flex flex-col items-start w-[320px]'>
              <div>
                <img src="/home-11.jpg" alt="Home Image" className='' />
              </div>
              <div className='p-4'>
                <div>Name</div>
                <div>Location</div>
              </div>
            </div>

            {/* Third Card */}
            <div className='bg-[#fff] flex flex-col items-start w-[320px]'>
              <div>
                <img src="/home-11.jpg" alt="Home Image" className='' />
              </div>
              <div className='p-4'>
                <div>Name</div>
                <div>Location</div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
