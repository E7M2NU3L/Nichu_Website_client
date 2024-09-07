import React from 'react'
import LogoImage from '../assets/images/about-us.png'
import FounderImage from '../assets/images/Founder.png'
import Sriram from '../assets/images/sriram.png'
import Bharath from '../assets/images/bharath.png'

const AboutUs = () => {
  return (
    <div
    className='min-h-screen px-4 md:px-0 w-full max-w-7xl mx-auto'
    >
        <section className='max-w-md py-12 flex-col md:py-20 lg:py-24 mx-auto text-center justify-center items-center flex'>
            <h1 className='text-5xl font-semibold text-blue-500'>ABOUT US</h1>
            <img src={LogoImage} alt='about-us-into' className='max-w-md h-96 object-contain' />
        </section>

        <section className='text-center max-w-7xl mx-auto'>
            <p className='text-lg font-medium'>
            At Nipix Technology, we are dedicated to empowering the next generation of tech enthusiasts and professionals. Founded with a passion for hands-on learning and innovation, we offer a range of practical workshops, online courses, and seminars designed to make technology accessible and engaging. From our Tech Spark Kit and beginner-level Arduino projects to advanced courses in Python, IoT, C++, and UI/UX Design, we provide valuable learning experiences that inspire and equip individuals to excel in the tech world. Additionally, 
            </p>
            <br />
            <p className='text-lg font-medium'>
            we specialize in setting up robotics labs for schools, creating environments that foster creativity, innovation, and a deeper understanding of technology. Join us in exploring new technologies, expanding your skills, and shaping the future of innovation.
            </p>
        </section>

        <section className='text-center relative py-12 md:py-20 lg:py-24  min-h-[40vh]'>
            <main className='mb-8'>
            <h1 className='font-bold text-5xl text-blue-500'>THE FOUNDERS</h1>
            <h1 className='font-semibold text-2xl text-black'>
            Empowering the Future with Passion and Innovation
            </h1>
            </main>

            <main className='w-full h-[40vh] mt-7'>
                <img src={FounderImage} alt='founder-image' className='h-full w-full object-contain' />
            </main>
        </section>

        <section className='max-w-7xl mx-auto shadow-2xl my-12 md:my-20 lg:my-24 p-5'>
            <main className='border border-dashed border-blue-500 p-3'>
                <p className='text-lg font-medium'>
                    Nishok and Prashanth, the young and visionary minds behind Nipix Technology, launched the company in 2023 with a shared passion for revolutionizing education through practical learning. Despite starting without any prior background in the industry, they have achieved remarkable milestones together. Their journey began with a hands-on robotics workshop at Avadi Government School, where they successfully trained 100 students. This was just the beginning.
                </p>
                <br />
                <p className='text-lg font-medium'>    
                    Since then, Nipix Technology has trained over 600 students through more than five workshops across schools and colleges, making a significant impact on young learners. They are now gearing up for a grand Project Expo in Thanjavur on August 1, 2024, where government officials will witness the results of their dedication. The Nipix team is committed to providing a 5-day intensive training session before the expo, transforming students from beginners to proficient in Arduino, sensors, actuators, and Python programming. This level of effort and dedication is what drives Nipix Technology to deliver exceptional learning experiences in every workshop.
                </p>
            </main>
        </section>

        <section className='py-12 md:py-20 lg:py-24 min-h-[50vh] md:flex-row flex-col gap-y-7 md:gap-y-0 flex justify-between items-center'>
            <main className='max-w-md'>
                <h1 className='text-blue-500 text-5xl font-bold'>
                    SRIRAM <span className='ps-2 text-black'>V</span>
                </h1>

                <h1 className='text-black text-2xl font-semibold border-b-2 pb-2 border-b-blue-800'>
                Nipix Technology-COO
                </h1>

                <h1 className='text-lg mt-3 font-normal'>
                I specialize in business development and leverage my skills in networking and building strong connections to drive our company’s growth and success.
                </h1>
            </main>
            <img src={Sriram} alt='sriram' className='h-full w-full max-w-md' />
        </section>

        <section className='py-12 md:py-20 lg:py-24 min-h-[50vh] md:flex-row flex-col gap-y-7 md:gap-y-0 flex justify-between items-center'>
            <img src={Bharath} alt='sriram' className='h-full w-full max-w-md' />
            <main className='max-w-md'>
                <h1 className='text-blue-500 text-5xl font-bold'>
                BHARATH <span className='ps-2 text-black'>U</span>
                </h1>

                <h1 className='text-black text-2xl font-semibold border-b-2 pb-2 border-b-blue-800'>
                Nipix Technology-CTO
                </h1>

                <h1 className='text-lg mt-3 font-normal'>
                The future belongs to those who empower others. As CTO of Nipix Tech, with a focus on Software Development, IoT, Robotics, and AI, I believe that by inspiring and educating the next generation, we unlock their full potential and drive innovation forward. My mission is to turn passion into progress and students into leaders.
                </h1>
            </main>
        </section>
    </div>
  )
}

export default AboutUs