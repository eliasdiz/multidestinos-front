import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import planesActions from '../Store/Planes/actions'
import { useDispatch, useSelector } from 'react-redux'


const { getDescripcion } = planesActions

export default function DashBoard() {

	const dispatch = useDispatch()
	console.log( useSelector(store => store))

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
