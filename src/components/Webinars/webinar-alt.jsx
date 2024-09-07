import { Button } from "@mui/material"
import {Link} from "react-router-dom"
import PlaceHolder from '../../assets/images/react.jpg'

export default function WebinarAlt() {
  return (
    <div className="flex flex-col min-h-[90vh] max-w-7xl mx-auto">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Mastering React: A Comprehensive Webinar
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join us for an in-depth exploration of React, the popular JavaScript library for building user
                  interfaces. In this webinar, you'll learn the fundamentals, best practices, and advanced techniques to
                  take your React development skills to the next level.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="contained"><Link to={"/webinar/register"}>Register Now</Link></Button>
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Watch Intro Video
                </Link>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src={PlaceHolder}
                width="650"
                height="366"
                alt="Webinar"
                className="h-full w-full object-cover"
                style={{ aspectRatio: "650/366", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <main className="flex justify-around w-full  items-center py-12 md:py-24 lg:py-32 flex-col md:flex-row gap-y-7 flex-wrap md:flex-nowrap">
      <section className=" bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Topics Covered</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                In this comprehensive webinar, you'll learn about the following key topics:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">React Fundamentals</h3>
                    <p className="text-muted-foreground">
                      Learn the core concepts of React, including components, state, and props.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">Advanced React Techniques</h3>
                    <p className="text-muted-foreground">
                      Explore advanced React features like hooks, context, and performance optimization.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">State Management with Redux</h3>
                    <p className="text-muted-foreground">
                      Understand how to manage application state using the popular Redux library.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">Routing and Navigation</h3>
                    <p className="text-muted-foreground">
                      Learn how to implement client-side routing and navigation in your React applications.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Secure your spot for this comprehensive React webinar at the special early bird price.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Rs: 197/-</h3>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Early Bird</div>
                </div>
                <p className="mt-2 mb-4 text-muted-foreground">Regular price: <span className="">Rs: 1999/-</span></p>
                <Button className="mt-4 w-full" variant="outlined"><Link to={"/webinar/register"}>Register Now</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Instructor"
                width="300"
                height="300"
                className="rounded-full"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Your Instructor</h2>
              <p className="text-muted-foreground md:text-xl">
                John Doe is a seasoned software engineer with over 10 years of experience in building scalable web
                applications using React. He is the author of several popular React libraries and has been a speaker at
                numerous industry conferences.
              </p>
              <div className="flex items-center gap-4">
                <LinkedinIcon className="h-6 w-6 text-primary" />
                <TwitterIcon className="h-6 w-6 text-primary" />
                <GithubIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
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
  
  
  function LinkedinIcon(props) {
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }