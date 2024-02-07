import AboutSection from '@/common/components/AboutSection/AboutSection';
import ExplorePlaces from '@/common/components/ExplorePlaces/ExplorePlaces';
import HomeSection from '@/common/components/HomeSection/HomeSection';
import NearbyLocation from '@/common/components/NearbyLocation/NearbyLocation';
import React from 'react'

export default function Home() {
  return (
    <div className='bg-white'>
        <HomeSection />

        {/* <AboutSection /> */}

        {/* <NearbyLocation /> */}

        <ExplorePlaces />
    </div>
  )
}
