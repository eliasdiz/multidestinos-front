import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout'
import AlertaServidor from '../components/AlertaServidor'




export default function MainLayout() {
    return (
        <div className='flex'>
            <Layout />
            <AlertaServidor />
            <Outlet />
        </div>
        
    )
}
