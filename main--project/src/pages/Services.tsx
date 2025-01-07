import Navbar from '@/components/Navbar';
import { Component } from 'solid-js';

const Services: Component = () => {
    return (
        <div class='flex flex-col w-full min-h-screen items-center justify-start'>

            <Navbar />
            
            <div class='flex flex-col w-full px-6 h-full'>
                Services Page
            </div>
        </div>
    )
}

export default Services;