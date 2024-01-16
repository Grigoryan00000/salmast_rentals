import React, { useState } from 'react'
import "./HomeCars.scss"
import Conatiner from "../../common/container/Container"
import { CONFIG } from '../../../config'

export const HomeCars = () => {
    const [active, setActive] = useState(1);
  return (
    <div className='home-cars'>
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
        </Conatiner>
    </div>
  )
}
