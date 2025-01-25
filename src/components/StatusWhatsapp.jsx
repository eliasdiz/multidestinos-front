import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import autWhatsActions from '../Store/auth/action.js'


const {autSesion} = autWhatsActions


export default function StatusWhatsapp() {
    
    const dispatch = useDispatch()
    const [ onLine, setOnLine ] = useState(false)
    const [ offLine, setOffLine ] = useState(false)
    const status = useSelector(store => store.autWhatsapp.status)
    // console.log(status)

    const setColor = () => {
        if(onLine){
            return 'bg-green-400' 
        }else if(offLine){
            return 'bg-red-400 '
        }else{
            return 'bg-yellow-400 '
        }
    }

    const setEstado = () => {
        if(onLine){
            return 'onLine' 
        }else if(offLine){
            return <><Link to={'/login'}>offLine</Link></>
        }else{
            return 'esperando...'
        }
    }

    

    useEffect(
        () => {
            dispatch(autSesion())
            status ? setOnLine(true) : setOffLine(true)
        },
        [status]
    )
    
    return (
        <>
            <div className='w-full h-[3rem] flex justify-center items-center gap-3 capitalize'>
                <motion.div
                    className={`w-5 h-5 rounded-full ${setColor()}`}
                    animate={{ opacity: [1, 0.4, 1] }} 
                    transition={{ duration: 3, repeat: Infinity }} 
                />
                <Typography color="white" className="capitalize" fontSize={20} >
                    {setEstado()}
                </Typography>
            </div>
        </>
    )
}
