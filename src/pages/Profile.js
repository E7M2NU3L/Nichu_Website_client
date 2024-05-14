import React from 'react'
import { ProfileCard } from '../components/Profile/ProfileCard'
import { Typography } from '@material-tailwind/react'
import CourseCard from '../components/Profile/CoursesCard'
import WebinarCard from '../components/Profile/WebinarCard'

const Profile = () => {
  return (
   <section>
    <Typography variant='h2' className='flex justify-center items-center w-full h-full py-[2rem]'>
        <span className='pe-2 text-blue-500 font-semibold'>Profile</span> Page
    </Typography>

    <div className='min-h-[90vh] flex flex-col sm:flex-row justify-between items-center w-full mx-auto max-h-full'>
        <div style={{
            flex:1
        }}
        className='sticky max-h-[90vh]'
        >
            <ProfileCard />
        </div>
        <div style={{
            flex:3
        }}
        className='overflow-y-auto max-h-[90vh]'
        >
            <section >
                <Typography variant = "h5" className='pt-[2rem] flex justify-center items-center'>
                    Enrolled Courses
                </Typography>
                <CourseCard />
            </section>
            <hr className='my-[2rem] w-3/4 h-1 bg-blue-500 mx-auto' />
            <section>
                <Typography variant = "h5" className='pt-[2rem] flex justify-center items-center'>
                    Registered Webinars
                </Typography>
                <WebinarCard />
            </section>
        </div>
    </div>
   </section>
  )
}

export default Profile

