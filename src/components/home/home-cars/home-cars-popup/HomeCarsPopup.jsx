import React, { useEffect, useRef } from 'react'
import Popup from 'reactjs-popup';
import "./HomeCarsPopup.scss"
import { CONFIG } from '../../../../config';
import car from "../../../../assets/home/home-cars/home-cars-items/car4.png"

    
export const HomeCarsPopup = ({show, setShow}) => {

    return (
        <div  className={`home-cars-popup ${show ? "active" : ""}`} >
            <div className="home-cars-popup-left">
                <ul className="home-cars-popup-left-list">
                    <li>Car /</li>
                    <li>Booking /</li>
                    <li>Payment /</li>
                </ul>
                <div className="home-cars-popup-left-title">
                    <span>
                        Free cancellation
                    </span>
                    <h4>Toyota Camry, 2021</h4>
                    <p>Or alternative</p>
                </div>
                <div className="home-cars-popup-left-options">
                    <div className="home-cars-popup-left-options-specifications">
                        <h2>Specifications</h2>
                        {CONFIG.homeCarsPopupSpecification.map(({id,text,desc}) => {
                            return(
                                <div className="home-cars-popup-left-options-specifications-item" key={id}>
                                    <h4>{text}</h4>
                                    <p>{desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="home-cars-popup-left-options-insurance">
                        <h2>Specifications</h2>
                        {CONFIG.homeCarsPopupInsurance.map(({id,text,desc}) => {
                            return(
                                <div className="home-cars-popup-left-options-insurance-item" key={id}>
                                    <h4>{text}</h4>
                                    <p>{desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="home-cars-popup-right">
                <img src={car} alt="" className='home-cars-popup-right-img'/>
                <h3>Cost</h3>
                <div className="home-cars-popup-right-options">
                    <div className="home-cars-popup-right-options-delivery">
                        {CONFIG.homecarsPopupDelivery.map(({id, text,desc}) => {
                            return(
                                <div className="home-cars-popup-right-options-delivery-item" key={id}>
                                    <h4>{text}</h4>
                                    <p>{desc}</p>
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </div>
                <p className='close-popup' onClick={() => {
                    setShow(false);
                }}>
                    x
                </p>
        </div>
    )
}

  



