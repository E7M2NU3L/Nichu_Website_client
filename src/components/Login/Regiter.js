import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import './main.css';
import React from "react";
import { Link } from "react-router-dom";
import authService from "../../api/Auth";
 

const Regiter = () => {
  
  // Details
  const [username, setUsername] = React.useState('');
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');

  // function handlers
  const handleUsername = (e) => setUsername(e.target.value);

  const handleEmail = (e) => SetEmail(e.target.value);

  const handlePassword = (e) => SetPassword(e.target.value);

  // handle submit form
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const response = await authService.RegisterUser([username, email, password]);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-tr from-[#98e8ff] via-[#b7d7e1] to-[#c0e0eb] w-full"  style={{
      minHeight: "90vh", height: "100%", paddingTop: "3rem", paddingBottom: "3rem"
    }}>
    <div className="background">
    <Card className="w-96 card-style" style={{
        
      }}>
      <CardHeader
        variant="gradient"
        style={{
          backgroundColor: "#1181D8"
        }}
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row w-full h-full py-2 px-2 justify-around items-center gap-x-4 gap-y-3">
          <div className="border bg-transparent flex justify-center items-center py-1 border-blue-gray-200 hover:bg-slate-500" style={{
            width: "100%"
          }}>
            <Google className=""/>
          </div>
          <div className="border bg-transparent flex justify-center items-center py-1 border-blue-gray-200 hover:bg-slate-500" style={{
            width: "100%"
          }}>
            <Facebook className=""/>
          </div>
          <div className="border bg-transparent flex justify-center items-center py-1 border-blue-gray-200 hover:bg-slate-500" style={{
            width: "100%"
          }}>
            <GitHub className=""/>
          </div>
        </div>
        <Input label="Username" size="lg" className="pb-0" value={username} onChange={handleUsername} />
        <Input label="Email" size="lg" className="pb-0" value={email} onChange={handleEmail} />
        <Input label="Password" size="lg" value={password} onChange={handlePassword} />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" style={{
            color: "#1181D8"
          }} />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button fullWidth style={{
          backgroundColor: "#1181D8"
        }} onSubmit={handleSubmitForm}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            style={{
              color: "#1181D8"
            }}
            className="ml-1 font-bold"
          >
            <Link to="/register">
              Sign up
            </Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
    </div>
    </main>

  )
}

export default Regiter