import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import HeroLogo from '../../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@mui/icons-material'
import { Intro } from './intro'

const Hero = () => {
  return (
    <main className='min-h-[90vh] w-full'>
      <section className='h-[30vh] w-full'>
        <Intro />
      </section>

      <section className='flex w-full min-h-[60vh] justify-around pt-[3rem] items-center md:flex-row flex-col gap-y-[2rem]'>
        <div className='flex flex-col justify-center max-w-[27rem] md:max-w-[32rem] text-center sm:text-left'>
          <Typography className='text-sm font-bold text-blue-500'>
            #1 Learning platform
          </Typography>
          <Typography variant='h1' color='blue-gray' className='font-bold text-3xl md:text-5xl  pb-4'>
            Empower Your Tech Journey with <span className='text-blue-500 ps-3'>Nipix Tech</span>
          </Typography>
          <Typography variant='p' color='blue-gray' className='text-md font-medium'>
            Welcome to Nipix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap, <span className='text-blue-500 font-medium'>
            connecting minds from all corners of the globe, and embark on a transformative journey of learning and growth.</span>  
          </Typography>

          <Link to="/register">
            <Button variant='gradient' className='flex items-center gap-3 hover:shadow-lg mx-auto md:mx-0 mt-4 sm:mt-6'>
              Explore
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <img src={HeroLogo} alt='hero-sect-logo' className='w-full sm:w-auto max-w-lg pt-[2rem] sm:pt-0' />  
      </section>
    </main>
  )
}

export default Hero