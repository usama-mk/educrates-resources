import React from 'react'
import './HeaderCard.css'
import header1 from '../../assets/header1.svg'
import logo from '../../assets/logo.svg'
import rec6 from '../../assets/rec6.svg'



function HeaderCard() {
    return (
        <div className="headerCard">
            {/* <img src={header1} alt="" /> */}
            <div className="header1">
                <img src={header1} alt="" />
            </div>

            <div className="header1">
                <img src={header1} alt="" />
            </div>

            <div className="header1">
                <img src={header1} alt="" />
            </div>
        </div>
    )
}

export default HeaderCard
