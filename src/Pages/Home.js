import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeSection from '../components/HomeSection/HomeSection'

const Home = () => {
  return (
    <>
        <Header/>
        <HomeSection/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Home