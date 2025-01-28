import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { CircularProgress, Dialog, Typography } from '@mui/material'




export default function AlertaServidor(){

    const [ open, setOpen ] = useState(true)
    const destino = useSelector(store => store.planes.descripcion)

    const servidor = (destino) => destino.length === 0 ? setOpen(true) : setOpen(false)

    // console.log(destino)

    useEffect(
        () => {
            servidor(destino)
        },
        [destino]
    )

    return (
        <>
            <Dialog 
                open={open} 
                PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }} 
            >
                <div className='flex flex-col items-center'>
                    <CircularProgress color='info' size={65} />
                    <Typography fontSize={30} fontWeight='bold' color='white'>Conectando Servidor ....</Typography>
                </div>
            </Dialog>
        </>
    )
}