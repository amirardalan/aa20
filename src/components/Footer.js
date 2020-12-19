import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            Copyright &copy;
            <span>{(new Date().getFullYear())}</span>
            &mdash; Amir Ardalan
        </footer>
    )
}

export default Footer