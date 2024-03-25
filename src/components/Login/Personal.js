import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
    Select,
    Option
  } from "@material-tailwind/react";
  import { BuildOutlined, ChildCare,Functions, Person } from "@mui/icons-material";
  import './main.css';
  import React from "react";

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

const Personal = () => {
    
    // stepper state management
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
    
  return (
    <main className="flex justify-center items-center w-full"  style={{
        minHeight: "90vh", height: "100%", paddingTop: "3rem", paddingBottom: "3rem"
      }}>
      <div className="background">
      <Card className="w-96 card-style" style={{
          
        }}>
        <CardHeader
          variant="gradient"
          style={{
            backgroundColor: "#1181D8"
          }}
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h4" color="white">
            User Details
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
        <Input label="First Name" size="lg" />
          <Input label="Last Name" size="lg" className="pb-0" />
          <Typography  variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium">
            Profession
            <Select
                        placeholder="Student"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
          <Input label="Description" size="lg" />
          <Input label="highest Qualification" />
        </CardBody>
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
      </Card>
      </div>
      </main>
  )
}

export default Personal