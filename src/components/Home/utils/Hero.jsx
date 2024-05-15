import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import HeroLogo from '../../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

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

        <Button variant='gradient' className='flex items-center gap-3 hover:shadow-lg'>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0 -1028.4)">
              <g>
                <path d="m7 1028.4-5 12h8l-4 10 14-14h-9l6-8z" fill="#f1c40f" />
                <path fill="#f39c12" d="m7 1028.4-5 12h3l5-12zm3 12-4 10 3-3 4-7z" />
                <path fill="#e67e22" d="m10 1040.4-0.4062 1h2.9062l0.5-1h-3z" />
              </g>
            </g>
          </svg>
          <Link to="/register">
            Explore
          </Link>
        </Button>
      </div>

      <img src={HeroLogo} alt='hero-sect-logo' className='pt-[2rem] sm:pt-0' />  
    </main>
  )
}

export default Hero