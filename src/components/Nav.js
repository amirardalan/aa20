import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from './NavData'
import './Nav.scss'
import logo from '../img/ghost.svg'
import ReactGA from 'react-ga'

function Nav() {

    const [nav, SetNav] = useState(false);
    const ShowNav = () => {
        SetNav(!nav)
        ReactGA.event({
            category: 'Button',
            action: 'Menu Button Clicked'
        })
    }
    const NavItem = () => {
        ReactGA.event({
            category: 'Link',
            action: 'Menu Nav Link Clicked'
        })
    }

    return (
        <>
            <div className="Nav">
                <Link to="#" className={nav ? 'Nav-icon open' : 'Nav-icon'} onClick={ShowNav} aria-label={nav ? 'Close the menu' : 'Open the menu'}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>
            <nav className={nav ? 'Nav-menu active' : 'Nav-menu'}>
                <ul className="Nav-menu-items" onClick={ShowNav}>
                    {NavData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={NavItem}>
                                    <span aria-label={item.title}>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                    <img src={logo} className="Nav-logo" alt="logo" aria-hidden="true" />
                </ul>
            </nav>
        </>
    )
}

export default Nav