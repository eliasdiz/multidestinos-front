import { List, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import { Building, CalendarDots, CurrencyCircleDollar, Images, Scroll, TreeStructure } from '@phosphor-icons/react';
import StatusWhatsapp from './StatusWhatsapp';
import { Link } from 'react-router-dom';



export default function Layout() {
    
    const linkList = [
        { icon: TreeStructure , name: 'flujo del 🤖' },
        { icon: Scroll , name: 'descripcion', ruta: '/descripcion' },
        { icon: CalendarDots , name: 'fechas/precios', ruta: '/fecha' },
        { icon: Building , name: 'hospedaje',ruta: '/hospedaje' },
        // { icon: CurrencyCircleDollar , name: 'costos' },
        // { icon: Images , name: 'fotos' },
    ]

    const renderMenuItems = (items) => {
        return items.map((item,i) => (
            <Link key={i} to={item.ruta}>
                <ListItemButton divider>
                    <ListItemIcon className="flex items-center gap-4">
                        <item.icon size={35} color="white" weight="duotone" />
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
            className='w-[35vw] h-[100vh] flex flex-col items-center gap-3 bg-[#385e86e3]'
        >
            <Link to={'/dashboard'}>
                <div
                    className='text-white text-center uppercase mt-12'
                >
                    <Typography variant='h4'>menu</Typography>
                </div>

            </Link>

            <div className='mt-4'>
                <List className='flex flex-col gap-7'>

                    { renderMenuItems(linkList) }

                    <ListItemIcon className='flex justify-center'>
                        <StatusWhatsapp />
                    </ListItemIcon>

                </List>
            </div>


        </div>
    )
}
