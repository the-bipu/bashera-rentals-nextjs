'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-auto flex flex-row items-center justify-center bg-white text-[#1a1a1a]'>
      <div className='flex flex-row items-center justify-between md:w-10/12 w-11/12 h-full'>
        <div className='py-4'>hello</div>
        <div className='flex flex-row gap-4 text-base font-normal'>
          <div>Home</div>
          <div>Property</div>
          <div>Services</div>
          <div>About Us</div>
        </div>
        <Button variant={'default'}>Contact us</Button>
      </div>
    </div>
  )
}

export default Navbar
