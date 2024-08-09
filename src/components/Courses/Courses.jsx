import React, { useEffect, useState } from 'react';
import { HorizontalCard } from './utils/BigCard';
import { Typography } from '@material-tailwind/react';
import db_Service from '../../api/Database';
import { Box, CircularProgress, Container } from '@mui/material';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import Bg from '../../assets/images/sourses.jpg';

const Courses = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const req = await db_Service.GetCourses();
        setData(req.documents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  if (loading) {
    return (
      <main className='w-full min-h-[30vh] flex justify-center items-center'>
        <CircularProgress />
      </main>
    );
  }

  if (error) {
    return (
      <main className='w-full min-h-[30vh] flex justify-center items-center'>
        <Typography variant="h6" color="error">{error}</Typography>
      </main>
    );
  }

  return (
    <main className='flex flex-col bg-gray-100'>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={Bg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <Container maxWidth="md" className="relative text-center z-10 text-white">
          <Box mb={4}>
          <Typography className='text-4xl font-bold mb-4'>
                  Discover Our Exclusive Courses
                </Typography>
                <Typography className='text-lg mb-8'>
                  Enhance your skills with our expertly crafted courses designed to fit your learning needs.
                </Typography>
                <Button variant='contained'>
                  Explore Courses
                </Button>
          </Box>
        </Container>
      </section>

      {/* Main Content */}
      <section className='py-8 container mx-auto'>
        <Typography className='text-3xl font-bold text-center mb-12'>
          Awesome Courses For <span className='text-blue-500'>You</span>
        </Typography>

        <div className='grid grid-cols-1 md:grid-cols-3 space-x-6 space-y-8'>
          {data ? data.map((course) => (
            <HorizontalCard
              key={course.id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              link={course.link}
              linkText="Enroll Now"
              rating={course.rating}
              comments={course.comments}
            />
          )) : (
            <>
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            </>
          )}
        </div>
      </section>

      {/* Courses You May Like */}
      <section className='py-8 bg-gray-200'>
        <div className='container mx-auto text-center'>
          <Typography className='text-3xl font-bold mb-12'>
            Courses You May <span className='text-blue-500'>Like</span>
          </Typography>
          <div className='flex flex-wrap justify-center gap-x-6 gap-y-8'>
            {/* Example course cards */}
            <HorizontalCard
              title="Advanced Data Science"
              description="Dive deeper into data science and analytics."
              duration="8 Weeks"
              link="#"
              linkText="Learn More"
            />
            <HorizontalCard
              title="UI/UX Design Masterclass"
              description="Master the art of designing user-friendly interfaces."
              duration="6 Weeks"
              link="#"
              linkText="Learn More"
            />
            <HorizontalCard
              title="Full-Stack Development"
              description="Become a proficient full-stack developer."
              duration="12 Weeks"
              link="#"
              linkText="Learn More"
            />
            <HorizontalCard
              title="Full-Stack Development"
              description="Become a proficient full-stack developer."
              duration="12 Weeks"
              link="#"
              linkText="Learn More"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
