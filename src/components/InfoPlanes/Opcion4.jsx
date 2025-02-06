import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import planesActions from '../../Store/Planes/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { urlHost } from '../../../url'
import toast, { Toaster } from 'react-hot-toast'
import TextArea from '../TexArea'
import MediaArea from '../MediaArea'


const { getDescripcion,getOpciones  } = planesActions


export default function Opcion4() {
    
    const dispatch = useDispatch()
    const [ tipoRespuesta, setTipoRespuesta ] = useState('')
    const [ respuesta, setRespuesta] = useState('')
    const opciones = useSelector(store => store.planes?.opciones[0]?.opciones)
    const opcion = opciones?.find(({opcion}) => opcion === '4')
    const [ files, setFiles ] = useState([])
    const urls = files?.map(({url}) => url)
    
    // console.log(urls)
    // console.log(opcion?.respuesta)


    const handleFileChange = (newFiles) => {
        setFiles(newFiles)
    };

    const handleGuardar = () => {
        let data = {
            opcion: '4',
            tipoRespuesta: tipoRespuesta,
            respuesta: tipoRespuesta === 'texto' ? respuesta || opcion?.respuesta : urls
        }
        console.log(data)

        if(!data.tipoRespuesta){
            toast.error('debes seleccionar un tipo de respuesta',{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}})
        }else{
            const promesa = axios.post(`${urlHost}/opcion`,data)
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
                        opcion # 4
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
                        : tipoRespuesta === 'multimedia' ?
                            <MediaArea onFileChange={handleFileChange} />
                        : null
                    }
                    
                    {
                        tipoRespuesta === 'multimedia' && files.length === 0 && opcion?.respuesta[0].startsWith('https://firebasestorage') &&
                            <div className='max-h-[15rem] flex flex-wrap justify-center overflow-y-auto p-2 gap-4'>
                                {
                                    opcion?.respuesta.map((url,i) => (
                                        <div
                                            key={i}
                                            className="relative h-[10rem] w-[8rem] flex-shrink-0 group"
                                        >
                                            <img
                                                src={url}
                                                alt={'imagen'}
                                                className="object-cover rounded-lg w-full h-full"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                    }
                    <Button
                        className='w-[80%]'
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={handleGuardar}
                        disabled={tipoRespuesta === 'multimedia' && !files[0]?.url}
                    >
                        guardar opcion # 4
                    </Button>
                </div>

            </div>
            <Toaster position='top-right' />
        </div>
    )
}
