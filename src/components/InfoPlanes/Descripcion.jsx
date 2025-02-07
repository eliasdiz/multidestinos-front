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
    const [ saludo, setSaludo ] = useState("")
    const [ mensaje1, setMensaje1 ] = useState("")
    const [ mensaje2, setMensaje2 ] = useState("")
    const [ mensaje3, setMensaje3 ] = useState("")
    const [ menu, setMenu ] = useState("")
    const [ mensaje4, setMensaje4 ] = useState("")



const handleGuardar = () => {
    let data = {
        destino: destino || desActual.destino,
        saludo: saludo || desActual.saludo,
        mensaje1: mensaje1 || desActual.mensaje1,
        mensaje2: mensaje2 || desActual.mensaje2,
        mensaje3: mensaje3 || desActual.mensaje3,
        menu: menu || desActual.menu,
        mensaje4: mensaje4 || desActual.mensaje4
    }
    // console.log(data)
    const promesa = axios.put(`${urlHost}/descripcion`,data)
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



useEffect(
    () => {
        dispatch(getDescripcion())
    },
    []
)

return (
    <div className="w-full h-[100vh] bg-[#2A4364] flex items-center justify-center">

        <div className="h-[95%] w-[70%] flex flex-col items-center rounded-md bg-[#405674]">

            <div className="mt-2">
                <Typography className="capitalize text-center" color="white" fontSize={35}>
                    descripcion destino
                </Typography>
            </div>

            <div className="w-[85%] flex flex-col gap-3 mb-5 ">
                <Input
                    size="lg"
                    variant="soft"
                    placeholder={desActual?.destino !== '' ? desActual?.destino : 'Destino'}
                    sx={{backgroundColor:'#405674', color:'white', border:'1px solid white'}}
                    onChange={(e) => setDestino(e.target?.value)}
                    value={destino}
                />

                <div className="max-h-[4rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder={desActual?.saludo !== '' ? desActual?.saludo : 'Saludo'}
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setSaludo(e.target?.value)}
                        
                    />
                </div>

                <div className="max-h-[4rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder={desActual?.mensaje1 !== '' ? desActual?.mensaje1 : 'Mensaje # 1'}
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setMensaje1(e.target?.value)}
                    />
                </div>

                <div className="max-h-[4rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder={desActual?.mensaje2 !== '' ? desActual?.mensaje2 : 'Mensaje # 2'}
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setMensaje2(e.target?.value)}
                    />
                </div>

                <div className="max-h-[4rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder={desActual?.mensaje3 !== '' ? desActual?.mensaje3 : 'Mensaje # 3'}
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setMensaje3(e.target?.value)}
                    />
                </div>

                <div className="max-h-[9rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder={desActual?.menu !== '' ? desActual?.menu : 'Menu'}
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setMenu(e.target?.value)}
                    />
                </div>

                <div className="max-h-[4rem] overflow-y-auto border rounded-md">
                    <Textarea
                        variant="soft"
                        className="rounded-md"
                        placeholder={desActual?.mensaje4 !== '' ? desActual?.mensaje4 : 'Mensaje # 4'}
                        sx={{backgroundColor:'#405674', color:'white'}}
                        onChange={(e) => setMensaje4(e.target?.value)}
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

