import React from 'react'
import { useSelector } from 'react-redux';
import thumbnail from '../../../assets/header1.png'

import SubjectCard from '../../SubjectCard/SubjectCard';

function FilteredEnglish({ seeAll, english }) {

    const selectedTabVisual = useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory = useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic = useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective = useSelector(state => state.selectedTabReflective)

    // Each variables contains the filtered out category that is selected

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


    return (
                // We check if seeAll is true then show all subjectCard components in english but if any of the category is selected the show the selected category subjectCard components only
        <div className="filteredE">
            { seeAll ? (!selectedTabAuditory ?
                !selectedTabVisual ?
                    !selectedTabKinesthetic ?
                        !selectedTabReflective ?
                            english.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })

                            :
                            filteredReflectiveEnglish.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })
                        :
                        filteredKinestheticEnglish.map((mathCard) => {
                            // console.log(mathCard)
                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })

                    :
                    filteredVisualsEnglish.map((mathCard) => {

                        return (
                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                        )

                    })
                :
                filteredAuditoryEnglish.map((mathCard) => {

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
                                english.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredReflectiveEnglish.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredKinestheticEnglish.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredVisualsEnglish.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredAuditoryEnglish.slice(0, 3).map((mathCard) => {

                        return (
                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                        )

                    })
                )
            }
        </div>
    )
}

export default FilteredEnglish
