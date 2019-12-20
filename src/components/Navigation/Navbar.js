import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {

    const guestLink = (
        <ul className="nav">
            <li className="nav__item">
                <NavLink to="/login">Login</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/register">Register</NavLink>
            </li>
        </ul>
    );

    return (
        <>
            {guestLink}
        </>
    )
}

export default Navbar
