import React, { useContext } from 'react'
import { InstallAppsContext } from '../Context/AppsInsrallContext'
import { FaDownload, FaFile, FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify'
import error from '../assets/images/error-404.png'
import { Link } from 'react-router'

const Installation = () => {
    const { Installation, setInstallation } = useContext(InstallAppsContext)
    // console.log(Installation,'context')
    const handleAppUnstalls = (App) => {
        // console.log(App)
        const restApp = Installation.filter(iApp => iApp.id != App.id)
        // console.log(restApp)
        setInstallation(restApp)
        toast.error(`${App.title} is UnInstalls`)
    }
    return (
        <div>
            {Installation.length === 0 ? <div className='flex justify-center items-center h-[600px]'>
                <div className='flex flex-col gap-3 items-center'>
                    <img src={error} alt="404 Error" />
                    <Link to={'/apps'}><button className='btn btn-primary'>Go Back Apps</button></Link></div>
            </div> :
                Installation.map((App, index) => {
                    return <div key={index} className='flex gap-10 items-center  bg-gray-200 p-5 rounded-2xl m-5 '>
                        <img src={App.image} alt={App.title} className='h-36 w-auto' />
                        <div className='flex flex-col space-y-6'>
                            <h3 className='text-2xl font-bold'>{App.title}</h3>
                            <div className='flex gap-4'>
                                <p className='flex gap-1 items-center text-green-500'><span><FaDownload></FaDownload></span>{App.downloads}</p>
                                <p className='flex gap-1 items-center text-orange-600'><span><FaStar></FaStar></span>{App.ratingAvg}</p>
                                <p className='flex gap-1 items-center text-purple-600'><span><FaFile></FaFile></span>{App.size} MB</p>
                            </div>
                            <button className='text-start btn btn-error text-white font-bold'
                                onClick={() => handleAppUnstalls(App)}
                            >Unstalls</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Installation