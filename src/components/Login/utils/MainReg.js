import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import Personal from "../Personal";
import Regiter from "../Regiter";
import ReturnCard from "../ReturnCard";
 
const MainReg = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const renderWithStepper = () => {
    switch(activeStep){
      case 0:
        return <Personal />
      case 1: 
        return <Regiter />
      case 2: 
        return <ReturnCard />
      default: 
        return null;
    }
  }
 
  return (
    <>
    {renderWithStepper()}
    <main className="bg-[#c0e0eb] pb-12">
    <div className="w-full py-4 px-8 bg-[#c0e0eb] backdrop-blur-md" style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                }}>
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
        <Button onClick={handlePrev} color="blue" disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} color="blue" disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
    </main>
    </>
  );
}

export default MainReg;