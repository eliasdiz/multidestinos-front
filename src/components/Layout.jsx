import { List, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import { Building, CalendarDots, CurrencyCircleDollar, Images, Scroll, TreeStructure } from '@phosphor-icons/react';





export default function Layout() {
    
    const linkList = [
        { icon: TreeStructure , name: 'flujo del 🤖' },
        { icon: Scroll , name: 'descripcion' },
        { icon: Building , name: 'hospedaje' },
        { icon: CalendarDots , name: 'fechas' },
        { icon: CurrencyCircleDollar , name: 'costos' },
        { icon: Images , name: 'fotos' },
    ]

    const renderMenuItems = (items) => {
        return items.map((item,i) => (
            <ListItemButton key={i} divider>
                <ListItemIcon className="flex items-center gap-3">
                    <item.icon size={35} color="white" weight="duotone" />
                    <Typography color="white" className="capitalize" fontSize={20}>
                    {item.name}
                    </Typography>
                </ListItemIcon>
            </ListItemButton>
        ))
    }

    
    return (
        <div 
            className='w-[25vw] h-[100vh] flex flex-col items-center gap-3 bg-[#385e86e3]'
        >
            <div
                className='text-white text-center uppercase mt-12 mb-5'
            >
                <Typography 
                    variant='h4'
                >
                    menu
                </Typography>
            </div>

            <List className='flex flex-col gap-5'>

                { renderMenuItems(linkList) }


            </List>


        </div>
    )
}
