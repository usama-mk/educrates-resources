import React, { useEffect, useState } from 'react'
import './SubjectSection.css'
import primary from '../../assets/Maths/primary.png'
import FilteredEnglish from '../Filtered/English/FilteredEnglish'
import FilteredMaths from '../Filtered/Maths/FilteredMaths'
import FilteredScience from '../Filtered/Science/FilteredScience'
import FilteredHistoryGeography from '../Filtered/FilteredHistoryGeography/FilteredHistoryGeography'
import { english, historyGeography, maths, science } from '../../data'
import SubjectCard from '../SubjectCard/SubjectCard'

function SubjectSection({ subject}) {
    const [seeAll, setSeeAll] = useState(false)
     
   
    const handleseeAll = () => {
        setSeeAll(prev => !prev)
    }
    return (
        <div className="subjectSection">
            <div className="subjectSection__header">
                <h1>{subject}</h1>
                <div onClick={handleseeAll} className="seeAll__button pointer">
                    {seeAll ? `SEE LESS <` : ` SEE ALL >`}
                </div>
            </div>
           
            {(subject == "Mathematics") ?
                <FilteredMaths subject="Mathematics" seeAll={seeAll} maths={maths} />
                :
                ""
               
            }
           
           {(subject == "English") ?
                <FilteredEnglish subject="English" seeAll={seeAll} english={english} /> 
                :
                ""
            }  

            {(subject == "Science") ?
                
                   <FilteredScience subject="Science" seeAll={seeAll} science={science} />
                :
                ""
            }

            {(subject == "History And Geography") ?
               <FilteredHistoryGeography subject="historyGeography" seeAll={seeAll} historyGeography={historyGeography} />
                :
                ""
            }

          

            {(subject == "Primary School Resources") ?
            <SubjectCard title={"GCSE Maths and English Exam Guidance"} thumbnail={primary} description=" GCSE Maths and English Exam Guidance specifically tailored towards students with Autism."
                 tutorName={"Arsad Ansary"} link="https://www.autismeducationtrust.org.uk/shop/aet-exam-boards/" />
                            :
                            ""
                        }

            {(subject == "Secondary School Resources") ?
                <SubjectCard title={"GCSE Maths and English Exam Guidance"} thumbnail={primary} description=" GCSE Maths and English Exam Guidance specifically tailored towards students with Autism."
                 tutorName={"Arsad Ansary"} link="https://www.autismeducationtrust.org.uk/shop/aet-exam-boards/" />

                :
                ""
            }                
        </div>
    )
}

export default SubjectSection
