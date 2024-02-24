import React, { useEffect, useState, useRef} from 'react'
import "./HomeCars.scss"
import Conatiner from "../../common/container/Container"
import { CONFIG } from '../../../config'
import { useSelector } from 'react-redux'
import { HomeCarsPopup } from './home-cars-popup/HomeCarsPopup'
import { current } from '@reduxjs/toolkit'
  
  
  

export const HomeCars = () => {
    const [active, setActive] = useState(1);
    const [show, setShow] = useState(false)
    const homeCars = useSelector((state) => state.homeCars.homeCars);
    const homeCarsOptions = useSelector((state) => state.homeCars.homeCarsOptions);

    // const ref = useRef();

    // useEffect(() => {
    //     function handler(e) {
    //         if (show && ref.current && !ref.current.contains(e.target)) {
    //             setShow(false);
    //         }
    //     }
    //     document.addEventListener('click', handler)
    //     return () => document.removeEventListener('click', handler)
    // }, [show]);

useEffect(() =>{
    document.body.style.overflowY = show ? 'hidden' : 'auto'
},[show])
  return (
    
    <div className='home-cars' >
        <Conatiner>
            <div className="home-cars-top">
                <h4>Ընտրեք մեքենայի Դասը</h4>
                <ul className="home-cars-top-list">
                    {CONFIG.homeCars.map(({id,text,img}) => {
                        return(
                            <li 
                            key={id}
                            onClick={() => {
                                setActive(id)
                            }}
                            style={{background: active === id ? "var(--blue)" : "#0F0F0F0D"}}
                            >
                                <img src={img}/>
                                <p>{text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="home-cars-bottom" >
                <div className="home-cars-bottom-title">
                    <h2>Առաջարկվող ընտրանին</h2>
                    <button>Տեսնել բոլորը</button>
                </div>
                <div className="home-cars-bottom-items" >
                {homeCars.map(({id, img, title}) => {
                    return(
                    <div className="home-cars-bottom-items-item" key={id}>
                        <img src={img} alt="" />
                        <h4>{title}</h4>
                        <ul className='home-cars-bottom-items-item-options'>
                            {homeCarsOptions.map(({id, img, text}) => {
                                return(
                                    <li key={id}>
                                        <img src={img} alt="" />
                                        <p>{text}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="home-cars-bottom-items-item-book">
                            <button onClick={() => setShow(!show)}>ԱՄՐԱԳՐԵԼ</button>
                            <p>60.000 դր․ / օրը</p>
                        </div>
                    </div>
                    )
                })}
                </div>
                <HomeCarsPopup show = {show} setShow = {setShow}/>
            </div>
        </Conatiner>
    </div>
  )
}