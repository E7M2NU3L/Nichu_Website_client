import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../../../assets/images/another.jpg'

const Simplify = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Potential with nipixTech
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore a wide range of online courses and interactive webinars to enhance your skills and
                    knowledge.
                  </p>
                </div>
                <div className="flex gap-2">
                 <Button variant='contained'>
                 <Link to={"/courses"}>
                    Explore Courses
                  </Link>
                 </Button>
                  <Button color='secondary' variant='outlined'>
                  <Link to={"/webinars"}>
                    Join Webinars
                  </Link>
                  </Button>
                </div>
              </div>
              <img
                src={Placeholder}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose nipixTech?</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Learning Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive and engaging learning experience, with expert-led courses and
                  interactive webinars.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <AwardIcon className="mx-auto h-12 w-12 text-primary" />
                <div className="text-sm font-medium leading-none group-hover:underline">Expert-Led Courses</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Learn from industry experts and stay ahead of the curve.
                </div>
              </div>
              <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <AccessibilityIcon className="mx-auto h-12 w-12 text-primary" />
                <div className="text-sm font-medium leading-none group-hover:underline">Interactive Webinars</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Engage with experts and peers in real-time discussions.
                </div>
              </div>
              <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <LaptopIcon className="mx-auto h-12 w-12 text-primary" />
                <div className="text-sm font-medium leading-none group-hover:underline">Flexible Learning</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Learn at your own pace, anytime, anywhere.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get Started</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Potential with nipixTech
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our wide range of courses and webinars to develop new skills and advance your career.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
              <Button variant='contained'>
                 <Link to={"/courses"}>
                    Explore Courses
                  </Link>
                 </Button>
                  <Button color='success' variant='outlined'>
                  <Link to={"/webinars"}>
                    Join Webinars
                  </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Simplify

function AccessibilityIcon(props) {
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
        <circle cx="16" cy="4" r="1" />
        <path d="m18 19 1-7-6 1" />
        <path d="m5 8 3-3 5.5 3-2.36 3.5" />
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </svg>
    )
  }
  
  
  function AwardIcon(props) {
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
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    )
  }
  
  
  function BookIcon(props) {
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  
  function LaptopIcon(props) {
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
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    )
  }