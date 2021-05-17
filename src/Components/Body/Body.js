import React from 'react'
import SubjectSection from '../Subject Section/SubjectSection'
import header1 from '../../assets/header1.png'
import './Body.css'

function Body() {
    return (
        <div className="body" >
{/* Tab buttons */}
            <div className="body__buttons">
                <div className="visual__button tab__button__selected pointer">
                    VISUAL
                </div>

                <div className="auditory__button tab__button pointer">
                    AUDITORY
                </div>

                <div className="kinesthetic__button tab__button pointer">
                    KINESTHETIC
                </div>

                <div className="reflective__button tab__button pointer">
                    REFLECTIVE
                </div>
            </div>

{/* Subjects */}
             <SubjectSection subject="Mathematics" title="English Speaking by the webapp part one" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
              tutorName="Arsad Ansary" thumbnail={header1} link="https://www.google.com/" />

<SubjectSection subject="English" title="English Speaking by the webapp part one" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
              tutorName="Arsad Ansary" thumbnail={header1} link="https://www.google.com/" />
        </div>
    )
}

export default Body