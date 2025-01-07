import Navbar from '@/components/Navbar';
import { Component } from 'solid-js';

const About: Component = () => {
    return (
        <div class='flex flex-col w-full min-h-screen items-center justify-start'>

            <Navbar />
            
            <div class='flex flex-col w-full px-6 h-full'>
                About Page
            </div>
        </div>
    )
}

export default About;