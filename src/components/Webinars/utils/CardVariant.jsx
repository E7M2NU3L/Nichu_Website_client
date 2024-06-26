import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { HeartBroken, ViewAgenda } from "@mui/icons-material";
import { Link } from "react-router-dom";
   
  export function BookingCard() {
    return (
        <Card className="w-full max-w-[20rem] shadow-lg shadow-gray-500 bg-gray-100 hover:scale-95 transition-all duration-200 ease-in-out">
        <CardHeader floated={false} color="blue-gray">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
           <HeartBroken />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Computer Vision
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
          <Typography color="gray">
            Enter a freshly updated and thoughtfully furnished peaceful home
            surrounded by ancient trees, stone walls, and open meadows.
          </Typography>

        </CardBody>
        <CardFooter className="pt-3">
        <button className="flex gap-x-[8px] px-5 py-2 text-white rounded-lg shadow-md font-semibold hover:font-bold hover:translate-x-2 hover:scale-110 bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out">
            <a className="flex gap-x-[8px]" href="https://youtu.be/dzdiMRovyK0?si=sCKzygEA4TCEkVjX">
            Recorded Session <ViewAgenda />
            </a>
          </button>
        </CardFooter>
      </Card>
    );
  }