import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore, PlayCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CourseDetails() {
  return (
    <div className="flex flex-col min-h-[90vh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-black to-black/90">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Mastering React: Build Modern Web Applications
            </h1>
            <p className="max-w-[600px] text-white/90 md:text-xl">
              Learn to build powerful, scalable, and responsive web applications using React, the most popular
              JavaScript library for building user interfaces.
            </p>
            <div className="flex gap-4">
              <Button variant='contained'><Link to={"/courses/register"}>Enroll Now</Link></Button>
              <div className="flex items-center justify-center text-white">
                <PlayCircle className="mr-2 h-6 w-6" />
                <span className="text-sm font-medium">Watch Intro Video</span>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <div />
            </div>
          </div>
        </div>
      </section>
     <main className='max-w-7xl mx-auto'>
     <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Concepts You Will Learn</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This course covers a wide range of topics and skills to help you become a proficient React developer.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">React Fundamentals</h3>
              <p className="text-muted-foreground">
                Learn the core concepts of React, including components, state, and props.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">React Hooks</h3>
              <p className="text-muted-foreground">
                Explore the power of React Hooks and how to use them effectively in your applications.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">State Management</h3>
              <p className="text-muted-foreground">
                Understand how to manage state in React applications using built-in and external state management
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">Routing and Navigation</h3>
              <p className="text-muted-foreground">
                Learn how to implement client-side routing and navigation in your React applications.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">UI Styling</h3>
              <p className="text-muted-foreground">
                Explore various techniques for styling your React components, including CSS-in-JS and CSS Modules.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">API Integrations</h3>
              <p className="text-muted-foreground">
                Learn how to integrate your React applications with backend APIs and handle data fetching and updates.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">Testing and Debugging</h3>
              <p className="text-muted-foreground">
                Understand how to write and run tests for your React components, and debug issues that may arise.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <CircleCheckIcon className="text-black h-6 w-6" />
              <h3 className="text-lg font-semibold">Deployment and Hosting</h3>
              <p className="text-muted-foreground">
                Learn how to deploy your React applications to various hosting platforms and ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Course Details</h2>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="text-muted-foreground h-6 w-6" />
                  <span className="text-muted-foreground">
                    <strong>30</strong> Lectures
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="text-muted-foreground h-6 w-6" />
                  <span className="text-muted-foreground">
                    <strong>8 hours</strong> of video
                  </span>
                </div>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This comprehensive course will take you from beginner to advanced React developer. You'll learn how to
                build modern, responsive, and scalable web applications using React, the most popular JavaScript library
                for building user interfaces.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What You'll Learn</h2>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Fundamental React concepts and best practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Effective use of React Hooks for state management and side effects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Implementing client-side routing and navigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Styling React components using CSS-in-JS and CSS Modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Integrating React applications with backend APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Testing and debugging React components</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckIcon className="text-black h-6 w-6" />
                  <span>Deploying and hosting React applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Instructor"
                className="rounded-full w-[200px] h-[200px] object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Instructor</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Senior Software Engineer, React Expert</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                John Doe is a seasoned software engineer with over 8 years of experience in building web applications.
                He is a React expert and has worked on numerous projects, ranging from small startups to large
                enterprises. John is passionate about teaching and sharing his knowledge with others.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some common questions and answers about the course.
            </p>
          </div>
          <div className="mt-8 grid gap-4">
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                Who is this course for?
                </AccordionSummary>
                <AccordionDetails>
                This course is designed for anyone who wants to learn React, from complete beginners to experienced
                            developers looking to expand their skills. Whether you're a web developer, designer, or just
                            starting your programming journey, this course will provide you with the knowledge and hands-on
                            experience to become a proficient React developer.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                What prior knowledge do I need?
                </AccordionSummary>
                <AccordionDetails>
                To get the most out of this course, you should have a basic understanding of JavaScript and web
                            development concepts. However, even if you're new to programming, the course will start with the
                            fundamentals and gradually build up your knowledge, so you can still benefit from it.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                What if I get stuck or have questions?
                </AccordionSummary>
                <AccordionDetails>
                Yes, upon successful completion of the course, you will receive a certificate of completion that you
                            can use to showcase your newly acquired React skills to potential employers or clients.
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Become a React Expert?
            </h2>
          </div>
        </div>
      </section>
     </main>
    </div>
  )
}

function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function CircleCheckIcon(props) {
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
      <path d="m9 12 2 2 4-4" />
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