import React from 'react'
import SideBar from './utils/SideBar'
import { HorizontalCard } from './utils/BigCard'

const Courses = () => {
  return (
    <main className='flex flex-col sm:flex-row' style={{
        backgroundColor: "#D9D9D9"
      }}>
        <div className='hidden sm:block sticky lg:flex-1'>
          <SideBar />
        </div>
        <div className='max-h-[95vh] overflow-y-scroll' style={{
        padding: "1rem 1rem",
        flex: 4,
      }}>
            <HorizontalCard />        
        </div>
    </main>
  )
}

export default Courses