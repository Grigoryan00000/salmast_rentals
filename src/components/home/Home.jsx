import React, { useRef } from 'react'
import Popup from 'reactjs-popup'
import { HomeBanner } from './home-banner/HomeBanner'
import { HomeCars } from './home-cars/HomeCars'
import { HomeServices } from './home-services/HomeServices'

export const Home = () => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <div className='home'>
      
        <HomeBanner myRef={myRef}/>
        <HomeCars myRef={myRef}/>
        <HomeServices />
    </div>
  )
}
