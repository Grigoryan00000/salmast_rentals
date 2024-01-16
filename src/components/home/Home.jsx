import React from 'react'
import { HomeBanner } from './home-banner/HomeBanner'
import { HomeCars } from './home-cars/HomeCars'
import { HomeServices } from './home-services/HomeServices'

export const Home = () => {
  return (
    <div className='home'>
        <HomeBanner />
        <HomeCars />
        <HomeServices />
    </div>
  )
}
