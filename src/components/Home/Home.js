import React from 'react'
import Hero from './utils/Hero'
import Main from './utils/Main'
import Products from './utils/Products'
import Services from './utils/Services'
import About from './utils/About'

const Home = () => {
  return (
    <>
        <Hero />
        <Main />
        <Products />
        <Services />
        <About />
    </>
  )
}

export default Home