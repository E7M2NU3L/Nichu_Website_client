import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import Profile from '../../assets/images/bg-img.png'

const UserStatus = [{
    name: "Nishok",
    Role: "Student",
    PhoneNumber:"8608626244",
    image: Profile
}]
   
  export function ProfileCard() {
    return (
      <main>
        {UserStatus.map((content) => (
            <Card className="w-96">
            <CardHeader floated={false} className="h-80">
              <img src={`${content.image}`} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {content.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {content.Role}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {content.PhoneNumber}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              <Tooltip content="Like">
                <Typography
                  as="a"
                  href="#facebook"
                  variant="lead"
                  color="blue"
                  textGradient
                >
                  <i className="fab fa-facebook" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#twitter"
                  variant="lead"
                  color="light-blue"
                  textGradient
                >
                  <i className="fab fa-twitter" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#instagram"
                  variant="lead"
                  color="purple"
                  textGradient
                >
                  <i className="fab fa-instagram" />
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        ))}
      </main>
    );
  }