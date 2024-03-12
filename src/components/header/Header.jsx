import React, { useEffect, useState } from 'react'
import "./Header.scss"
import Container from "../common/container/Container"
// import logo from "../../assets/header/logo.png"
// import lang from "../../assets/header/lang.png"
import { BsCurrencyExchange } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { CONFIG } from '../../config'
import axios from 'axios'
import env from "react-dotenv";

export const Header = () => {
  const [change, setChange] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const {data} = await axios.get(
          "http://13.53.71.29:8000/header_list/"
        );
        setData(data);
      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
    console.log(data);
  }, []);
  
  // useEffect(() => {
  //   axios("http://13.53.62.53:8000/header_list/")
  //     .then((response) => {
  //       setData(response.data);
  //       setError(null);
  //     })
  //     .catch(setError);
  //  console.log(data);
  // }, []);
  
  

  return (
    <header className='header'>
      <Container>
        {data.map(({id, logo, name, page1_hy, page2_hy, page3_hy, page4_hy, language_logo, currency_logo, search_logo ,search_hy}) => {
          return(
            <div className="row" key={id}>
              <div className="logo">
                <img src={logo} alt="" />
                <p>{name}</p>
              </div>
              <ul className='nav'>
                <li>{page1_hy}</li>
                <li>{page2_hy}</li>
                <li>{page3_hy}</li>
                <li>{page4_hy}</li>
              </ul>
              <div className="options">
                <div className="options-search">
                  <img src={search_logo} alt="" />
                  <span>{search_hy}</span>
                </div>
                <div className="options-currency">
                <img src={currency_logo} alt=""/>
                  <p>AMD</p>
                  <FaChevronDown />
                </div>
                <div className="options-language">
                  <img src={language_logo} alt="" />
                  {/* <FaChevronDown /> */}
                </div>
                  
              </div>
            </div>
          )
        })}
        
      </Container>
    </header>
  )
}
