import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import { Home } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { Link } from 'react-router-dom' 

const ResponsiveDialog = () => {
    return (
    <main className="w-full min-h-screen max-h-full flex items-center justify-center" style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        background: "#D9D9D9",
        backdropFilter: "blur(12px)"
    }}>
        <Card
            shadow={true}
            className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            You Payment has been Successful
          </Typography>
          <div className="flex gap-x-4 items-center justify-center py-2">
            <Home sx={{ color: green[500] }} />
            <Link to="/" className="text-white hover:text-gray-400">
                <Typography variant="h5" sx={{
                    color: "#fefedf",
                }}>
                    Back to homepage
                </Typography>    
            </Link>  
          </div>
          
          
        </CardBody>
      </Card>        
    </main>
    );
  }

export default ResponsiveDialog;