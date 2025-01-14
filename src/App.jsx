import React from 'react'
import './App.css'
import { WhatsappLogo } from '@phosphor-icons/react'


export default function App() {
	return (
		<div
			className='h-[100vh] flex justify-center items-center '
		>
			<WhatsappLogo 
				className='cursor-pointer'
				size={40} 
				color='green' 
				weight='duotone'  

			/>
		</div>
	)
}

