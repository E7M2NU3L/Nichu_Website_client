import { Button, Card, CardContent } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchWebinars } from '../../../api/db/webinars'

const WebinarAnother = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['webinars'],
    queryFn: FetchWebinars,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Something Went Wrong");
    }
  }, [isError]);

  if (isLoading) {
    return (
      <div className='max-w-7xl mx-auto'>
        <main className='min-h-[90vh] flex items-center justify-center'>
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='max-w-7xl mx-auto'>
        <main className='min-h-[90vh] flex items-center justify-center'>
          <p>Failed to load data. Please try again later.</p>
        </main>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <main className="flex-1 py-10 px-4 md:px-6">
        <div className="container mx-auto">
          <section className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
              <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Upcoming Webinar
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Join us for an exciting webinar on the latest trends in web development.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Button variant='contained' color='primary'>
                      <Link to={"/webinar/register"}>
                        Register Now
                      </Link>
                    </Button>
                    <Button variant='outlined' color='primary'>
                      <Link to={"/webinars/12345"}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="bg-muted rounded-lg p-6">
                    <h2 className="text-2xl font-bold">Building Scalable Web Apps</h2>
                    <p className="text-muted-foreground">August 15, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='webinar'>
            <h2 className="text-xl font-bold mb-6">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Example Webinar Cards */}
              {data?.documents.map((webinar, index) => (
                <Link to={`/webinars/${webinar.$id}`} key={index}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">{webinar.Webinar_Name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {webinar.Webinar_Description}
                      </p>
                      <div className="flex items-center mb-4">
                        <CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{webinar.Webinar_Date}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <ClockIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{webinar.Duration}</span>
                      </div>
                      <Button className="w-full" variant='contained' color='info'>
                        <Link to={`/webinar/register/${webinar.$id}`}>
                          Register
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-bold mb-6">Previous Webinars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data?.documents.map((webinar, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{webinar.Webinar_Name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {webinar.Webinar_Description}
                    </p>
                    <div className="flex items-center mb-4">
                      <CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{webinar.Webinar_Date}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <ClockIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{webinar.Duration}</span>
                    </div>
                    <Button className="w-full" variant='contained' disabled={webinar.isRecorded} color='info'>
                      <Link to={webinar.Webinar_URL} target='_blank'>
                        Watch
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default WebinarAnother

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function ClockIcon(props) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
