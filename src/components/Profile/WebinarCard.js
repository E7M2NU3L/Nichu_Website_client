import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const WebinarContent = [{
    id:1,
    title: "Cyber Security",
    description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    linkText: "Watch Video"
},
{
    id:2,
    title: "Cyber Security",
    description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    linkText: "Watch Video"
}
]
   
const WebinarCard = () => {
    return (
        <main className="flex flex-wrap justify-around items-center gap-x-[1rem]">
            {WebinarContent.map((content) => (
                <Card className="mt-6 w-[20rem]" key={content.id}>
                    <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {content.title}
                    </Typography>
                    <Typography>
                        {content.description}
                    </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button className="rounded-lg shadow-md hover:shadow-lg" variant="gradient">
                        <a href={content.link} key={content.id} >
                            {content.linkText}
                        </a>
                    </Button>
                    </CardFooter>
                </Card>
            ) )}
        </main>
    );
  }

export default WebinarCard