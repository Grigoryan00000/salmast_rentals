import React, { useEffect, useState, useRef } from 'react'
import "./HomeCars.scss"
import Conatiner from "../../common/container/Container"
import { CONFIG } from '../../../config'
import { useSelector } from 'react-redux'
import { HomeCarsPopup } from './home-cars-popup/HomeCarsPopup'
import { current } from '@reduxjs/toolkit'
import axios from 'axios'




export const HomeCars = ({ myRef }) => {
    const [active, setActive] = useState(1);
    const [show, setShow] = useState(false)
    const [dataList, setDataList] = useState([])
    const [dataCar, setDataCar] = useState([])

    
    
    useEffect(() => {
        document.body.style.overflowY = show ? 'hidden' : 'auto'
    }, [show])
    
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(
                    "http://16.171.5.85:8000/choise_list/"
                );
                setDataList(data);
            } catch (error) {
                console.log(error.message)
            }
        }
        getData();
    }, []);
    
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(
                    "http://16.171.5.85:8000/product_list/"
                    );
                    setDataCar(data);
                } catch (error) {
                    console.log(error.message)
            }
        }
        getData();
    }, []);
    
    const [tag, setTag] = useState(1);
    const [filteredImges, setFilteredImages] = useState([])


    // useEffect(() => {
    //     tag === setFilteredImages(dataCar.filter(imges => imges.choice == tag))
    // },[tag])
    // console.log(filteredImges);

    return (

        <div ref={myRef} className='home-cars' >
            <Conatiner>
                <div className="home-cars-top">
                    <h4>Ընտրեք մեքենայի Դասը</h4>
                    <ul className="home-cars-top-list">
                        {dataList.map(({ id, name_hy, car_logo, act_car_logo, car_about_hy }) => {
                            return (
                                <li
                                    key={id}
                                    onClick={() => {
                                        setActive(id)
                                    }}
                                    style={{ background: active === id ? "var(--blue)" : "#0F0F0F0D" }}
                                >
                                    <img src={car_logo} alt="" style={{ display: active === id ? "none" : "flex" }} />
                                    <img src={act_car_logo} alt="" style={{ display: active === id ? "flex" : "none" }} />
                                    <p style={{ color: active === id ? "white" : "black" }}>{car_about_hy}</p>
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
                    <div className="home-cars-bottom-items">
                        {dataCar.map(({ id, car_name_hy, car_logo, speed_name_hy, speed_logo, gearbox_name_hy, gearbox_logo, person_name_hy, person_logo, fuel_name_hy, fuel_logo, car_button_hy, price_text_hy }) =>{
                            return(
                                <div className="home-cars-bottom-items-item" key={id}>
                                    <img src={car_logo} alt="" />
                                    <h4>{car_name_hy}</h4>
                                    <ul className='home-cars-bottom-items-item-options'>
                                        <li>
                                            <img src={speed_logo} alt="" />
                                            <p>{speed_name_hy}</p>
                                        </li>
                                        <li>
                                            <img src={gearbox_logo} alt="" />
                                            <p>{gearbox_name_hy}</p>
                                        </li>
                                        <li>
                                            <img src={person_logo} alt="" />
                                            <p>{person_name_hy}</p>
                                        </li>
                                        <li>
                                            <img src={fuel_logo} alt="" />
                                            <p>{fuel_name_hy}</p>
                                        </li>
                                    </ul>
                                    <div className="home-cars-bottom-items-item-book">
                                        <button onClick={() => setShow(!show)}>{car_button_hy}</button>
                                        <p>{price_text_hy}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <HomeCarsPopup show={show} setShow={setShow} />
                </div>
            </Conatiner>
        </div>
    )
}