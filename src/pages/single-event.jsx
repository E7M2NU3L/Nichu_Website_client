import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import {} from 'react-router-dom'

const SingleEvent = () => {
    useEffect(() => {
        const fetchSingleEvent = async () => {
            try {
                const link = "";
            } catch (error) {
                if (error instanceof Error) toast.error(error.message);
                else toast.error("Unknown Error");
            }
        }
    }, [])
  return (
    <div>SingleEvent</div>
  )
}

export default SingleEvent