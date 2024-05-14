import React from 'react';
import WebinarRegister from './WebinarRegister';
import Webinarpayment from '../../pages/Payment';
import ResponsiveDialog from './ResponsiveDialog';
import { Stepper, Step, CardFooter, Button} from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";

const CourseForm = () => {
    // stepper state management
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
    
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    // Function to determine which component to render based on activeStep
    const renderStepComponent = () => {
        switch(activeStep) {
            case 0:
                return <WebinarRegister />;
            case 1:
                return <Webinarpayment />;
            case 2:
                return <ResponsiveDialog />;
            default:
                return null;
        }
    };

    return (
        <>
            {renderStepComponent()}
            <div className='w-full h-full bg-[#D9D9D9]'>
                <CardFooter className="pt-0 bg-[#D9D9D9] backdrop-blur-md" style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                }}>
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
            </div>
        </>
    );
}

export default CourseForm;
