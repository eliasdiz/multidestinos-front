import { Textarea } from '@mui/joy'
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function FechasPrecios() {
    
    const [ fechas, setFechas ] = useState('')

    const handleGuardar = () => {
        let data = {
            fechas: fechas
        }
        console.log(data)
    }



    return (
        <div className="w-full min-h-screen bg-[#2A4364] flex items-center justify-center p-4">

            <div className="w-[70%] flex flex-col items-center gap-5 rounded-md bg-[#405674]">

                <div className="mt-5">
                    <Typography className="capitalize text-center" color="white" fontSize={35}>
                        fechas - precios
                    </Typography>
                </div>

                <div className="w-[85%] flex flex-col gap-6 mb-5 ">

                    <Textarea 
                        variant="soft"
                        className="h-[20rem] rounded-md"
                        placeholder="Fechas y Precios"
                        sx={{backgroundColor:'#405674', border:'1px solid white', color:'white'}}
                        onChange={(e) => setFechas(e.target.value)}
                    />

                    <Button
                        size="medium"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleGuardar}
                    >
                        guardar fechas
                    </Button>
                </div>

            </div>
        </div>
    )
}
