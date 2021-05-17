import React from 'react'
import './HeaderCard.css'
import header1 from '../../assets/header1.png'
import header2 from '../../assets/header2.png'
import header3 from '../../assets/header3.png'
import rec11 from '../../assets/rec11.png'

import logo from '../../assets/logo.svg'



function HeaderCard() {
    return (
        <div className="headerCard">
            {/* <img src={header1} alt="" /> */}
            <div className="header1">
                <img src={header1} alt="" />
                <img id="shadow" src={rec11} alt="" />
                <button >ASD</button>
            </div>

            <div className="header1">
                <img src={header2} alt="" />
                <img id="shadow" src={rec11} alt="" />
                <button>ADHD</button>
            </div>

            <div className="header1">
                <img src={header3} alt="" />
                <img id="shadow" src={rec11} alt="" />
                <button>ADHD</button>
            </div>
        </div>
    )
}

export default HeaderCard
