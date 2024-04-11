import React, { useEffect, useState } from 'react'
import "./Header.scss"
import Container from "../common/container/Container"
import { BsCurrencyExchange } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import flagArm from "../../assets/header/languages/armenia.png"
import flagUsa from "../../assets/header/languages/united-states.png"
import flagRu from "../../assets/header/languages/russia.png"

import { CONFIG } from '../../config'
import axios from 'axios'
import env from "react-dotenv";
import { useDispatch, useSelector } from 'react-redux';
import { selectEn, selectHy, selectRu } from '../../redux/slices/LangSlice';

export const Header = () => {
  const [change, setChange] = useState(false)
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false)



  // const [data, setData] = useState([])
  const [lang, setLang] = useState("hy")
  
  
  const langState = useSelector((state) => state.lang.lang)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (lang === "en") {
      dispatch(selectEn())
    } else if (lang === "ru") {
      dispatch(selectRu())
    } else {
      dispatch(selectHy())
    }
  }, [lang]);

  useEffect(() => {
    async function getData() {
      try {
        const {data} = await axios.get(
          "http://13.53.174.178:8000/header_list/"
        );
        setData(data);
      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
    console.log(data);
  }, []);

  
  function addNav(){
    let nav = document.querySelector(".nav")
    let language = document.querySelector(".language")
    nav.style.display= (nav.style.display === "block") ? "none" : "block"
    language.style.display= (language.style.display === "flex") ? "none" : "flex";
  }

  return (
    <header className='header'>
      <Container>
        {data.map(({id, logo, name,
          page1_hy,page1_ru, page1_en, 
          page2_hy,page2_en,page2_ru, 
          page3_hy, page3_en, page3_ru,  
          page4_hy, page4_en, page4_ru,
          language_logo, currency_logo, search_logo ,search_hy}) => {
            return(
              <div className="row" key={id}>
                <div className="logo">
                  <img src={logo} alt="" />
                  <p>{name}</p>
                </div>
                <ul className='nav'>
                  <li>{langState==="hy"?page1_hy:langState==="en"?page1_en:page1_ru}</li>
                  <li>{langState==="hy"?page2_hy:langState==="en"?page2_en:page2_ru}</li>
                  <li>{langState==="hy"?page3_hy:langState==="en"?page3_en:page3_ru}</li>
                  <li>{langState==="hy"?page4_hy:langState==="en"?page4_en:page4_ru}</li>
                </ul>
                <div className="language">
                  <img src={flagArm} alt="" onClick={() => {
                    setLang("hy")
                  }}/>
                  <img src={flagUsa} alt="" onClick={() => {
                    setLang("en")
                  }}/>
                  <img src={flagRu} alt="" onClick={() => {
                    setLang("ru")
                  }}/>
                </div>
                <div className="burger" onClick={() => {
                  addNav()
                }}>
                  <input class="checkbox" type="checkbox" name="" id="" />
                  <div class="hamburger-lines">
                    <span class="line line1">
                    </span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                  </div>  
                </div>
              </div>
            )
        })}
      </Container>
    </header>
  )
}
