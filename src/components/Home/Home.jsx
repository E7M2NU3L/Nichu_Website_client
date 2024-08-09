import React from 'react'
import Hero from './utils/Hero'
import Main from './utils/Main'
import About from './utils/About'
import Webinars from './utils/Webinars'
import { useSelector } from 'react-redux'
import { authStatus } from '../../features/authSlice'
import CTA from './utils/cta'
import Products from './utils/Products'
import Simplify from './utils/simplify'

const Home = () => {
  const authInfo = useSelector(authStatus);
  console.log(authInfo);
  return (
    <main className=''>
        <Hero />
        <Products />
        <CTA />
        <Webinars />
        <Main />
        <About />
        <Simplify />
    </main>
  )
}

export default Home