import "./HomeBanner.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CONFIG } from '../../../config';

import prev from "../../../assets/home/home-banner/prev.png";
import next from "../../../assets/home/home-banner/next.png";
import { useState } from "react";


export const HomeBanner = () => {
  const [sliderId, setSliderId] = useState(1);


  return (
    <div className='home-banner' style={{ background: sliderId === 1 ? "linear-gradient(180deg, #C8CCCE 0%, #929395 100%)" : sliderId === 2 ? "linear-gradient(180deg, #B3C2DC 0%, #7596D2 100%)" : "linear-gradient(180deg, #FFF6D3 0%, #D8CA7D 100%)", transition: "all 600ms linear" }}>
      <div className="home-banner-prev" style={{ display: sliderId === 1 ? "none" : "flex", transition: "all 500ms ease" }} onClick={() => {
        console.log(sliderId);
        setSliderId(prev => prev - 1)
      }}>
        A
      </div>
      <div className="home-banner-slider-inner">
        <div className="home-banner-slider-inner-slides">
          {CONFIG.homeSlider.map(({ id, title, img }) => {
            return (
              <div className='home-banner-slider-inner-slides-item' key={id}>
                <h1 style=
                  {{
                    backgroundImage: sliderId === 1 ? "linear-gradient(180deg, #E2E2E2 -19.44%, #2C2C2C 100%)" : sliderId === 2 ? "linear-gradient(356.24deg, #3C6397 25.9%, #85A5DB 96.3%)" : "linear-gradient(356.24deg, #917B00 25.9%, #EACE3F 96.3%)", animation: "textClip 3s linear infinite"
                  }}>{title}</h1>
                <div className='home-banner-slider-inner-slides-item-img' style={{ transform: sliderId === 2 ? "translate(-100%)" : sliderId === 3 ? "translate(-200%)" : "translate(0)", transition: "all 500ms ease" }}>
                  <img src={img} alt="" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="home-banner-next" style={{ display: sliderId === 3 ? "none" : "flex", transition: "all 500ms ease" }} onClick={() => {
        setSliderId((prev) => prev + 1)
      }}>
        A
      </div>
    </div>
  )
}


