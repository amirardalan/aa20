import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from './NavData'
import './Nav.scss'
import logo from '../logo.svg'

function Nav() {
    const [nav, setNav] = useState(false);
    const showNav = () => setNav(!nav);
    return (
        <>
            <div className="Nav">
                <Link to="#" className={nav ? 'Nav-icon open' : 'Nav-icon'} onClick={showNav} aria-label="Open the menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>
            <nav className={nav ? 'Nav-menu active' : 'Nav-menu'}>
                <ul className="Nav-menu-items" onClick={showNav}>
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span aria-label={item.title}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <img src={logo} className="Nav-logo" alt="logo" />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav