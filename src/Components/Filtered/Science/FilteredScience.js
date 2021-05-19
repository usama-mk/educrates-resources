import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../assets/header1.png'
import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredScience({seeAll, science}) {
    const selectedTabVisual = useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory = useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic = useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective = useSelector(state => state.selectedTabReflective)

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
                seeAll ? (!selectedTabAuditory ?
                    !selectedTabVisual ?
                        !selectedTabKinesthetic ?
                            !selectedTabReflective ?
                                science.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflectiveScience.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinestheticScience.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisualsScience.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditoryScience.map((mathCard) => {

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
                                science.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })

                                    :
                                    filteredReflectiveScience.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })
                                :
                                filteredKinestheticScience.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                            :
                            filteredVisualsScience.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredAuditoryScience.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })

                    )
            }
        </div>
    )
}

export default FilteredScience
