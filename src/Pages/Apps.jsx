import AppCard from '../UI/AppCard'
import useApps from '../Hook/useApps'

const Apps = () => {
    const {Apps,Loading}=useApps()
    // console.log(Apps,Loading)
    
    return (
        <div>
            <div className="text-center my-10 space-y-4">
                <h2 className="text-4xl font-bold">Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {
                Loading ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-infinity loading-xl text-purple-600" ></span>
                    </div>
                ) : (
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            Apps.map((app, index) => (
                                <AppCard key={index} app={app} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Apps