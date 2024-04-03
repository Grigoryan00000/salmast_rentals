import React, { useEffect, useState } from 'react'
import Container from '../../common/container/Container'

import "./HomeServices.scss"
import axios from 'axios'

export const HomeServices = () => {

  const [dataService, setDataService] = useState([])
  useEffect(() => {
    async function getData() {
        try {
            const { data } = await axios.get(
                "http://16.171.255.93:8000/advantages_list/"
            );
            setDataService(data);
        } catch (error) {
            console.log(error.message)
        }
    }
    getData();
  }, []);

  return (
    <div className='home-services'>
      <Container>
        <div className="home-services-title">
          <h2>Մեր ծառայություններն ու առավելությունները</h2>
          <p>Վարձակալությունը հեշտ և առանց դժվարության դարձնելու համար մենք տրամադրում ենք մի շարք ծառայություններ և առավելություններ: Մենք ձեզ ապահովագրում ենք տարբեր տրանսպորտային միջոցներով և վարձակալության ճկուն պայմաններով:</p>
        </div>
        <div className="home-services-items" >
          {dataService.map(({id, img, ad_name_hy, ad_about_hy}) => {
            return(
              <div className="home-services-items-item" key={id}>
                <img src={img} alt="" key={id}/>
                <h3>{ad_name_hy}</h3>
                <p>{ad_about_hy}</p>
              </div>
                )
              })}
        </div>
      </Container>
    </div>
  )
}
