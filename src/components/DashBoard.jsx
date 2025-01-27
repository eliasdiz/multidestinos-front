import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import descripActions from '../Store/Descripcion/actions'
import { useDispatch } from 'react-redux'


const { getDescripcion } = descripActions

export default function DashBoard() {

	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(getDescripcion())
		},
		[]
	)

	return (
		<div className='w-full flex justify-center items-center bg-[#2A4364] capitalize'>
			<Typography color='white' variant='h3'>
				bienvenido a CuchoBot 🤖
			</Typography>	
		</div>
	)
}
