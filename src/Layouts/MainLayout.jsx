import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout'




export default function MainLayout() {
    return (
        <div className='flex'>
            <Layout />
            <Outlet />
        </div>
        
    )
}
