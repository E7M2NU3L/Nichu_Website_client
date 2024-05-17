import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import HeroLogo from '../../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight } from '@mui/icons-material'

const Hero = () => {
  return (
    <main className='min-h-[90vh] w-full flex flex-col sm:flex-row mx-auto items-center justify-around max-h-[100%] pt-[3rem] pb-[3rem] sm:pt-0 sm:pb-0'>
      <div className='flex flex-col justify-center max-w-[24rem] gap-y-3'>
        <Typography variant='h3' color='blue-gray' className='font-extrabold'>
        Empower Your Tech Journey with NIpix Tech
        </Typography>
        <Typography className='h4' color='blue-gray'>
          <TypeAnimation
                sequence={[
                  "Discover Your Tech Potential", 1000, "Forge Your Path in the Digital Age", 1000, "Empowering Futures Through Technology", 1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '22px', display: 'inline-block', fontWeight: "bold" }}
                repeat={Infinity}
              />
        </Typography>
        <Typography variant='p' color='blue-gray' className='text-md font-semibold'>
        Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap, <span className='text-blue-500 font-semibold'>
        connecting minds from all corners of the globe, and embark on a transformative journey of learning and growth.</span>  
        </Typography>

        <Link to="/register">
        <Button variant='gradient' className='flex items-center gap-3 hover:shadow-lg'>
            Explore
            <ArrowRight />
        </Button>
        </Link>

      </div>

      <img src={HeroLogo} alt='hero-sect-logo' className='pt-[2rem] sm:pt-0' />  
    </main>
  )
}

export default Hero