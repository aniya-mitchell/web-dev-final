import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar'

export default function Layout() {
    return (
        <div className='app-container'>
            <NavBar></NavBar>
            <Outlet />
        </div>
    )
}
