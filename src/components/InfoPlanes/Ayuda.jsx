import { Input, Textarea } from '@mui/joy'
import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import destinosActions from '../../Store/Planes/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { urlHost } from '../../../url'
import toast, { Toaster } from 'react-hot-toast'


const { getDescripcion, getAyuda } = destinosActions


export default function Ayuda() {

    const dispatch = useDispatch()
    const [ numeroAsesor, setNumeroAsesor ] = useState('') 
    const [ mensajeAsesor, setMensajeAsesor ] = useState('') 
    const [ mensajeCLiente, setMensajeCLiente ] = useState('') 
    const ayuda = useSelector(store => store.planes.ayuda)

    // console.log(ayuda)

    const handleGuardar = () => {
        let data = {
            teleAsesor: numeroAsesor || ayuda.teleAsesor,
            msjAsesor: mensajeAsesor || ayuda.msjAsesor,
            msjCliente: mensajeCLiente || ayuda.msjCliente
        }
        console.log(data)
        if(numeroAsesor === ''){
            toast.error('debes ingresar el numero del asesor',{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}})
        }else{
            const promesa = axios.put(`${urlHost}ayuda`,data)
            toast.promise(
                promesa,
                {
                    loading: 'guardando ayuda',
                    success: (res) => {
                        dispatch(getAyuda())
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
            dispatch(getAyuda())
        },
        []
    )

    return (
        <div className="w-full min-h-screen bg-[#2A4364] flex items-center justify-center p-4">
            
            <div className="w-[70%] flex flex-col items-center gap-5 rounded-md bg-[#405674]">

                <div className="p-3">
                    <Typography className="capitalize text-center" color="white" fontSize={35}>
                        ayuda
                    </Typography>
                </div>

                <div className="w-[85%] flex flex-col gap-3 mb-5 ">

                    <Input
                        size="lg"
                        variant="soft"
                        placeholder="Whatsapp Asesor"
                        sx={{backgroundColor:'#405674', color:'white', border:'1px solid white'}}
                        onChange={(e) => setNumeroAsesor(e.target.value)}
                        defaultValue={ayuda?.teleAsesor}
                    />
                    
                    <div className='max-h-[10rem] overflow-y-auto border rounded-md'>
                        <Textarea
                            variant="soft"
                            placeholder="Mensaje Asesor"
                            sx={{backgroundColor:'#405674', color:'white'}}
                            onChange={(e) => setMensajeAsesor(e.target.value)}
                            defaultValue={ayuda?.msjAsesor}
                        />
                    </div>

                    <div className='max-h-[10rem] overflow-y-auto border rounded-md'>
                        <Textarea
                            variant="soft"
                            placeholder="Mensaje Cliente"
                            sx={{backgroundColor:'#405674', color:'white'}}
                            onChange={(e) => setMensajeCLiente(e.target.value)}
                            defaultValue={ayuda?.msjCliente}
                        />
                    </div>

                    <Button
                        size="medium"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleGuardar}
                    >
                        guardar ayuda
                    </Button>
                </div>

            </div>
        <Toaster position='top-right' />
        </div>
    )
}
