import React from 'react'
import { FaAppStore, FaGooglePay, FaGooglePlay } from 'react-icons/fa'

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center my-10 space-y-5'>
                <h2 className='text-6xl font-bold text-center'>We Build <br></br>
                    <span className='text-pink-500'>Productive</span> Apps</h2>
                <p className='text-center text-gray-500'>At Play Store, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-4 items-center'>
                    <button className='btn btn-outline flex gap-2 items-center'><FaGooglePlay />Google Play</button>
                    <button className='btn btn-outline flex gap-2 items-center'><FaAppStore ></FaAppStore> App Store</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
