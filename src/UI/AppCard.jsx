import React from 'react'
import { FaDownload, FaStar } from 'react-icons/fa'

const AppCard = ({app}) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                                <figure>
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="h-72 w-72"
                                        />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-xl font-bold">{app.title}</h2>
                                    <p className="line-clamp-2">{app.description}</p>
                                    <div className="card-actions flex justify-between my-5">
                                        <button className="badge text-green-500"><FaDownload></FaDownload>{app.downloads}</button>
                                        <button className="badge text-orange-600"><FaStar></FaStar>{app.ratingAvg}</button>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default AppCard
