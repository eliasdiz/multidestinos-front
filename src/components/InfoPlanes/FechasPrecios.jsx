import { Textarea } from '@mui/joy'
import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import planesActions from '../../Store/Planes/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { urlHost } from '../../../url'
import toast, { Toaster } from 'react-hot-toast'


const { getFechas, getDescripcion  } = planesActions


export default function FechasPrecios() {
    
    const dispatch = useDispatch()
    const [ fechas, setFechas ] = useState('')
    const fechasActuales = useSelector(store => store.planes.fechas.fechas)

    // console.log(fechasActuales)

    const handleGuardar = () => {
        if(fechas === '' && fechasActuales !== ''){
            toast.error('debes ingresar fechas',{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}})
        }else{
            let data = {
                fechas: fechas || fechasActuales
            }
            // console.log(data)
            const promesa = axios.put(`${urlHost}plan/fecha`,data)
            toast.promise(
                promesa,
                {
                    loading: 'actualizando fechas',
                    success: (res) => {
                        dispatch(getFechas())
                        return <>{res.data.message}</>
                    },
                    error: (error) => {
                        console.log(error)
                        return <>{error.response.data.message}</>
                    }
                },{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}}   
            )
        }
    }


    useEffect(
        () => {
            dispatch(getFechas())
            dispatch(getDescripcion())
        },
        []
    )

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
                        defaultValue={fechasActuales}
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
            <Toaster position='top-right' />
        </div>
    )
}
