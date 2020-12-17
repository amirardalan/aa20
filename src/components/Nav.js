import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from './NavData'
import './Nav.scss'

function Nav() {
    const [nav, setNav] = useState(false)

    const showNav = () => setNav(!nav)

    return (
        <div className="Nav-container">
            <div className="Nav">
                <Link to="#" className={nav ? 'Nav-icon open' : 'Nav-icon'} onClick={showNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
            </div>
            <nav className={nav ? 'Nav-menu active' : 'Nav-menu'}>
                <ul className="Nav-menu-items" onClick={showNav}>
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Nav
