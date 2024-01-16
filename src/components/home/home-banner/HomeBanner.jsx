import React from 'react'
import "./HomeBanner.scss"
import homeBannerImg from "../../../assets/home/home-banner/home-banner-img.png"
import Container from "../../common/container/Container"

export const HomeBanner = () => {
  return (
    <>
        <div className='home-banner'> 
          <Container>
            <div className="home-banner-title">
                <h1>Ընտրի՝ր մեքենա Քեզ հարմար</h1>
                <p>Անմոռանալի դարձրու օրդ վայելելով շքեղությունն ու որակը:</p>
            </div>
            <img src={homeBannerImg} alt="" className='home-banner-img'/>
            <div className="home-banner-date">
                <input type="text" placeholder='Ընտրեք քաղաքը'/>
                <input type="date" color='white'/>
                <input type="time" placeholder='Ընտրեք ժամը' color='white'/>
                <button>ՓՆՏՐԵԼ</button>
            </div>
          </Container>
        </div>
        
        <div className="poligon"></div>
    </>
  )
}
