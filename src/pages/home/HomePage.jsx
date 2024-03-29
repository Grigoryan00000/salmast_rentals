import React from 'react'
import { Layout } from '../../layout/Layout'
import { Home } from '../../components/home/Home'

const HomePage = () => {
  return (
    <div className='homePage'>
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default HomePage