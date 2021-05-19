import React from 'react'
import thumbnail from '../../../assets/header1.png'

import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredEnglish({ subject, selectedTabVisual, selectedTabAuditory, selectedTabKinesthetic, selectedTabReflective, seeAll, english}) {
    
    var filteredVisualsEnglish = english.filter(function (lesson) {
        return lesson.category.includes('visual')
    
    });
    
    var filteredAuditoryEnglish = english.filter(function (lesson) {
        return lesson.category.includes('audio')
    
    });
    
    var filteredKinestheticEnglish = english.filter(function (lesson) {
        return lesson.category.includes('kinesthetic')
    
    });
    
    var filteredReflectiveEnglish = english.filter(function (lesson) {
        return lesson.category.includes('reflective')
    
    });
    console.log(filteredKinestheticEnglish)
    
    return (
        <div className="filteredE">
         {(subject == "English") ?
                seeAll ? (!selectedTabAuditory ?
                    !selectedTabVisual ?
                        !selectedTabKinesthetic ?
                            !selectedTabReflective ?
                                english.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflectiveEnglish.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinestheticEnglish.map((mathCard) => {
                                    console.log(mathCard)
                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisualsEnglish.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditoryEnglish.map((mathCard) => {

                        return (
                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                        )

                    })
                )
                    :
                    (!selectedTabAuditory ?
                        !selectedTabVisual ?
                            !selectedTabKinesthetic ?
                                !selectedTabReflective ?
                                    english.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })

                                    :
                                    filteredReflectiveEnglish.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })
                                :
                                filteredKinestheticEnglish.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                            :
                            filteredVisualsEnglish.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredAuditoryEnglish.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })
                    )
                :
                ""
            }    
        </div>
    )
}

export default FilteredEnglish
