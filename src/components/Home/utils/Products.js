import { Typography } from '@material-tailwind/react'
import React from 'react'
import  Eager from '../../../assets/images/Eager.jpg'
import { AccordionVisionStyled } from './Accordion'
import CourseCard from './CourseCard'

const Products = () => {
  return (
    <main id="products">
      <Typography  variant='h2' color='blue-gray' className='mt-[2rem] flex font-extrabold justify-center items-center'>
        More from <span className='text-blue-500 font-bold ps-2'>Nipix</span>
      </Typography>

      <section className='flex justify-around items-center min-h-[70vh] max-h-full relative flex-col sm:flex-row w-full'>
          <div className='max-w-1/2 min-h-[40vh] max-h-[65vh] relative'>
            <img src={Eager} alt='absolute eagerness' className='sm:w-[65vh] w-[45vh] mx-auto h-[40vh] sm:h-[65vh] sm:pt-0 pt-[2rem]'  />
          </div>
          <div className='max-w-[32rem]'>
          <AccordionVisionStyled />
          </div>
      </section>

      <section>
      <Typography variant="h3" color="blue-gray" className="my-4 flex justify-center items-center">
                Courses For you
            </Typography>
        <CourseCard />
      </section>
    </main>
  )
}

export default Products