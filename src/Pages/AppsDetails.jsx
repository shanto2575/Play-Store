import { Link, useParams } from 'react-router'
import useApps from '../Hook/useApps'
import { FaDownload, FaStar } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { useContext } from 'react'
import { InstallAppsContext } from '../Context/AppsInsrallContext'
import Installation from './Installation';
import { toast } from 'react-toastify'

const AppsDetails = () => {
    const { id } = useParams()
    const { Apps, Loading } = useApps()
    const {Installation,setInstallation}=useContext(InstallAppsContext)
    // console.log(contextdata)

    if (Loading) {
        return <div className="flex justify-center items-center mt-20">
            <span className="loading loading-infinity loading-xl text-purple-600" ></span>
        </div>
    }
    const isExist = Apps.find(app => app.id === Number(id))

    if (!isExist) {
        return <h1>App Not Found 😢</h1>
    }
    const { image, title, downloads, ratingAvg, reviews, companyName } = isExist;

    

    const handleAppsInstall=()=>{
        setInstallation([...Installation,isExist])
        toast.success(`${title} is Installs!`);
    }

    return (
        <div className='flex gap-10 my-10 bg-gray-100 rounded-2xl p-5 container mx-auto'>
            <div>
                <img src={image} alt={title} className='h-48 w-48' />
            </div>
            <div >
                <div>
                    <h3 className='text-3xl font-bold'>{title}</h3>
                    <h2>Develop By: {companyName}</h2>
                </div>
                <div className='border-t mt-5'>
                    <div className='flex  gap-6 '>
                        <div className='flex flex-col items-center my-4 space-y-1'>
                            <FaDownload className='font-bold text-2xl'></FaDownload>
                            <h2 className='text-gray-400'>Download</h2>
                            <h2 className='font-bold text-2xl'>{downloads}</h2>
                        </div>
                        <div className='flex flex-col items-center my-4 space-y-1 '>
                            <FaStar className='font-bold text-2xl'></FaStar>
                            <h2>Average Ratings</h2>
                            <h2 className='font-bold text-2xl'>{ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col items-center my-4 space-y-1'>
                            <FcLike className='font-bold text-2xl'></FcLike>
                            <h2>Total Reviews</h2>
                            <h2 className='font-bold text-2xl'>{reviews}</h2>
                        </div>
                    </div>
                </div>
                <div className='flex gap-7'>
                    {/* <Link to={'/installation'}> */}
                        <button className='btn btn-success text-white font-bold' onClick={handleAppsInstall}>Installation Now</button>
                    {/* </Link> */}
                    <Link to={'/apps'}><button className='btn btn-primary font-bold text-white'>Go Back</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AppsDetails