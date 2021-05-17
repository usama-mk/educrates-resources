import React from 'react'
import SubjectCard from '../SubjectCard/SubjectCard'
import './SubjectSection.css'

function SubjectSection({subject, title, description, tutorName, thumbnail, link}) {
    return (
        <div className="subjectSection">
            <div className="subjectSection__header">
                <h1>{subject}</h1>
                <div className="seeAll__button">
                    SEE ALL &gt;
                </div>
            </div>

            {/* Subject Card */}
            <SubjectCard title={title} thumbnail={thumbnail} description={description} tutorName={tutorName} link={link} />
            <SubjectCard title={title} thumbnail={thumbnail} description={description} tutorName={tutorName} link={link}/>
            <SubjectCard title={title} thumbnail={thumbnail} description={description} tutorName={tutorName} link={link}/>
        </div>
    )
}

export default SubjectSection
