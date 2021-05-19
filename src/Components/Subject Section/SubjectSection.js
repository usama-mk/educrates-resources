import React, { useEffect, useState } from 'react'
import SubjectCard from '../SubjectCard/SubjectCard'
import thumbnail from '../../assets/header1.png'
import './SubjectSection.css'
import FilteredEnglish from '../Filtered/English/FilteredEnglish'
import { useSelector } from 'react-redux'
import FilteredMaths from '../Filtered/Maths/FilteredMaths'
import FilteredScience from '../Filtered/Science/FilteredScience'
import FilteredHistoryGeography from '../Filtered/FilteredHistoryGeography/FilteredHistoryGeography'
import { english, historyGeography, maths, science } from '../../data'

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


        </div>
    )
}

export default SubjectSection
