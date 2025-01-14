import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "./layoutComponents/Footer"
import Navbar from './layoutComponents/NavBar'
const Layout = () => {
  return (
    <div>
        <Navbar />
        <main className='max-w-7xl mx-auto min-h-screen bg-white p-4'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout