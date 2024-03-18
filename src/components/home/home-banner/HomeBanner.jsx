import "./HomeBanner.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CONFIG } from '../../../config';


import { useRef, useState } from "react";
import { useSelector } from "react-redux";



export const HomeBanner = ({myRef}) => {
  
  const langState = useSelector((state) => state.lang.lang)


  return (
    <div className='home-banner' >
      <div className="home-banner-overlay"></div>
      <Swiper
        modules={[Navigation, Pagination , A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination = {{clickable: true}}
        loop={true}
        grabCursor
        autoplay={{
          delay: 300000,
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CONFIG.homeSlider.map(({id, img, title}) => {
          return(
            <SwiperSlide key={id}>
              <div className="home-banner-item">
                <h1>{title}</h1>
                <img src={img} alt="" />
                <button onClick={() => {
                  myRef.current.scrollIntoView({
                    behavior: "smooth"
                  })
                }}>{langState==="hy"?"ԸՆտրել մեքենա":langState==="ru"?"Выбрать автомобиль":"Choose a car"}</button>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}


