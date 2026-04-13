import React from 'react'
import img from '../../assets/images/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-black text-white '>
            <div className='container mx-auto py-10
                            flex flex-col md:flex-row 
                            justify-between items-center 
                            gap-8 border-b border-dashed border-gray-600'>

                <div className='flex gap-3 items-center'>
                    <img src={img} alt="logo" className='w-12 h-12' />
                    <h2 className='text-2xl font-bold'>Play Store</h2>
                </div>

                <div className='text-center md:text-right'>
                    <h2 className='font-bold text-xl mb-3'>Follow Us</h2>
                    <div className='flex gap-5 justify-center md:justify-end text-2xl'>
                        <FaFacebook className='hover:text-blue-500 cursor-pointer'/>
                        <FaLinkedin className='hover:text-blue-400 cursor-pointer'/>
                        <FaTwitter className='hover:text-sky-400 cursor-pointer'/>
                        <FaInstagram className='hover:text-pink-500 cursor-pointer'/>
                    </div>
                </div>

            </div>

            <p className='text-center py-4 text-gray-400'>
                © {new Date().getFullYear()} Play Store — All rights reserved
            </p>
        </footer>
    )
}

export default Footer