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
                    <div class='px-5 py-1 bg-slate-400 font-semibold uppercase rounded-full mb-4'>Why choose Us</div>
                    <div class='w-1/2 text-center text-4xl font-bold mb-10'>Your Comfort, Our Priority – Safely Renting & Buying Rooms</div>
                    <div class='flex flex-row gap-8 w-11/12 mb-8'>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-blue-400 min-w-10 h-10'>
                                Icon
                            </div>
                            <div class='flex flex-col gap-1'>
                                <div>Easy Room Rentals
                                </div>
                                <div>Find the perfect room that suits your needs and budget. Enjoy seamless bookings with our user-friendly platform.</div>
                            </div>
                        </div>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-blue-400 min-w-10 h-10'>
                                Icon
                            </div>
                            <div class='flex flex-col gap-1'>
                                <div>Verified Listings
                                </div>
                                <div>All properties are verified to ensure your safety and peace of mind. Trust us to provide only the most reliable options.</div>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-row gap-8 w-11/12'>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-blue-400 min-w-10 h-10'>
                                Icon
                            </div>
                            <div class='flex flex-col gap-1'>
                                <div>Buy Your Dream Property
                                </div>
                                <div>Explore properties available for sale and take the first step towards homeownership. Transparent pricing and detailed insights await you.</div>
                            </div>
                        </div>
                        <div class='w-1/2 h-36 bg-white shadow rounded-2xl flex flex-row gap-4 p-6'>
                            <div class='bg-blue-400 min-w-10 h-10'>
                                Icon
                            </div>
                            <div class='flex flex-col gap-1'>
                                <div>24/7 Customer Support
                                </div>
                                <div>We are here to assist you at every step of your journey. From inquiries to move-in, count on us for round-the-clock support.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='rounded-3xl flex md:flex-row flex-col text-center w-full min-h-[36rem] items-start bg-[#192939] relative p-10 mb-16'>
                    <div class='md:w-1/2 w-full h-full'>hello</div>
                    <div class='md:w-1/2 w-full h-full'>hello</div>
                </div>
            </div>
        </div>
    )
}

export default Home;

