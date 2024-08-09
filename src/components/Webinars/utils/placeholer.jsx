import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import WebinarCard from '../../Profile/utils/WebinarCard'
import Imagery from '../../../assets/images/Eager.jpg'

const PlaceHolder = () => {
  return (
    <div>
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
  )
}

export default PlaceHolder