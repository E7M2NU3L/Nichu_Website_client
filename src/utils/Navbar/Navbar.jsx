import React, { useEffect, useState } from 'react'
import './main.css'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import DrawerRight from './utils/DrawerRight'
import LogoutModal from './utils/LogoutModal'
import { Shop2 } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { authStatus } from '../../features/authSlice'
import { databases } from '../../config/AppWrite'
import { Query } from 'appwrite'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const Navbar = () => {

  const authInfo = useSelector(authStatus);
  const authentication = authInfo.isLoggedin;

  const fetchUserData = async (email) => {
    try {
      const userData = await databases.listDocuments(
        "65ec182e15ec8ffdec9d", "65ec184a65550085f404",
        [
          Query.equal('email', [email])
        ]
      );

      console.log(userData.documents);

      return userData.documents;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const {isError : isFailedToFetch, data : userData, isPending : isFetchingUserData} = useQuery({
    queryFn : (email) => fetchUserData(email),
  });

  console.log(userData);

  useEffect(() => {
    if (isFailedToFetch) {
      toast.error("Failed to Fetch Profile URI");
    }
  }, [isFailedToFetch]);

  return (
    <div className='flex justify-between items-center w-full min-h-[10vh] bg-dark-1 px-4'>
      <Link to="/">
      <div className='rounded-full flex justify-center items-center gap-x-[1rem]'>
          <img src={Logo} alt='admin-panel-nipix' className='rounded-full w-12 h-12  hover:translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out' />
          <h1 className='text-xl hidden md:flex text-dark-2 font-semibold'>
            Nipix <span className='text-blue-400 font-bold'>Tech</span> 
          </h1>
      </div>
      </Link>
      
      <ul className='md:flex items-center gap-x-[2rem] justify-center hidden'>
      <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='bg-blue-500 text-white px-4 py-2 rounded-md' to="/">
            Home
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/courses ">
            Courses
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/webinars">
            Webinars
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/products ">
            Products
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/gallery">
            Gallery
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/about-us">
            About us
          </Link>
        </li>
      </ul>

      
    
       <>
        {(authentication) ? (
          <React.Fragment>
            <div className='rounded-lg md:flex justify-around items-center gap-x-[1rem] hidden '>
              <Link to="/cart">
                <Shop2 />
              </Link>
              <h1 className='text-md text-dark-4 font-bold hover:text-dark-4 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                <Link to="/profile">
                  {isFetchingUserData ? (
                    <>
                      <img src='fetchedImage' alt='' className='h-12 w-12 rounded-full shadow-lg border border-blue-500' />
                    </>
                  ) : (
                    <>
                      <img src='' alt='fetchingImage' className='h-12 w-12 rounded-full shadow-lg border border-blue-500' />
                    </>
                  )}
                </Link>
              </h1>
              <LogoutModal />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='rounded-lg md:flex justify-around items-center gap-x-[1rem] hidden '>
            <button className='text-md text-white bg-blue-500 px-2 py-1 rounded-lg shadow-md font-semibold hover:translate-x-1 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out'>
              <Link to="/login">
                Login
              </Link>
            </button> 
            <h1 className='text-md text-dark-4 font-bold hover:text-dark-4 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Link to="/register">
                sign up
              </Link>
            </h1>
            </div>
            
          </React.Fragment>
        )}
       </>

    <div className='md:hidden block'>
      <DrawerRight />
    </div>

    </div>
  )
}

export default Navbar