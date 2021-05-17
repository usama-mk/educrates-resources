import React from 'react'
import logo from '../../assets/logo.svg'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__copyright">
            Copyright 2021. All rights reserved by us.
            </div>

            <div className="footer__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="footer__designedby">
            Designed by 
           <span>{  `CreativePeoples`}</span>
            </div>
        </div>
    )
}

export default Footer
