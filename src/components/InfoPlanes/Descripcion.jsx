import  React, { useEffect } from "react"
import { useState } from "react"
import { Button, Typography } from "@mui/material"
import { Input, Textarea } from '@mui/joy'
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import { urlHost } from '../../../url.js'
import { useDispatch, useSelector } from "react-redux"
import planesActions from '../../Store/Planes/actions.js'



const { getDescripcion } = planesActions



export default function Descripcion() {

    const dispatch = useDispatch()
    const desActual = useSelector(store => store.planes.descripcion)
    const [ destino, setDestino ] = useState("")
    const [ descripcion, setDescripcion ] = useState("")

// console.log(desActual)

const handleGuardar = () => {
    if(destino === '' && desActual.destino === ''){
        toast.error('debes ingresar un destino',{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}})
    }else if(descripcion === '' && desActual.descripcion === ''){
        toast.error('desbes ingresar una descripcion',{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}})
    }
    else{
        let data = {
            destino: destino || desActual.destino,
            descripcion: descripcion || desActual.descripcion
        }
        const promesa = axios.put(`${urlHost}plan/descripcion`,data)
        toast.promise(
            promesa,
            {
                loading: 'actualizando descripcion',
                success: (res) => {
                    dispatch(getDescripcion())
                    return <>{res.data.message}</>
                },
                error: (error) => {
                    return <>{error.response.data.message}</>
                }
            },{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}}
        )
    }
}


useEffect(
    () => {
        dispatch(getDescripcion())
    },
    []
)

return (
    <div className="w-full min-h-screen bg-[#2A4364] flex items-center justify-center p-4">

        <div className="w-[70%] flex flex-col items-center gap-5 rounded-md bg-[#405674]">

            <div className="mt-5">
                <Typography className="capitalize text-center" color="white" fontSize={35}>
                    descripcion destino
                </Typography>
            </div>

            <div className="w-[85%] flex flex-col gap-6 mb-5 ">
                <div className="capitalize">
                    <Input
                        size="lg"
                        variant="soft"
                        placeholder="Destino"
                        sx={{backgroundColor:'#405674', color:'white', border:'1px solid white'}}
                        onChange={(e) => setDestino(e.target?.value)}
                        defaultValue={desActual?.destino}
                    />
                </div>

                <div className="max-h-[20rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder="Descripcion"
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setDescripcion(e.target?.value)}
                        defaultValue={desActual?.descripcion}
                    />
                </div>

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
        <Toaster position="top-right" />
    </div>
)
}

