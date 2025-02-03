import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import planesActions from '../../Store/Planes/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { urlHost } from '../../../url'
import toast, { Toaster } from 'react-hot-toast'
import TextArea from '../TexArea'


const { getDescripcion,getOpciones  } = planesActions


export default function Opcion1() {
    
    const dispatch = useDispatch()
    const [ tipoRespuesta, setTipoRespuesta ] = useState('')
    const [ respuesta, setRespuesta] = useState('')
    const opciones = useSelector(store => store.planes.opciones[0].opciones)
    const opcion = opciones?.find(({opcion}) => opcion === '1')
    // console.log(opcion)

    const handleGuardar = () => {
        let data = {
            opcion: '1',
            tipoRespuesta: tipoRespuesta,
            respuesta: respuesta || opcion?.respuesta
        }
        console.log(data)
        if(!data.tipoRespuesta){
            toast.error('debes seleccionar un tipo de respuesta',{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}})
        }else{
            const promesa = axios.post(`${urlHost}opcion`,data)
            toast.promise(
                promesa,
                {
                    loading: 'actualizando fechas',
                    success: (res) => {
                        dispatch(getOpciones())
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
            dispatch(getDescripcion())
            dispatch(getOpciones())
        },
        []
    )

    return (
        <div className="w-full min-h-screen bg-[#2A4364] flex items-center justify-center p-4">

            <div className="h-[90vh] w-[90%] flex flex-col items-center gap-5 rounded-md bg-[#405674]">

                <div className="mt-5">
                    <Typography className="capitalize text-center" color="white" fontSize={35}>
                        opcion # 1
                    </Typography>
                </div>

                <div className="w-[90%] flex flex-col items-center gap-3 mb-5 ">

                    <div className='flex'>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={tipoRespuesta === "texto"}
                                onChange={() => setTipoRespuesta("texto")}
                                sx={{ color: "white" }}
                            />
                            }
                            label="Texto"
                            sx={{ color: "white" }}
                        />
                    
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={tipoRespuesta === "multimedia"}
                                onChange={() => setTipoRespuesta("multimedia")}
                                sx={{ color: "white" }}
                            />
                            }
                            label="Multimedia"
                            sx={{ color: "white" }}
                        />
                    </div>

                    {
                        tipoRespuesta === 'texto' ?
                            <TextArea 
                                defaultValue={opcion?.respuesta}
                                value={respuesta} 
                                onChange={(e) => setRespuesta(e.target.value)} 
                            />
                            :
                            null
                    }

                    <Button
                        className='w-[80%]'
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={handleGuardar}
                    >
                        guardar opcion # 1
                    </Button>
                </div>

            </div>
            <Toaster position='top-right' />
        </div>
    )
}
