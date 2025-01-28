import React, { useState } from 'react';
import { Button, Stepper, Step, StepButton, Typography } from '@mui/material';
import { ArrowFatLeft, ArrowFatRight } from '@phosphor-icons/react';



export default function CuchoBot() {

    const steps = ['Descripcion', 'Opcion 1', 'Opcion 2', 'Opcion 3']
    const [activeStep, setActiveStep] = useState(0)
    

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <div className="w-full flex flex-col items-center bg-[#2A4364] ">

            <div className='w-[70%] h-[70%] flex flex-col justify-center items-center gap-4 bg-[#405674] mt-16 p-3 rounded-md'>
                <div className='w-full'>
                    <Stepper 
                        activeStep={activeStep} 
                        alternativeLabel 
                        nonLinear
                    >
                        {
                            steps.map((label, index) => (
                                <Step key={index}>
                                    <StepButton onClick={() => handleStepClick(index)}>
                                        <Typography color='white'>
                                            {label}
                                        </Typography>
                                    </StepButton>
                                </Step>
                            ))
                        }
                    </Stepper>
                </div>

                {activeStep === 0 &&(
                    <div className='h-[60%] w-[60%] border rounded-md'>

                    </div>
                )}

                {activeStep === 1 &&(
                    <div className='h-[60%] w-[60%] border rounded-md'>

                    </div>
                )}

                {activeStep === 2 &&(
                    <div className='h-[60%] w-[60%] border rounded-md'>

                    </div>
                )}

                {activeStep === 3 &&(
                    <div className='h-[60%] w-[60%] border rounded-md'>

                    </div>
                )}

                <div className="flex gap-4 mt-4">
                    <Button 
                        variant="contained" 
                        onClick={handleBack} 
                        disabled={activeStep === 0}
                    >
                        <ArrowFatLeft size={32} weight='duotone' /> 
                    </Button>

                    <Button 
                        variant="contained" 
                        onClick={handleNext} 
                        disabled={activeStep === steps.length - 1}
                    >
                        <ArrowFatRight size={32} weight='duotone' /> 
                    </Button>
                </div>
            </div>
        </div>
    );
}
