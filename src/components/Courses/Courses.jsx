import React from 'react'
import { HorizontalCard } from './utils/BigCard'
import { Typography } from '@material-tailwind/react'

const Courses = () => {
  return (
    <main className='flex flex-col sm:flex-row bg-gray-100'>
        <div className='min-h-[95vh]'>

          <section className='pb-[2rem]'>
            <main className='w-full text-center justify-center py-[2rem]'>
            <Typography className='font-bold text-3xl'>
            Awesome Courses For <span className='font-bold text-blue-500'>You</span>
          </Typography>
            </main>

            <main className='justify-center items-center gap-x-[1.4rem] gap-y-[2rem] flex flex-wrap'>
              <HorizontalCard />     
              <HorizontalCard />     
              <HorizontalCard />     
              <HorizontalCard />     
            </main>
          </section>       
        </div>
    </main>
  )
}

export default Courses