import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../assets/header1.png'
import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredMaths({ seeAll, maths }) {

    const selectedTabVisual = useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory = useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic = useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective = useSelector(state => state.selectedTabReflective)

    var filteredVisuals = maths.filter(function (lesson) {
        return lesson.category.includes('visual')

    });

    var filteredAuditory = maths.filter(function (lesson) {
        return lesson.category.includes('audio')

    });

    var filteredKinesthetic = maths.filter(function (lesson) {
        return lesson.category.includes('kinesthetic')

    });

    var filteredReflective = maths.filter(function (lesson) {
        return lesson.category.includes('reflective')

    });
    return (
        <div>
            {
                seeAll ? (!selectedTabAuditory ?
                    !selectedTabVisual ?
                        !selectedTabKinesthetic ?
                            !selectedTabReflective ?
                                maths.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflective.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinesthetic.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisuals.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditory.map((mathCard) => {

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
                                    maths.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })

                                    :
                                    filteredReflective.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                        )

                                    })
                                :
                                filteredKinesthetic.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                    )

                                })

                            :
                            filteredVisuals.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredAuditory.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={thumbnail} description={mathCard.description} tutorName={"tutorName"} link={mathCard.link} />

                            )

                        })

                    )
            }
        </div>
    )
}

export default FilteredMaths
