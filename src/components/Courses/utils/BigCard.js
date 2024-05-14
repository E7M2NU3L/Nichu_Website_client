import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    List,
    ListItem,
  } from "@material-tailwind/react";
  import Cyber from '../../../assets/images/CyberSecurity.png'
import { CalendarMonth, CreditCard,Equalizer,VideoCall } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './utils.css'

const CourseContentFull = [{
  id:1,
  title: "Machine Learning [12 Weeks]",
  description: "Machine Learning Description",
  image: "images",
  payment: "499/-"
}]
   
  export function HorizontalCard() {
    return (
      <main>
        {CourseContentFull.map((content) => (
          <Card className="w-full flex-col sm:flex-row" key={content.id} style={{
            border: "1px solid transparent",
            borderTopLeftRadius: "3rem",
            borderTopRightRadius: "3rem",
            borderBottomLeftRadius:"3rem",
            borderBottomRightRadius: "3rem",
          }}>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 shrink-0 rounded-r-none"
            >
              <img
                src={Cyber}
                alt="webinar-thumbnail"
                className="h-full w-[45vh] card-image rounded-none object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" color="gray" className="mb-4 uppercase">
                {content.title}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                <List>
                  <ListItem className="flex gap-3">
                    <CreditCard />
                    Interactive Learning
                  </ListItem>
                  <ListItem className="flex gap-3">
                    <VideoCall />
                    Python and Underlying theory Knowledge
                  </ListItem>
                  <ListItem className="flex gap-3">
                    <CalendarMonth />
                    !2 Weeks <Equalizer /> 72 Videos
                  </ListItem>
                </List>
              </Typography>
              <div className="flex justify-around flex-col sm:flex-row gap-y-2 w-full mx-auto " style={{
                width: "22rem"
              }}>
                <div className="border border-blue-400 flex justify-center items-center py-1">
                  <Typography variant="p" style={{
                    padding: "1px 22px"
                  }}>
                    Online
                  </Typography>
                </div>
              <div className="flex justify-between items-center gap-2">
                <Typography variant="small">
                  Rs. {content.payment}
                </Typography>
                <Link to="/courses/register" className="inline-block">
                  <Button variant="button" color="blue" className="flex items-center gap-2">
                    Register
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </main>
    );
  }