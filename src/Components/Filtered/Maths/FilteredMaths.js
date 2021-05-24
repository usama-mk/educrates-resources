import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../assets/header1.png'
import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredMaths({ seeAll, maths }) {

    const selectedTabVisual = useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory = useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic = useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective = useSelector(state => state.selectedTabReflective)

    // Each variables contains the filtered out category that is selected
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
                // We check if seeAll is true then show all subjectCard components in maths but if any of the category is selected the show the selected category subjectCard components only
        <div>
            {
                seeAll ? (!selectedTabAuditory ?
                    !selectedTabVisual ?
                        !selectedTabKinesthetic ?
                            !selectedTabReflective ?
                                maths.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflective.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinesthetic.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisuals.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditory.map((mathCard) => {

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
                                    maths.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                        )

                                    })

                                    :
                                    filteredReflective.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                        )

                                    })
                                :
                                filteredKinesthetic.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })

                            :
                            filteredVisuals.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredAuditory.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })

                    )
            }
        </div>
    )
}

export default FilteredMaths
