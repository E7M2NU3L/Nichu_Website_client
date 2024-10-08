import {
  Input,
  Button,
} from "@material-tailwind/react";
import './main.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../api/Auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import db_Service from "../../api/Database";
import { CreateUser } from "../../api/db/users";

const Register = () => {
  // state handlers
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [clicked, setClicked] = useState(false);
  const [btnText, setText] = useState('Sign up');

  // function handlers
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      await authService.GoogleSignin();
    } catch (error) {
      if (error) {
        toast.error(error.message , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }
  }

  const handleGithubAuth = async () => {
    try {
      await authService.GitHubSignin();
    } catch (error) {
      if (error) {
        toast.error(error.message , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }
  }

  // registration functionality
  const OnclickSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    setText('Loading...');
    try {
      const response = await authService.RegisterUser({
        username,
        email,
        password
      });

      console.log("Returned response", response);

      if (!response) return null;

      const promise = await CreateUser({username, email, password, userId : response});

      if (!promise) return null;

      else {
          toast.success("Registration successful!");
          setTimeout(() => {
            navigate('/login');
          }, 3000);
      }
    } catch (error) {
      toast.error(error.message);
      setClicked(false);
      setText('Sign up');
    }
  }

  return (
    <main className="flex justify-center items-center" style={{
      minHeight: "90vh", height: "100%", paddingTop: "3rem", paddingBottom: "3rem"
    }}>
      <div className="space-y-4 shadow-2xl rounded-lg px-[1.2rem] py-[1.5rem]">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="text-muted-foreground">Create a new account to get started.</p>
        </div>
        <form className="space-y-4" onSubmit={OnclickSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="John Doe" required value={username} onChange={handleUsername} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={handleEmail} />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" required value={password} onChange={handlePassword} />
          </div>
          <Button type="submit" className="w-full" disabled={clicked}>
            {btnText}
          </Button>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-20 bg-muted-foreground/20" />
              <span className="text-muted-foreground">or sign in with</span>
              <div className="h-px w-20 bg-muted-foreground/20" />
            </div>
            <div className="flex items-center justify-around gap-[0.8rem] px-3 flex-wrap">
              <Button variant="outline" className="max-w-md mx-auto flex justify-around items-center" onClick={handleGoogleAuth}>
                <ChromeIcon className="h-5 w-5 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="max-w-md mx-auto flex justify-around items-center" Onclick={handleGithubAuth}>
                <GithubIcon className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Register;

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
