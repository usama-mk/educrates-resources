import React from 'react'
import './HeaderCard.css'


function HeaderCard({header1, header2, header3, tHeader1, tHeader2, tHeader3, rec11, teachers}) {
    return (
        // Header Card at top of the page having 3 images
        <div className="headerCard">
            {/* <img src={header1} alt="" /> */}
            <div className="header1">
                <img src={teachers?tHeader1:header1} alt="" />
                <img id="shadow" src={rec11} alt="" />
                 
            </div>

            <div className="header1">
                <img src={teachers?tHeader2:header2} alt="" />
                <img id="shadow" src={rec11} alt="" />
                
            </div>

            <div className="header1">
                <img src={teachers?tHeader3:header3} alt="" />
                <img id="shadow" src={rec11} alt="" />
                 
            </div>
        </div>
    )
}

export default HeaderCard
