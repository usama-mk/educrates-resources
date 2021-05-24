import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTeachersPage } from '../../actions'
import avatarImage from '../../assets/avatarImage.png'
import star from '../../assets/starIcon.png'
import './SubjectCard.css'

function SubjectCard({ teacher, title, subTitle, thumbnail, description, link, ratings, reviews }) {
    // const dispatch= useDispatch()
    // dispatch(toggleTeachersPage(true))
    // const teacher = useSelector((state=> state.teachersPage))
    return (
        // It consists of title, thumbnail, description, tutorName and link to the respective subject lesson, it is basically the content in the subject section that displays the lessons 
        <div className="subjectCard">
            <div className="subjectCard__thumbnail">
                <a href={link} target="_blank">
                <img src={thumbnail} alt="" />
                {teacher? 
                <div className="rrWrapper">
                    <div className="rr" > 
                    <div className="rs">
                    <div className="ratings" >{ratings}</div>
                    <img className="star" src={star} />
                    </div>
                    <div className="reviews" >{reviews} reviews</div>

                </div> 
                </div>
                :""}
                </a>
            </div>

            <a href={link} target="_blank">
            <div className="subjectCard__right">
                <div className="subjectCard__desc">
                    <h2 style={{marginBottom: teacher?'0px':""}} >{title}</h2>
                    {teacher?<h2 style={{marginTop:"0px", maxWidth:"749px"}} >{subTitle}</h2>:""}
                    <span className="subjectCard__description" >{description}</span>
                    <div className="subjectCard__right__tutor">
                         
                    </div>

                        <div className="subjectCard__right__enroll__button">
                            {teacher?"View Profile":"Enroll Now >"}
                        </div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default SubjectCard
