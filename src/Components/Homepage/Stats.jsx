import React from 'react'
import hero from '../../assets/images/hero.png'

const Stats = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img src={hero} alt="HeroImg" />
            </div>
            <div className='h-[350px] w-full bg-linear-to-r from-purple-900 to-purple-500 flex items-center justify-center'>
                <div className='flex flex-col items-center text-center space-y-10'>
                    <h3 className='font-bold text-4xl text-white'>Trusted by Millions, Built for You</h3>
                    <div className='flex  gap-12 space-y-5 text-white'>
                        <div className='space-y-4'>
                            <p className='text-gray-300'>Total Downloads</p>
                            <p className='text-4xl font-bold'>29.6M</p>
                            <p className='text-gray-300'>21% more than last month</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-gray-300'>Total Reviews</p>
                            <p className='text-4xl font-bold'>906K</p>
                            <p className='text-gray-300'>46% more than last month</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-gray-300'>Active Apps</p>
                            <p className='text-4xl font-bold'>132+</p>
                            <p className='text-gray-300'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats