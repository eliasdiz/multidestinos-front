import React, { useEffect, useState } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { QRCodeCanvas }  from 'qrcode.react'
import { motion } from 'framer-motion'
import { io } from 'socket.io-client'
import { Skeleton, } from '@mui/material'
import CircularProgress from '../components/CircularProgress' 
import descripcionActions from '../Store/Planes/actions'
import { useDispatch } from 'react-redux'
import { urlHost } from '../../url'


const { getDescripcion } = descripcionActions
const socket = io(urlHost)


export default function Login() {

    const dispatch = useDispatch()
    const [ step, setStep ] = useState(0)
    const [ qrCode, setQrCode ] = useState(null)
    const [ ready, setReady ] = useState(false)

    // console.log(qrCode)

    const handleClick = () => {
        setStep(1)
        socket.emit('generateQr')
        // socket.off('generateQr')
    }
    
    const generarQr = () => {
        socket.on('qrCode', (qr) =>{
            // console.log(qr)
            setStep(2)
            setQrCode(qr)
        })
    }

    const autenticando = () => 
        socket.on('autenticando', ({state}) => {
        setStep(3)
        setReady(state)
    })


    useEffect(
        () => {
            dispatch(getDescripcion())
            generarQr()
            autenticando()
        },
        []
    )

    return (
        <div className='w-full flex justify-center items-center bg-[#2A4364] '>

            { step === 0 &&(
                <WhatsappLogo 
                    className= 'cursor-pointer'
                    size={50} 
                    color='green' 
                    weight='duotone'  
                    onClick={handleClick}
                />
            )}

            { step === 1 &&(
                <Skeleton variant="rectangular" width={256} height={256} />
            )}

            { step === 2 &&(
                <motion.div                  
                    initial={{ opacity: 0, scale: 0 }}  // Empieza invisible y con escala 0
                    animate={{ opacity: 1, scale: 1 }}   // La animación aumenta la opacidad y escala al tamaño original
                    transition={{ duration: 1.5 }}   
                >
                    <QRCodeCanvas value={qrCode} size={256} />
                </motion.div>
            )}

            { step === 3 &&(
                <CircularProgress />
            ) }
        </div>
    )
}
