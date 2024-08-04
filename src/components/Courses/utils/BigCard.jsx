import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";
import Cyber from '../../../assets/images/CyberSecurity.png'
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './utils.css'

const CourseContentFull = [{
  id: 1,
  title: "Machine Learning [12 Weeks]",
  description: "Machine Learning Description",
  image: "images",
  payment: "499/-",
  learners: "1500"
}]

export function HorizontalCard() {
  return (
      <Link className="flex flex-wrap justify-center gap-4 p-4" to={"/courses/single/12334"}>
          {CourseContentFull.map((content) => (
              <Card
                  className="w-[300px] sm:w-[400px] min-h-[50vh] flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                  key={content.id}
              >
                  <CardHeader
                      shadow={false}
                      floated={false}
                      className="relative w-full rounded-t-lg overflow-hidden"
                  >
                      <img
                          src={Cyber}
                          alt="webinar-thumbnail"
                          className="w-full h-48 relative object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-white text-black text-sm px-2 py-1 rounded-lg">
                          <Typography className="text-xs font-medium">
                              {content.learners} Learners
                          </Typography>
                      </div>
                  </CardHeader>

                  <CardBody className="p-4 flex flex-col flex-1">
                      {/* Remove Title */}
                      <section className="flex flex-col mb-3">
                          <Typography className="text-sm font-light text-center mb-1">
                              {content.description}
                          </Typography>
                          <Typography className="text-md font-medium text-center">
                              Prof. Nishok
                          </Typography>
                      </section>

                      <Typography className="text-xs font-light mb-4 text-center">
                          Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap.
                      </Typography>

                      <section className="flex flex-col items-center mt-auto">
                          <Typography className="text-lg font-semibold text-blue-500 mb-2">
                              Rs. {content.payment}
                          </Typography>
                          <Link to="/courses/register">
                              <Button
                                  variant="button"
                                  color="blue"
                                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
                              >
                                  Register <ArrowRight />
                              </Button>
                          </Link>
                      </section>
                  </CardBody>
              </Card>
          ))}
      </Link>
  );
}
