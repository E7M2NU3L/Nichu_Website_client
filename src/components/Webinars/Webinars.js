import React from 'react'
import SideBar from './utils/SideBar'
import { HorizontalCard } from './utils/BigCard'
import { BookingCard } from './utils/CardVariant'
import { HorizontalCard2 } from './utils/Cards'

const Webinars = () => {
  return (
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
        <div className='pt-6'>
          <HorizontalCard />
        </div>
      </div>
    </main>
  )
}

export default Webinars