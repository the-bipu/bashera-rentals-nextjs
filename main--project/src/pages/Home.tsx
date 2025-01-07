import type { Component } from 'solid-js';

import Navbar from '@/components/Navbar';

const Home: Component = () => {
    return (
        <div class='flex flex-col w-full min-h-screen items-center justify-start'>

            <Navbar />

            {/* content here */}
            <div class='flex flex-col w-full px-6 h-full'>
                <div class='rounded-3xl flex text-center w-full min-h-[36rem] items-center bg-anime relative'>
                    <div class='absolute text-8xl font-bold text-[#353535ce] bottom-4'>Discover Your Bashera Here!</div>
                </div>
            </div>
        </div>
    )
}

export default Home;

