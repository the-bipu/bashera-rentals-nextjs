import type { Component } from 'solid-js';

import bashera from './assets/bashera.svg';

const App: Component = () => {
  return (
    <div class='flex flex-col w-full min-h-screen items-center justify-start'>

      {/* navbar here */}
      <div class='flex flex-row items-center justify-between md:w-10/12 w-11/12 h-auto py-4'>
        <img src={bashera} alt="logo" class='w-36' />
        <div class='flex flex-row gap-2 capitalize text-base'>
          <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>Home</button>
          <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>Property</button>
          <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>Services</button>
          <button class='px-3 py-1 transition-all hover:bg-[#d6d6d6] rounded'>About Us</button>
        </div>
        <button class='px-4 py-2 transition-all bg-foreground hover:bg-[#222] text-[#fff] rounded-md'>Contact us</button>
      </div>

      {/* content here */}
      <div class='flex flex-col w-10/12 h-full mt-6'>
        <div class='rounded-3xl flex text-center w-full min-h-[36rem] items-center bg-anime relative'>
          <div class='absolute text-8xl font-bold text-[#353535ce] bottom-4'>Discover Your Bashera Here!</div>
        </div>
      </div>
    </div>
  );
};

export default App;
