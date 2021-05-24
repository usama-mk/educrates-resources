import React from 'react'
import { useSelector } from 'react-redux'
import thumbnail from '../../../assets/header1.png'
import SubjectCard from '../../SubjectCard/SubjectCard';
import './FilteredMathsTeachers.css'

function FilteredMathsTeachers({seeAll, mathematicsTeachers}) {
    
    const selectedTabMaths = useSelector(state => state.selectedTabMaths)
    const selectedTabScience = useSelector(state => state.selectedTabScience)
    const selectedTabEnglish = useSelector(state => state.selectedTabEnglish)
    const selectedTabMusic = useSelector(state => state.selectedTabMusic)
    
    var filteredMusic = mathematicsTeachers.filter(function (lesson) {
        return lesson.category.includes('music')

    });

    var filteredEnglish = mathematicsTeachers.filter(function (lesson) {
        return lesson.category.includes('english')

    });

    var filteredScience = mathematicsTeachers.filter(function (lesson) {
        return lesson.category.includes('science')

    });

    var filteredMaths = mathematicsTeachers.filter(function (lesson) {
        return lesson.category.includes('maths')
    });

    return (
        <div className="mathsTeachers">
             {
                seeAll ? (!selectedTabMaths ?
                    !selectedTabScience ?
                        !selectedTabEnglish ?
                            !selectedTabMusic ?
                                mathematicsTeachers.map((mathCard) => {

                                    return (
                                        <SubjectCard teacher={true} title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })

                                :
                                filteredMusic.map((mathCard) => {

                                    return (
                                        <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                    )

                                })
                            :
                            filteredEnglish.map((mathCard) => {

                                return (
                                    <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                                )

                            })

                        :
                        filteredScience.map((mathCard) => {

                            return (
                                <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                            )

                        })
                    :
                    filteredMaths.map((mathCard) => {

                        return (
                            <SubjectCard title={mathCard.title} thumbnail={mathCard.thumbnail} description={mathCard.description} tutorName={"Arsad Ansary"} link={mathCard.link} />

                        )

                    })
                )
                    :
                    // If seeAll is false the we show only 3 of the subjectCard components in a categorized way
                    (!selectedTabMaths ?
                        !selectedTabScience ?
                            !selectedTabEnglish ?
                                !selectedTabMusic ?
                                    mathematicsTeachers.slice(0, 3).map((mathCard) => {

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

export default FilteredMathsTeachers
