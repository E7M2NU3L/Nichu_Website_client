import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Box, CardContent, CardMedia, Card, Container, Tabs, Typography, Tab } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image1 from '../../../assets/images/carousel2.jpg'
import Image2 from '../../../assets/images/carousel3.jpg'
import Image3 from '../../../assets/images/carousel5.jpg'
import Image4 from '../../../assets/images/carousel7.jpg'

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
    image: Image1,
    category: "web-development",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: "Dive into the world of efficient data structures and algorithms.",
    image: Image2,
    category: "computer-science",
  },
  {
    id: 3,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native.",
    image: Image3,
    category: "mobile-development",
  },
  {
    id: 4,
    title: "Machine Learning for Beginners",
    description: "Explore the fundamentals of machine learning and its applications.",
    image: Image4,
    category: "machine-learning",
  },
  {
    id: 5,
    title: "Introduction to Game Development",
    description: "Learn the basics of game development using Unity.",
    image: Image1,
    category: "game-development",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    description: "Gain a comprehensive understanding of cybersecurity principles.",
    image: Image2,
    category: "cybersecurity",
  },
  {
    id: 7,
    title: "Advanced Web Development with React",
    description: "Dive deeper into building modern web applications with React.",
    image: Image3,
    category: "web-development",
  },
  {
    id: 8,
    title: "Algorithms and Problem Solving",
    description: "Enhance your problem-solving skills with advanced algorithms.",
    image: Image4,
    category: "computer-science",
  },
  {
    id: 9,
    title: "Flutter for Cross-Platform Development",
    description: "Learn to build high-performance mobile apps with Flutter.",
    image: Image1,
    category: "mobile-development",
  },
  {
    id: 10,
    title: "Deep Learning with TensorFlow",
    description: "Explore the power of deep learning using TensorFlow.",
    image: Image2,
    category: "machine-learning",
  },
  {
    id: 11,
    title: "Game Development with Unreal Engine",
    description: "Create stunning 3D games using Unreal Engine.",
    image: Image3,
    category: "game-development",
  },
  {
    id: 12,
    title: "Ethical Hacking and Penetration Testing",
    description: "Learn the techniques used by ethical hackers to secure systems.",
    image: Image4,
    category: "cybersecurity",
  },
];

const categories = [
  "all",
  "web-development",
  "computer-science",
  "mobile-development",
  "machine-learning",
  "game-development",
  "cybersecurity",
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredCourses = activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container maxWidth="lg" className="py-12 bg-background">
      <Box className="mb-8">
        <section className="py-[3.2rem] flex flex-col gap-y-[1.2rem]">
          <Typography variant="h2" component="h2" className="font-bold text-center mb-4">
            Explore Our Courses
          </Typography>
          <Typography variant="h4" className="text-center mb-6 text-muted-foreground">
            Learn Tech from Latest Courses
            Explore 175+ Premium Courses with New Course Additions every Month.
          </Typography>
        </section>
        <Tabs
          value={activeCategory}
          onChange={(e, newValue) => setActiveCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="course categories"
          className="mb-6"
        >
          {categories.map((category) => (
            <Tab
              key={category}
              label={category.replace("-", " ").toUpperCase()}
              value={category}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </Tabs>
      </Box>
      <Box className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <Box
          id="scroll-container"
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide gap-4 pb-4"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Card className="w-[300px] h-full">
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  className="rounded-t-lg w-full aspect-[3/2]"
                />
                <CardContent className="p-4">
                  <Typography variant="h6" className="font-semibold">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" className="text-muted-foreground">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </Box>
    </Container>
  );
};

export default Products;
