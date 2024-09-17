import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { SiProgress } from "react-icons/si";

// Sample courses content
const CoursesContent = [
    {
        id: 1,
        title: "UI/UX Review Check",
        description: "Learn the fundamentals of UI/UX design with a comprehensive course.",
        link: "/courses/single/12345"
    },
    {
        id: 2,
        title: "Web Development Basics",
        description: "Start your journey into web development by learning HTML, CSS, and JavaScript.",
        link: "/courses/single/67890"
    },
    {
        id: 3,
        title: "Advanced JavaScript Techniques",
        description: "Master JavaScript by exploring modern features and techniques.",
        link: "/courses/single/11223"
    }
]

const CourseCard = () => {
    return (
        <main className="w-full min-h-[90vh] px-4 py-8 overflow-y-auto">
            {/* Page Title */}
            <Typography className="text-3xl font-bold text-black mb-8">
                Your <span className="text-blue-500">Courses</span>
            </Typography>

            {/* Courses Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {CoursesContent.map((content) => (
                    <Card 
                        className="w-full max-w-xs bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg transform hover:-translate-y-1 hover:scale-105"
                        key={content.id}
                    >
                        <CardBody>
                            {/* Card Title */}
                            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
                                {content.title}
                            </Typography>
                            
                            {/* Card Description */}
                            <Typography className="text-sm text-gray-600 mb-4">
                                {content.description}
                            </Typography>
                        </CardBody>

                        {/* Card Footer with Button */}
                        <CardFooter className="pt-0 flex justify-end">
                            <Button
                                className="flex items-center gap-x-2 bg-blue-500 text-white shadow-md rounded-lg px-4 py-2 transition-transform duration-200 ease-in-out hover:bg-blue-600 hover:translate-x-1"
                                variant="gradient"
                            >
                                <a href={content.link} className="flex items-center gap-x-1">
                                    Continue <SiProgress size={18} />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </main>
    );
}

export default CourseCard;
