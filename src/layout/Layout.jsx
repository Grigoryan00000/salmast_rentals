import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export const Layout = ({children}) => {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}
