import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from './../Context/AppsInsrallContext';
import useApps from '../Hook/useApps';

const Dashboard = () => {
    const {Installation}=useContext(InstallAppsContext)
    // console.log(Installation)
    const {Apps}=useApps()
    // console.log(Apps)
    const UnInstalledApps=Apps.length-Installation.length;
    // console.log(UnInstalledApps)
    const data = [
        { name: 'Installed', value: Installation.length, fill: '#0088FE' },
        { name: 'UnInstalled', value: UnInstalledApps, fill: '#e50d0d' },
        
    ];

    return (
        <div className='flex flex-col items-center justify-center my-6'>
            <h2 className='text-3xl font-bold my-3'>Intalled And UnInstalled Apps Carts</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive className=''>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend></Legend>  
                <Tooltip></Tooltip>             
            </PieChart>
        </div>
    )
}

export default Dashboard;
