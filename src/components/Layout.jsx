import { List, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import { Scroll, NumberSquareOne, NumberSquareTwo, NumberSquareThree, NumberSquareFour, NumberSquareFive, Info } from '@phosphor-icons/react';
import StatusWhatsapp from './StatusWhatsapp';
import { Link } from 'react-router-dom';



export default function Layout() {
    
    const linkList = [
        // { icon: TreeStructure , name: 'flujo del 🤖', ruta: '/cuchobot' },
        { icon: Scroll , name: 'descripcion', ruta: '/descripcion' },
        { icon: NumberSquareOne , name: 'opcion', ruta: '/fecha' },
        { icon: NumberSquareTwo , name: 'opcion',ruta: '/hospedaje' },
        { icon: NumberSquareThree , name: 'opcion',ruta: '/hospedaje' },
        { icon: NumberSquareFour , name: 'opcion',ruta: '/hospedaje' },
        { icon: NumberSquareFive , name: 'opcion',ruta: '/hospedaje' },
        { icon: Info , name: 'ayuda',ruta: '/hospedaje' },
    ]

    const renderMenuItems = (items) => {
        return items.map((item,i) => (
            <Link key={i} to={item.ruta}>
                <ListItemButton divider>
                    <ListItemIcon className="flex items-center gap-4">
                        <item.icon size={25} color="white" weight="duotone" />
                        <Typography color="white" className="capitalize" fontSize={20}>
                        {item.name}
                        </Typography>
                    </ListItemIcon>
                </ListItemButton>
            </Link>
        ))
    }

    
    return (
        <div 
            className='w-[35vw] h-[100vh] flex flex-col items-center gap-2 bg-[#385e86e3]'
        >
            <Link to={'/dashboard'}>
                <div
                    className='text-white text-center uppercase mt-5'
                >
                    <Typography variant='h4'>menu</Typography>
                </div>

            </Link>

            <div className=''>
                <List className='flex flex-col gap-3'>

                    { renderMenuItems(linkList) }

                    <ListItemIcon className='flex justify-center'>
                        <StatusWhatsapp />
                    </ListItemIcon>

                </List>
            </div>


        </div>
    )
}
