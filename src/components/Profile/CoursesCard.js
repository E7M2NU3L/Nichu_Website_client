import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CoursesContent = [
    {
        id:1,
        title: "UI/UX Review Check",
        description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id:2,
        title: "UI/UX Review Check",
        description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
]
   
const CourseCard = () =>  {
    return (
      <main className="flex flex-wrap justify-around items-center gap-x-[1rem]">
        {CoursesContent.map((content) => (
            <Card className="mt-6 w-[20rem]" key={content.id}>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {content.title}
              </Typography>
              <Typography>
                {content.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>
                <Link to={content.link} key={content.id}>
                    Continue Watching
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    );
  }

export default CourseCard;