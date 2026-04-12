import React from 'react'
import { NavLink } from 'react-router'

const MyNavLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) => `font-bold mr-10 text-xl ${isActive ? 'text-red-500 border-b pb-1 ' : ''}`}>{children}
        </NavLink>
    )
}

export default MyNavLink
