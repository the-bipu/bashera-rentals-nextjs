import Navbar from '@/components/Navbar';
import { Component } from 'solid-js';

const Services: Component = () => {
    return (
        <div class='flex flex-col w-full min-h-screen items-center justify-start'>

            <Navbar />

            <div class='flex flex-col w-full px-6 h-full'>

                <div class='rounded-3xl flex text-center w-full min-h-[20rem] items-center justify-center bg-anime relative p-10 mb-16'>
                    <div class='text-6xl font-bold text-[#fff] backdrop-blur'>Our Services!</div>
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

            </div>
        </div>
    )
}

export default Services;