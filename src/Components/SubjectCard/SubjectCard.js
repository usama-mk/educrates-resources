import { Avatar } from '@material-ui/core'
import React from 'react'
import avatarImage from '../../assets/avatarImage.png'
import './SubjectCard.css'

function SubjectCard({ title, thumbnail, description, tutorName, link }) {
    return (
        <div className="subjectCard">
            <div className="subjectCard__thumbnail">
                <a href={link} target="_blank">
                <img src={thumbnail} alt="" />
                </a>
            </div>

            <a href={link} target="_blank">
            <div className="subjectCard__right">
                <div className="subjectCard__desc">
                    <h2>{title}</h2>
                    <span className="subjectCard__description" >{description}</span>
                    <div className="subjectCard__right__tutor">
                        <div className="subjectCard__right__avatar">
                            <Avatar id="Avatar" src={avatarImage} />
                            <div className="tutorName">{tutorName}</div>
                        </div>
                    </div>

                        <div className="subjectCard__right__enroll__button">
                            Enroll Now &gt;
                        </div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default SubjectCard
