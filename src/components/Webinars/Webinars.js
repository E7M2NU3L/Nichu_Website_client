import React from 'react'
import SideBar from './utils/SideBar'
import { HorizontalCard } from './utils/BigCard'
import { CardHeader, Typography } from '@material-tailwind/react'

const Webinars = () => {
  return (
    <>
    <main className='flex flex-col sm:flex-row' style={{
      backgroundColor: "#D9D9D9"
    }}>
      <div className='hidden sm:block lg:flex-1'>
        <SideBar />
      </div>
      <div className='' style={{
        padding: "1rem 1rem",
        flex: 4
      }}>
        <hr className='bg-blue-700 w-full px-3 h-2' />
        <div className='pt-6 flex justify-center'>
          <HorizontalCard />
          <br />
          
        </div>
      </div>
    </main>

    <main className='bg-[#D9D9D9] backdrop-blur-3 py-12'>
      <CardHeader className='rounded-md shadow-md px-2 py-4 border border-blue-400'>
        <div className='flex justify-around items-center w-full h-full'>
          <section>
            <Typography variant = "h5">
              Registered
            </Typography>
            <Typography variant = "p">
              20
            </Typography>
          </section>

          <section>
            <Typography variant = "h5">
              Registration Deadline
            </Typography>
            <Typography variant = "p">
              20/05/2024
            </Typography>
          </section>
        </div>
      </CardHeader>
    </main>
    </>
  )
}

export default Webinars