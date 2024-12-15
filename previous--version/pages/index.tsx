import AboutSection from '@/components/common/AboutSection/AboutSection';
import ExplorePlaces from '@/components/common/ExplorePlaces/ExplorePlaces';
import HomeSection from '@/components/common/HomeSection/HomeSection';
import NearbyLocation from '@/components/common/NearbyLocation/NearbyLocation';
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
