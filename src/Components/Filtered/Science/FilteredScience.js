import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../assets/header1.png'
import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredScience({seeAll, science}) {
    const selectedTabVisual = useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory = useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic = useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective = useSelector(state => state.selectedTabReflective)

    
    // Each variables contains the filtered out category that is selected
    var filteredVisualsScience = science.filter(function (lesson) {
        return lesson.category.includes('visual')

    });

    var filteredAuditoryScience = science.filter(function (lesson) {
        return lesson.category.includes('audio')

    });

    var filteredKinestheticScience = science.filter(function (lesson) {
        return lesson.category.includes('kinesthetic')

    });

    var filteredReflectiveScience = science.filter(function (lesson) {
        return lesson.category.includes('reflective')

    });

    return (
        <div>
            {
                // We check if seeAll is true then show all subjectCard components in science but if any of the category is selected the show the selected category subjectCard components only
                seeAll ? (!selectedTabAuditory ?
                    !selectedTabVisual ?
                        !selectedTabKinesthetic ?
                            !selectedTabReflective ?
                                science.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflectiveScience.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinestheticScience.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisualsScience.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditoryScience.map((mathCard) => {

                        return (
                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                        )

                    })
                )
                    :
                    // If seeAll is false the we show only 3 of the subjectCard components in a categorized way
                    (!selectedTabAuditory ?
                        !selectedTabVisual ?
                            !selectedTabKinesthetic ?
                                !selectedTabReflective ?
                                science.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                        )

                                    })

                                    :
                                    filteredReflectiveScience.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                        )

                                    })
                                :
                                filteredKinestheticScience.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })

                            :
                            filteredVisualsScience.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredAuditoryScience.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })

                    )
            }
        </div>
    )
}

export default FilteredScience
