import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import AboutPost from '../../../assets/images/about-poster1.jpg'
import { Link } from 'react-router-dom'
 
const About = () => {
  return (
    <div className='flex flex-col sm:flex-row min-h-[90vh] max-h-[100%] justify-around items-center' id='about'>
      <div className='w-full sm:w-1/2'>
        <img src={AboutPost} className='w-full h-full object-cover' />
      </div>
      <div className='max-w-[24rem] h-full bg-gradient-to-tr from-gray-200 via-blue-100 to-blue-gray-200' style={{
        backdropFilter: "blur(18px)",
        padding: "30px 25px"
      }} >
      <Typography className='' variant='h5'>
      <span className='ps-2 text-pink-600'>Nipixtech</span> is a forward-thinking technology company committed to solving real-world problems through innovative products and services. With a strong emphasis on cutting-edge technology and a passion for creating positive change, Nipixtech is at the forefront of transforming industries and improving lives.
      </Typography>
        <Button variant='gradient' className='mt-5' size='lg'>
          <Link to="/webinars">
            Go to Courses
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default About