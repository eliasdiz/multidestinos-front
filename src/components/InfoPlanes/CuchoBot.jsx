import React, { useEffect, useState } from 'react';
import { Button, Stepper, Step, StepButton, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { ArrowFatLeft, ArrowFatRight } from '@phosphor-icons/react';
import { Input } from '@mui/joy';
import Select from 'react-select'
import planesActions from '../../Store/Planes/actions'
import { useDispatch } from 'react-redux';


const { getDescripcion } = planesActions


export default function CuchoBot() {

    const dispatch = useDispatch()
    const steps = ['Descripcion', 'Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4 ', 'Opcion 5', 'Ayuda']
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

    const stylesSelect = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#405674", // Fondo del select
            borderColor: "white",
            color: "white",
            "&:hover": {
                borderColor: "#fff",
            },
            boxShadow: state.isFocused ? "0 0 5px rgba(255,255,255,0.5)" : "none",
        }),
        singleValue: (base) => ({
            ...base,
            color: "white", // Color del texto seleccionado
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: "#405674", // Fondo del menú desplegable
        }),
        option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? "#2A4364" : "#405674", // Cambia el fondo al pasar el mouse
            color: "white",
        }),
        placeholder: (base) => ({
            ...base,
            color: 'white'
        })
    }

    useEffect(
        () => {
            dispatch(getDescripcion())
        },
        []
    )


    // STEP 0 DESCRIPCION

    const [ palabraClave1, setPalabraClave1 ] = useState('')
    const [ tipoRes1, setTipoRes1 ] = useState(null)
    const [ res1, setRes1 ] = useState('')
    const optionsRes1 = [{value:'opcion1', label:'opcion1'},{value:'opcion2', label:'opcion2'}]



    return (
        <div className="w-full flex flex-col items-center bg-[#2A4364] ">

            <div className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-4 bg-[#405674] mt-16 p-3 rounded-md'>
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
                    <div className='h-[70%] w-[60%] flex flex-col justify-center items-center gap-4 border rounded-md'>
                        <Input
                            variant='soft'
                            placeholder='palabra clave'
                            size='md'
                            sx={{backgroundColor:'#405674', color:'white', border:'1px solid white',textTransform:'capitalize'}}
                            className='w-[50%]'
                            onChange={(e) => setPalabraClave1(e.target.value)}
                            value={palabraClave1}
                        />

                        <div className='flex'>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipoRes1 === "Texto"}
                                    onChange={() => setTipoRes1("Texto")}
                                    sx={{ color: "white" }}
                                />
                                }
                                label="Texto"
                                sx={{ color: "white" }}
                            />

                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={tipoRes1 === "Multimedia"}
                                    onChange={() => setTipoRes1("Multimedia")}
                                    sx={{ color: "white" }}
                                />
                                }
                                label="Multimedia"
                                sx={{ color: "white" }}
                            />

                        </div>

                        <Select
                            className='w-[50%] capitalize'
                            styles={stylesSelect}
                            placeholder=''
                            options={optionsRes1}
                        />

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
