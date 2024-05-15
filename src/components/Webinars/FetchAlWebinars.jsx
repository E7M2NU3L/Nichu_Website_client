import React from 'react'
import WebinarCard1 from './utils/WebinarCard1'
import { Typography } from '@material-tailwind/react'
import { BookingCard } from './utils/CardVariant'

const FetchAlWebinars = () => {
  return (
    <main>
        <section className='w-full'>
            <Typography className='text-center w-full flex text-3xl ps-[1.5rem] sm:ps-[3rem] py-[1.8rem] sm:py-[2.3rem] text-gray-800'>
                Upcoming <span className='text-blue-500 font-extrabold ps-2'>Webinars</span>
            </Typography>
            <div className='flex w-full justify-center items-center gap-x-[1.5rem] min-h-[90vh] flex-wrap gap-y-[2rem]'>
                <WebinarCard1 />
                <WebinarCard1 />
                <WebinarCard1 />
                <WebinarCard1 />
                <WebinarCard1 />
            </div>
        </section>

        <section className='w-full'>
            <Typography className='text-center w-full flex text-3xl ps-[1.5rem] sm:ps-[3rem] py-[1.8rem] sm:py-[2.3rem] text-gray-800'>
                Previous <span className='text-green-500 font-extrabold ps-2'>Webinars</span>
            </Typography>

            <section className='flex w-full justify-center items-center gap-x-[1.5rem] min-h-[90vh] flex-wrap gap-y-[2rem]'>
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
            </section>
        </section>
    </main>
  )
}

export default FetchAlWebinars