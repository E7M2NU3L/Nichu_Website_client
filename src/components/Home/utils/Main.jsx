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
      name: "Shobana P",
      role: "UI/UX Design Intern",
      quote: "way of their teaching and explaining each topics was able understand the concepts",
      imgSrc: ""
    },
    {
      name: "Pasala Sathvika",
      role: "AIML Intern",
      quote: "Good teaching on basics and hands-on training . Very informative and interesting project ideas.  ",
      imgSrc: ""
    },
    {
      name: "Premachand",
      role: "AIML Intern",
      quote: "Very detailed and excellent course for people who wants to know more bout ai and ml ",
      imgSrc: ""
    },
    {
      name: "Vijay Prasanth ",
      role: "AIML Intern",
      quote: "Very good teaching and I like the way sir is teaching both technically and practically and some sessions by sriram sir was very motivable and I have a lots of fun.",
      imgSrc: ""
    },
    {
      name: "Tejeswar S",
      role: "UI/UX Design Intern",
      quote: "The explanation of every tools of Figma was explained clearly ",
      imgSrc: ""
    },
    {
      name: "Akshaya R",
      role: "AIML Interns",
      quote: " Supportive mentor and good way of teaching",
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
