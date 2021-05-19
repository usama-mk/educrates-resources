import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../assets/header1.png'
import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredHistoryGeography({seeAll, historyGeography}) {

    const selectedTabVisual = useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory = useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic = useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective = useSelector(state => state.selectedTabReflective)

    var filteredVisualsHistoryGeography = historyGeography.filter(function (lesson) {
        return lesson.category.includes('visual')

    });

    var filteredAuditoryHistoryGeography = historyGeography.filter(function (lesson) {
        return lesson.category.includes('audio')

    });

    var filteredKinestheticHistoryGeography = historyGeography.filter(function (lesson) {
        return lesson.category.includes('kinesthetic')

    });

    var filteredReflectiveHistoryGeography = historyGeography.filter(function (lesson) {
        return lesson.category.includes('reflective')

    });

    return (
        <div>
             {
                seeAll ? (!selectedTabAuditory ?
                    !selectedTabVisual ?
                        !selectedTabKinesthetic ?
                            !selectedTabReflective ?
                                historyGeography.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflectiveHistoryGeography.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinestheticHistoryGeography.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisualsHistoryGeography.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditoryHistoryGeography.map((mathCard) => {

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
                                historyGeography.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })

                                    :
                                    filteredReflectiveHistoryGeography.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })
                                :
                                filteredKinestheticHistoryGeography.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                            :
                            filteredVisualsHistoryGeography.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredAuditoryHistoryGeography.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })

                    )
            }
        </div>
    )
}

export default FilteredHistoryGeography
