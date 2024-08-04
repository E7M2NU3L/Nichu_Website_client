import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import WebinarCard from './utils/WebinarCard';
import SectionTitle from './utils/SectionTitle';
import SearchBar from './utils/Searchbar';
import Bg from '../../assets/images/bg.jpg'
import Imagery from '../../assets/images/IOT.jpg';

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
      <Link to="#" passHref>
        <Button variant="contained" color="primary">
          Browse Webinars
        </Button>
      </Link>
    </Box>
  </Container>
</section>


<section className="relative w-full py-12 md:py-24 lg:py-32">
  <Container>
    <Box mb={6} textAlign="center">
      <SectionTitle title="Previous Webinars" subtitle="Check out our past webinar recordings." />
    </Box>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Introduction to React"
          description="Learn the fundamentals of React, a popular JavaScript library for building user interfaces."
          duration="60 min"
          link="#"
          linkText="Watch Now"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Mastering Responsive Design"
          description="Discover techniques to create responsive and mobile-friendly websites."
          duration="90 min"
          link="#"
          linkText="Watch Now"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Optimizing Web Performance"
          description="Learn techniques to improve the speed and performance of your website."
          duration="75 min"
          link="#"
          linkText="Watch Now"
        />
      </Grid>
      {/* Add more cards as needed */}
    </Grid>
  </Container>
</section>

<section className="relative w-full py-12 md:py-24 lg:py-32">
  <Container>
    <Box mb={6} textAlign="center">
      <SectionTitle title="Our Webinar Collection" subtitle="Explore our wide range of webinars." />
      <SearchBar />
    </Box>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Introduction to React"
          description="Learn the fundamentals of React, a popular JavaScript library for building user interfaces."
          duration="60 min"
          link="#"
          linkText="Sign Up"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Mastering Responsive Design"
          description="Discover techniques to create responsive and mobile-friendly websites."
          duration="90 min"
          link="#"
          linkText="Sign Up"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Optimizing Web Performance"
          description="Learn techniques to improve the speed and performance of your website."
          duration="75 min"
          link="#"
          linkText="Sign Up"
        />
      </Grid>
      {/* Add more cards as needed */}
    </Grid>
  </Container>
</section>

<section className="relative w-full py-12 md:py-24 lg:py-32">
  <Container>
    <Box mb={6} textAlign="center">
      <SectionTitle title="Top Rated Webinars" subtitle="Check out the webinars with the highest ratings." />
    </Box>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Introduction to React"
          description="Learn the fundamentals of React, a popular JavaScript library for building user interfaces."
          duration="60 min"
          rating={4.5}
          comments={32}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Mastering Responsive Design"
          description="Discover techniques to create responsive and mobile-friendly websites."
          duration="90 min"
          rating={4.5}
          comments={32}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <WebinarCard
        imageUrl={Imagery}
          title="Optimizing Web Performance"
          description="Learn techniques to improve the speed and performance of your website."
          duration="75 min"
          rating={4.5}
          comments={32}
        />
      </Grid>
      {/* Add more cards as needed */}
    </Grid>
  </Container>
</section>

    </div>
  );
}
