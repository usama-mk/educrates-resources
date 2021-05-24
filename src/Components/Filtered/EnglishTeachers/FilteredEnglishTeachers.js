import React from 'react'
import { useSelector } from 'react-redux'
import SubjectCard from '../../SubjectCard/SubjectCard';


function FilteredEnglishTeachers({seeAll, englishTeachers}) {
    
    const selectedTabMaths = useSelector(state => state.selectedTabMaths)
    const selectedTabScience = useSelector(state => state.selectedTabScience)
    const selectedTabEnglish = useSelector(state => state.selectedTabEnglish)
    const selectedTabMusic = useSelector(state => state.selectedTabMusic)
    
    var filteredMusic = englishTeachers.filter(function (lesson) {
        return lesson.category.includes('music')

    });

    var filteredEnglish = englishTeachers.filter(function (lesson) {
        return lesson.category.includes('english')

    });

    var filteredScience = englishTeachers.filter(function (lesson) {
        return lesson.category.includes('science')

    });

    var filteredMaths = englishTeachers.filter(function (lesson) {
        return lesson.category.includes('maths')
    });

    return (
        <div className="mathsTeachers">
             {
                seeAll ? (!selectedTabMaths ?
                    !selectedTabScience ?
                        !selectedTabEnglish ?
                            !selectedTabMusic ?
                            englishTeachers.map((mathCard) => {

                                    return (
                                        <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                        subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                        />
                                    )

                                })

                                :
                                filteredMusic.map((mathCard) => {

                                    return (
                                        <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />
                                    )

                                })
                            :
                            filteredEnglish.map((mathCard) => {

                                return (
                                    <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />
                                )

                            })

                        :
                        filteredScience.map((mathCard) => {

                            return (
                                <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />
                            )

                        })
                    :
                    filteredMaths.map((mathCard) => {

                        return (
                            <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />
                        )

                    })
                )
                    :
                    // If seeAll is false the we show only 3 of the subjectCard components in a categorized way
                    (!selectedTabMaths ?
                        !selectedTabScience ?
                            !selectedTabEnglish ?
                                !selectedTabMusic ?
                                englishTeachers.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />

                                        )

                                    })

                                    :
                                    filteredMusic.slice(0, 3).map((mathCard) => {

                                        return (
                                            <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />

                                        )

                                    })
                                :
                                filteredEnglish.slice(0, 3).map((mathCard) => {

                                    return (
                                        <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />

                                    )

                                })

                            :
                            filteredScience.slice(0, 3).map((mathCard) => {

                                return (
                                    <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />

                                )

                            })
                        :
                        filteredMaths.slice(0, 3).map((mathCard) => {

                            return (
                                <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} link={mathCard.link}
                                            subTitle={mathCard.subTitle} ratings={mathCard.ratings} reviews={mathCard.reviews}
                                            />

                            )

                        })

                    )
            }
        </div>
    )
}

export default FilteredEnglishTeachers
