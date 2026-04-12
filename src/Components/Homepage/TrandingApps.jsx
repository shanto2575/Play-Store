// import React, { use } from 'react'
// import { useLoaderData } from 'react-router'

import AppCard from "../../UI/AppCard"
import { Link } from "react-router"
import useApps from "../../Hook/useApps"

// const AppsPromise=fetch('/data.json').then(res=>res.json())
const TrandingApps = () => {
    // const Apps=use(AppsPromise)
    // console.log(Apps)

    // const apps=useLoaderData()
    // console.log(apps)


    const {Apps,Loading}=useApps()
    // console.log(Apps,Loading,'use')


    return (
        <div>
            <div className="text-center my-10 space-y-4">
                <h2 className="text-4xl font-bold">Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                Loading ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-infinity loading-xl text-purple-600"></span>
                    </div>
                ) : (
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            Apps.slice(0,6).map((app, index) => (
                                <AppCard key={index} app={app} />
                            ))
                        }
                    </div>
                )
            }
            <div className="text-center my-5">
                <Link to={'/apps'}><button className="bg-purple-600 text-white btn">View All</button></Link>
            </div>
        </div>
    )
}

export default TrandingApps