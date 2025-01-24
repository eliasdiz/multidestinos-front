import  React from "react"
import { useState } from "react"
import { Button, Typography } from "@mui/material"
import { Input, Textarea } from '@mui/joy'



export default function Descripcion() {


const [ destino, setDestino ] = useState("")
const [ descripcion, setDescripcion ] = useState("")

const handleGuardar = () => {
    let data = {
        destino: destino,
        descripcion: descripcion
    }

    console.log(data)
}


return (
    <div className="w-full min-h-screen bg-[#2A4364] flex items-center justify-center p-4">

        <div className="w-[70%] flex flex-col items-center gap-5 rounded-md bg-[#405674]">

            <div className="mt-5">
                <Typography className="capitalize text-center" color="white" fontSize={35}>
                    descripcion destino
                </Typography>
            </div>

            <div className="w-[85%] flex flex-col gap-6 mb-5 ">
                <Input
                    variant="soft"
                    placeholder="Destino"
                    className="p-3 "
                    sx={{backgroundColor:'#405674', color:'white', border:'1px solid white'}}
                    onChange={(e) => setDestino(e.target.value)}
                />

                <Textarea 
                    variant="soft"
                    className="h-[20rem] rounded-md"
                    placeholder="Descripcion"
                    sx={{backgroundColor:'#405674', border:'1px solid white', color:'white'}}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleGuardar}
                >
                    guardar descripcion
                </Button>
            </div>

        </div>

    </div>
)
}

