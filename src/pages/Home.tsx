import type { Component } from 'solid-js';

import Navbar from '@/components/Navbar';

const Home: Component = () => {
    return (
        <div class='flex flex-col w-full min-h-screen items-center justify-start bg-[#F8F8F8]'>

            <Navbar />

            {/* content here */}
            <div class='flex flex-col w-full px-6 h-full'>

                <div class='rounded-3xl flex text-center w-full min-h-[36rem] items-start bg-anime relative p-10 mb-16'>
                    <div class='text-6xl font-bold text-[#fff] top-8'>Discover Your Bashera Here!</div>
                    <div class='absolute -left-4 bottom-0 w-1/2 h-32 rounded-tr-3xl skew-x-[20deg] bg-[#F8F8F8]'>
                        <div class='-skew-x-[20deg] w-full h-full flex flex-col gap-4 px-10 py-5 items-start text-[#a0a0a0] font-medium text-base'>
                            <span>More than 100+ cities we're in</span>
                            <div class='flex flex-row gap-6 w-full'>
                                <div class='bg-[#a0a0a0] rounded-full w-1/4 h-12'></div>
                                <div class='bg-[#a0a0a0] rounded-full w-1/4 h-12'></div>
                                <div class='bg-[#a0a0a0] rounded-full w-1/4 h-12'></div>
                                <div class='bg-[#a0a0a0] rounded-full w-1/4 h-12'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='w-full h-auto flex flex-col items-center justify-center mb-16'>
                    <div class='px-5 py-1 bg-green-200 text-green-800 font-bold uppercase rounded-full mb-4'>Why choose Us</div>
                    <div class='w-1/2 text-center text-4xl font-bold mb-10'>Your Comfort, Our Priority – Safely Renting & Buying Rooms</div>
                    <div class='flex flex-row gap-8 w-11/12 mb-8'>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-orange-400 min-w-12 h-12 shadow rounded flex items-center justify-center mt-1'>
                                <img src="/icons/home.png" alt="logo" class='w-9 h-9' />
                            </div>
                            <div class='flex flex-col'>
                                <div class='font-bold text-lg'>Easy Room Rentals
                                </div>
                                <div>Find the perfect room that suits your needs and budget. Enjoy seamless bookings with our user-friendly platform.</div>
                            </div>
                        </div>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-blue-400 min-w-12 h-12 shadow rounded flex items-center justify-center mt-1'>
                                <img src="/icons/home.png" alt="logo" class='w-9 h-9' />
                            </div>
                            <div class='flex flex-col'>
                                <div class='font-bold text-lg'>Verified Listings
                                </div>
                                <div>All properties are verified to ensure your safety and peace of mind. Trust us to provide only the most reliable options.</div>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-row gap-8 w-11/12'>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-yellow-400 min-w-12 h-12 shadow rounded flex items-center justify-center mt-1'>
                                <img src="/icons/home.png" alt="logo" class='w-9 h-9' />
                            </div>
                            <div class='flex flex-col'>
                                <div class='font-bold text-lg'>Buy Your Dream Property
                                </div>
                                <div>Explore properties available for sale and take the first step towards homeownership. Transparent pricing and detailed insights await you.</div>
                            </div>
                        </div>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-green-400 min-w-12 h-12 shadow rounded flex items-center justify-center mt-1'>
                                <img src="/icons/home.png" alt="logo" class='w-9 h-9' />
                            </div>
                            <div class='flex flex-col'>
                                <div class='font-bold text-lg'>24/7 Customer Support
                                </div>
                                <div>We are here to assist you at every step of your journey. From inquiries to move-in, count on us for round-the-clock support.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='rounded-3xl flex md:flex-row flex-col gap-10 text-center w-full h-[36rem] items-start bg-[#192939] relative md:p-16 p-8 mb-16'>
                    <div class='md:w-1/2 w-full h-full rounded-2xl p-3 bg-[#303E4D]'>
                        <img src="/apna.jpg" alt="" class='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <div class='md:w-1/2 w-full h-full flex flex-col items-start py-4'>
                        <div class='px-6 py-1 rounded-full bg-[#303E4D] uppercase text-white mb-4'>Get Your Bashera</div>
                        <div class='text-4xl font-semibold text-white capitalize mb-6'>Flexible Stay Options for Every Lifestyle</div>
                        <div class='text-base font-normal text-white text-justify'>Whether you need a short-term rental or a long-term lease, we’ve got you covered. Discover spaces tailored to your unique preferences.</div>
                        <hr class='h-0.5 w-full my-6' />
                    </div>
                </div>

                <div class='rounded-3xl flex md:flex-row flex-col gap-10 text-center w-full h-[36rem] items-start bg-[#fff] relative md:p-16 p-8 mb-16'>
                    <div class='md:w-1/2 w-full h-full flex flex-col items-start py-4 text-black'>
                        <div class='px-6 py-1 rounded-full bg-[#303E4D] uppercase text-white mb-4'>Get Your Bashera</div>
                        <div class='text-4xl font-semibold capitalize mb-6'>Flexible Stay Options for Every Lifestyle</div>
                        <div class='text-base font-normal text-justify'>Whether you need a short-term rental or a long-term lease, we’ve got you covered. Discover spaces tailored to your unique preferences.</div>
                        <hr class='h-0.5 w-full my-6' />
                    </div>
                    <div class='md:w-1/2 w-full h-full rounded-2xl'>
                        <img src="/apna.jpg" alt="" class='w-full h-full object-cover rounded-2xl' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;

