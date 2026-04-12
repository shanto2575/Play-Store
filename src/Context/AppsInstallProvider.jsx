import React, { useState } from 'react'
import { InstallAppsContext } from './AppsInsrallContext'

const AppsInstallProvider = ({children}) => {
    const [Installation, setInstallation] = useState([])
    const data={
        Installation,
        setInstallation
    }
    return <InstallAppsContext.Provider value={data}>
        {children}
    </InstallAppsContext.Provider>
}

export default AppsInstallProvider