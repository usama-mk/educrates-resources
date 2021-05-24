import React, { useEffect, useState } from 'react'
import './SubjectSection.css'
import primary from '../../assets/Maths/primary.png'
import FilteredEnglish from '../Filtered/English/FilteredEnglish'
import FilteredMaths from '../Filtered/Maths/FilteredMaths'
import FilteredScience from '../Filtered/Science/FilteredScience'
import FilteredHistoryGeography from '../Filtered/FilteredHistoryGeography/FilteredHistoryGeography'
import { english, historyGeography, maths, science, mathematicsTeachers, scienceTeachers, englishTeachers, musicTeachers } from '../../data'
import SubjectCard from '../SubjectCard/SubjectCard'
import mathsLogo from '../../assets/teachersSubjectLogos/mathsLogo.svg'
import englishLogo from '../../assets/teachersSubjectLogos/englishLogo.svg'
import scienceLogo from '../../assets/teachersSubjectLogos/scienceLogo.svg'
import musicLogo from '../../assets/teachersSubjectLogos/musicLogo.png'
import FilteredMathsTeachers from '../Filtered/MathsTeachers/FilteredMathsTeachers'
import { useSelector } from 'react-redux'
import FilteredScienceTeachers from '../Filtered/ScienceTeachers/FilteredScienceTeachers'
import FilteredEnglishTeachers from '../Filtered/EnglishTeachers/FilteredEnglishTeachers'
import FilteredMusicTeachers from '../Filtered/MusicTeachers/FilteredMusicTeachers'


function SubjectSection({subject }) {
    const [seeAll, setSeeAll] = useState(false)
    const teachers = useSelector((state=> state.teachersPage))

    const handleseeAll = () => {
        setSeeAll(prev => !prev)
    }
    return (
        // This is the subject section component which specifies the Name of the subject at the top
        <div className="subjectSection">
            <div className="subjectSection__header">
                <h1>{subject}
                {teachers? <img className="subjectLogo" src={(subject=="Mathematics teachers")?mathsLogo:(subject=="English teachers")?englishLogo:(subject=="Science teachers")?scienceLogo:(subject=="Music teachers")?musicLogo:""} /> :""}
                </h1>
                <div onClick={handleseeAll} className="seeAll__button pointer">
                    {seeAll ? `SEE LESS <` : ` SEE ALL >`}
                </div>
            </div>
            {/* The FilteredMaths component will filter out the Maths components with the Selected Category i.e visual etc */}
            {(subject == "Mathematics") ?
                <FilteredMaths subject="Mathematics" seeAll={seeAll} maths={maths} />
                :
                ""

            }
            {/* The FilteredEnglish component will filter out the English components with the Selected Category i.e visual etc */}
            {(subject == "English") ?
                <FilteredEnglish subject="English" seeAll={seeAll} english={english} />
                :
                ""
            }
            {/* The FilteredMaths component will filter out the Maths components with the Selected Category i.e visual etc */}
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


            {/* FILTERED TEACHERS */}
            {(subject == "Mathematics teachers") ?
                <FilteredMathsTeachers subject="mathematicsTeachers" seeAll={seeAll} mathematicsTeachers={mathematicsTeachers} />
                :
                ""
            }

            {(subject == "Science teachers") ?
                <FilteredScienceTeachers subject="scienceTeachers" seeAll={seeAll} scienceTeachers={scienceTeachers} />
                :
                ""
            }

            {(subject == "English teachers") ?
                <FilteredEnglishTeachers subject="englishTeachers" seeAll={seeAll} englishTeachers={englishTeachers} />
                :
                ""
            }

            {(subject == "Music teachers") ?
                <FilteredMusicTeachers subject="musicTeachers" seeAll={seeAll} musicTeachers={musicTeachers} />
                :
                ""
            }
        </div>
    )
}

export default SubjectSection
