import React from 'react'

export default function Services() {
  return (
    <div className='bg-white'>
        <div id='service-head' className='' />
          
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
