import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Bg from '../../assets/images/bg.jpg'
import WebinarAnother from './utils/webinar-another';

export default function FetchAllWebinars() {
  return (
    <div className="w-full">
     <section className="relative w-full py-12 md:py-24 lg:py-32">
  <div className="absolute inset-0">
    <img src={Bg} alt="Background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <Container maxWidth="md" className="relative text-center z-10 text-white">
    <Box mb={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Discover Our Webinar Collection
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Explore a wide range of informative and engaging webinars to enhance your knowledge and skills.
      </Typography>
      <Link to="#webinar" passHref>
        <Button variant="contained" color="primary">
          Browse Webinars
        </Button>
      </Link>
    </Box>
  </Container>
      </section>
      <WebinarAnother />
    </div>
  );
}
