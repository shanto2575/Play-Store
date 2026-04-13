import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Shared/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    )
}

export default MainLayout