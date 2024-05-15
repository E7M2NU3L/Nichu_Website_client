import React from 'react'
import Hero from './utils/Hero'
import Main from './utils/Main'
import Products from './utils/Products'
import About from './utils/About'
import Webinars from './utils/Webinars'

const Home = () => {
  return (
    <>
        <Hero />
        <Products />
        <Webinars />
        <Main />
        <About />
    </>
  )
}

export default Home