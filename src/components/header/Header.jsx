import React from 'react'
import "./Header.scss"
import Container from "../common/container/Container"
import logo from "../../assets/header/logo.png"
import lang from "../../assets/header/lang.png"
import { CONFIG } from '../../config'

export const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className="row">
          <div className="logo">
            <img src={logo} alt="" />
            <p>Slamast Rentals</p>
          </div>
          <ul className='nav'>
            {CONFIG.headerConfig.map(({id,title}) => {
              return(
                <li key={id}>{title}</li>
              )
            })}
          </ul>
          <div className="options">
            <input type="text" placeholder='Որոնել'/>
            <span>
              <img src={lang} alt="" />
            </span>
            <button>Ամրագրել</button>
          </div>
        </div>
      </Container>
    </header>
  )
}
