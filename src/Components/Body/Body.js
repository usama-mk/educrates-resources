import React from 'react'
import './Body.css'

function Body() {
    return (
        <div className="body" >  
            <div className="body__buttons">
                <div className="visual__button">
                <button>VISUAL</button>
                </div>

                <div className="auditory__button">
                <button>AUDITORY</button>
                </div>

                <div className="kinesthetic__button">
                <button>KINESTHETIC</button>
                </div>

                <div className="reflective__button">
                <button>REFLECTIVE</button>
                </div>
            </div>
        </div>
    )
}

export default Body