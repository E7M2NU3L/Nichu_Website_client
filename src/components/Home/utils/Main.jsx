import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Main() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth < 768;

  const testimonials = [
    {
      name: "Jane Smith",
      role: "Software Engineer",
      quote: "The one-on-one mentoring sessions were invaluable in helping me master the fundamentals of programming. The project-based learning approach really solidified my understanding.",
      imgSrc: ""
    },
    {
      name: "Michael Rodriguez",
      role: "Electrical Engineer",
      quote: "The hands-on projects in electronics were a game-changer for me. I was able to apply what I learned in the one-on-one sessions and see immediate results.",
      imgSrc: ""
    },
    {
      name: "Lisa Wang",
      role: "Computer Science Student",
      quote: "The one-on-one mentoring sessions and project-based learning approach have been instrumental in helping me develop my programming skills. I'm now more confident in my abilities.",
      imgSrc: ""
    },
    {
      name: "John Doe",
      role: "Aspiring Robotics Engineer",
      quote: "The project-based learning approach in electronics has been incredibly helpful. I'm now able to design and build my own circuits with confidence.",
      imgSrc: ""
    },
    {
      name: "Sarah Anderson",
      role: "Freelance Web Developer",
      quote: "The one-on-one mentoring sessions have been invaluable in helping me improve my web development skills. I'm now able to take on more complex projects with confidence.",
      imgSrc: ""
    },
    {
      name: "Tom Lee",
      role: "Embedded Systems Engineer",
      quote: "The project-based learning approach in electronics has been a game-changer for me. I'm now able to design and build complex embedded systems with ease.",
      imgSrc: ""
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Hear from our students about their experiences with our one-on-one courses and project-based learning.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img className="w-16 h-16 mb-4 rounded-full border-2 border-gray-300" src={testimonial.imgSrc} alt={testimonial.name} />
              <div className="text-center">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
                <blockquote className="mt-4 text-sm italic text-gray-600">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
