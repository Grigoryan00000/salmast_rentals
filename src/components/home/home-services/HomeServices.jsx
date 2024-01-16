import React from 'react'
import Container from '../../common/container/Container'

import "./HomeServices.scss"

export const HomeServices = () => {
  return (
    <div className='home-services'>
        <Container>
            <div className="home-services-title">
                <h2>Մեր ծառայություններն ու առավելությունները</h2>
                <p>Վարձակալությունը հեշտ և առանց դժվարության դարձնելու համար մենք տրամադրում ենք մի շարք ծառայություններ և առավելություններ: Մենք ձեզ ապահովագրում ենք տարբեր տրանսպորտային միջոցներով և վարձակալության ճկուն պայմաններով:</p>
            </div>
            <div className="home-services-items"></div>
        </Container>
    </div>
  )
}
