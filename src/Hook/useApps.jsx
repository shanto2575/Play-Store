import React, { useEffect, useState } from 'react'

const useApps = () => {
    const [Apps, setApps] = useState([])
        const [Loading, setLoading] = useState(true)
    
        useEffect(() => {
            const fetchdata = async () => {
                const res = await fetch('/data.json')
                const data = await res.json()
                // console.log(data)
                setTimeout(() => {
                    setApps(data)
                    setLoading(false)
                }, 2000);
            }
            fetchdata()
        }, [])
    return {Apps,Loading}
}

export default useApps