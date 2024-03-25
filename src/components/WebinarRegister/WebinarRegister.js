import React from 'react';
import './main.css';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    CardFooter
  } from "@material-tailwind/react";
  import { BuildOutlined, ChildCare,Functions, Person } from "@mui/icons-material";
  import { Stepper, Step} from "@material-tailwind/react";
  import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";

const ProfessionStates = [
    {
        value: "Student",
        label: <ChildCare />
    },
    {
        value: "Teacher",
        label: <Person />
    },
    {
        value: "Industrial Expert",
        label: <BuildOutlined />
    },
    {
        value: "Others",
        label: <Functions />
    }
]

const WebinarRegister = () => {
    // stepper state management
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className='flex justify-center items-center w-full' style={{
        minHeight: "90vh", height: "100%", paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#D9D9D9"
    }}>
        <Card color="transparent" className='blur-effect' shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Webinar Registration
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                
            <div className="mb-1 flex flex-col gap-6">
            <Input label="Full Name" size="lg" />
            <Input label="Mail ID" size="lg" />
            <Input label="Phone No." size="lg" />
            <Input label="Qualification" size="lg" />
                <Typography variant='small' color='blue-gray' className='mt-2 font-normal'>
                    I am a
                <Select
                        placeholder="Student"
                        className=" focus:!border-t-gray-900"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                        menuProps={{ className: "h-48" }}
                    >
                        {ProfessionStates.map((content) => (
                        <Option key={content.value} value={content.value}>
                            <div className="flex items-center gap-x-2">
                                {content.label}
                                {content.value}
                            </div>
                        </Option>
                        ))}
            </Select>
                </Typography>
            </div>
            <Checkbox
                label={
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                >
                    I agree the
                    <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                    >
                    &nbsp;Terms and Conditions
                    </a>
                </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
            />
            <CardFooter className="pt-0">
            <div className="w-full py-4 px-8">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step onClick={() => setActiveStep(0)}>
                    <HomeIcon className="h-5 w-5" />
                    </Step>
                    <Step onClick={() => setActiveStep(1)}>
                    <UserIcon className="h-5 w-5" />
                    </Step>
                    <Step onClick={() => setActiveStep(2)}>
                    <CogIcon className="h-5 w-5" />
                    </Step>
                </Stepper>
                <div className="mt-16 flex justify-between">
                    <Button onClick={handlePrev} style={{
                        backgroundColor: "#1181D8"
                    }} disabled={isFirstStep}>
                    Prev
                    </Button>
                    <Button style={{
                        backgroundColor: "#1181D8"
                    }} onClick={handleNext} disabled={isLastStep}>
                    Next
                    </Button>
                    </div>
                </div>
            </CardFooter>
            </form>
        </Card>
    </div>
  )
}

export default WebinarRegister;