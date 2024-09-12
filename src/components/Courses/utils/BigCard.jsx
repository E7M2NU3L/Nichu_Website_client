import {
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowRight } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  import { FaPaperclip } from "react-icons/fa";
  import { CardMedia, CardContent, Card } from "@mui/material";
  import AssetImage from '../../../assets/images/carousel3.jpg';
  
  const CourseContentFull = [
    {
      id: 1,
      title: "Machine Learning [12 Weeks]",
      description: "Master the fundamentals of machine learning, algorithms, and data analysis in this comprehensive 12-week course.",
      image: AssetImage,
      payment: "499/-",
      learners: "1500+ learners"
    }
  ];
  
  export function HorizontalCard() {
    return (
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {CourseContentFull.map((course) => (
          <Card
            key={course.id}
            className="w-[300px] sm:w-[400px] flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            {/* Card Image */}
            <CardMedia
              component="img"
              image={course.image}
              alt={course.title}
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
  
            {/* Card Content */}
            <CardContent className="p-4 flex flex-col flex-grow">
              <Typography variant="h6" className="font-semibold text-black">
                {course.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                {course.description}
              </Typography>
  
              {/* Payment Section */}
              <div className="mt-auto">
                <Typography className="text-xl font-semibold text-blue-500">
                  Rs. {course.payment}
                </Typography>
                <Typography className="text-sm text-gray-500 mb-3">
                  {course.learners}
                </Typography>
  
                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Link to={`/courses/details/${course.id}`}>
                    <Button
                      variant="contained"
                      color="green"
                      className="flex items-center gap-x-2"
                    >
                      View Details <FaPaperclip />
                    </Button>
                  </Link>
                  <Link to={`/courses/register`}>
                    <Button
                      variant="contained"
                      color="blue"
                      className="flex items-center gap-x-2"
                    >
                      Register <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  