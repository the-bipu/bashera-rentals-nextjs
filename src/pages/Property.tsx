import Navbar from '@/components/Navbar';
import { Component } from 'solid-js';

const Property: Component = () => {
    return (
        <div class='flex flex-col w-full min-h-screen items-center justify-start'>

            <Navbar />

            <div class='flex flex-col w-full px-6 h-full'>

                <div class='rounded-3xl flex text-center w-full min-h-[20rem] items-center justify-center bg-anime relative p-10 mb-16'>
                    <div class='text-6xl font-bold text-[#fff] backdrop-blur'>Listed Properties!</div>
                </div>

            </div>
        </div>
    )
}

export default Property;