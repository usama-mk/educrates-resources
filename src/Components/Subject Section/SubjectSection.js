import React, { useEffect, useState } from 'react'
import SubjectCard from '../SubjectCard/SubjectCard'
import thumbnail from '../../assets/header1.png'
import './SubjectSection.css'
import FilteredEnglish from '../Filtered/English/FilteredEnglish'
import { useSelector } from 'react-redux'
import FilteredMaths from '../Filtered/Maths/FilteredMaths'
import FilteredScience from '../Filtered/Science/FilteredScience'
import FilteredHistoryGeography from '../Filtered/FilteredHistoryGeography/FilteredHistoryGeography'

function SubjectSection({ subject}) {
    const [seeAll, setSeeAll] = useState(false)
    const selectedTabVisual= useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory= useSelector(state=> state.selectedTabAuditory)
    const selectedTabKinesthetic= useSelector(state=> state.selectedTabKinesthetic)
    const selectedTabReflective= useSelector(state=> state.selectedTabReflective)
   

    const maths = [

        {
            category: ["visual", "reflective"],
            year: 2,
            link: "https://www.ixl.com/math/grade-1",
            title: "Year 2 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 2,
            link: "https://www.twinkl.co.uk/resource/the-numbers-game-tournament-tg-t-m",
            title: "Year 2 Multiplication Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 2,
            link: "https://www.twinkl.co.uk/go/resource/the-numbers-game-tournament-addition-tg-t-m",
            title: "Year 2 Addition Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 2,
            link: " https://www.twinkl.co.uk/go/resource/the-numbers-game-tournament-subtraction-tg-t-m",
            title: "Year 2 Subtraction Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 2,
            link: "https://www.twinkl.co.uk/resource/the-numbers-game-tournament-division-tg-t-m",
            title: "Year 2 Division Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "audio"],
            year: 2,
            link: "https://www.youtube.com/watch?v=YzcMBQNCjt4",
            title: "Year 2 Addition and Subtraction",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 3,
            link: "https://www.ixl.com/math/grade-2",
            title: "Year 3 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "kinesthetic"],
            year: 3,
            link: "https://www.twinkl.co.uk/resource/the-numbers-game-tournament-tg-t-m",
            title: "Year 3 Multiplication  Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 3,
            link: "https://www.twinkl.co.uk/go/resource/the-numbers-game-tournament-addition-tg-t-m",
            title: "Year 3 Addition  Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 3,
            link: " https://www.twinkl.co.uk/go/resource/the-numbers-game-tournament-subtraction-tg-t-m",
            title: "Year 3 Subtraction  Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "kinesthetic"],
            year: 3,
            link: "https://www.twinkl.co.uk/resource/the-numbers-game-tournament-division-tg-t-m",
            title: "Year 3 Division Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 4,
            link: "https://www.ixl.com/math/grade-3",
            title: "Year 4 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 4,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-tg-t-m",
            title: "Year 4 Multiplication Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 4,
            link: "https://www.twinkl.co.uk/go/resource/the-numbers-game-tournament-addition-tg-t-m",
            title: "Year 4 Addition Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 4,
            link: "https://www.twinkl.co.uk/go/resource/the-numbers-game-tournament-subtraction-tg-t-m",
            title: "Year 4 Subtraction Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 4,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-division-tg-t-m",
            title: "Year 4 Division Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 5,
            link: "https://www.ixl.com/math/grade-4",
            title: "Year 5 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 6,
            link: "https://www.ixl.com/math/grade-5",
            title: "Year 6 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 7,
            link: " https://www.ixl.com/math/grade-6",
            title: "Year 7 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 7,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-percentages-tg-t-m",
            title: "Year 7 Percentage Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 7,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-ratios-and-proportion-tg-t-m",
            title: "Year 7  Ratios / Proportions Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 8,
            link: "https://www.ixl.com/math/grade-7",
            title: "Year 8 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 8,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-percentages-tg-t-m",
            title: "Year 8 Percentage Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 8,
            link: "https://www.twinkl.co.uk/resource/the-numbers-game-tournament-ratios-and-proportion-tg-t-m",
            title: "Year 8 Ratios / Proportions Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 9,
            link: "https://www.ixl.com/math/grade-8",
            title: "Year 9 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 9,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-percentages-tg-t-m",
            title: "Year 9 Percentage Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "kinesthetic"],
            year: 9,
            link: " https://www.twinkl.co.uk/resource/the-numbers-game-tournament-ratios-and-proportion-tg-t-m",
            title: "Year 9 Ratios / Proportions Game",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 10,
            link: " https://www.ixl.com/math/algebra-1",
            title: "Year 10 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 11,
            link: "  https://www.ixl.com/math/geometry",
            title: "Year 11 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 12,
            link: "https://www.ixl.com/math/algebra-2",
            title: "Year 12 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 13,
            link: " https://www.ixl.com/math/precalculus",
            title: "Year 13 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },



        {
            category: ["audio"],
            year: 2,
            link: "https://www.bbc.co.uk/teach/school-radio/cloud-rating-1/zkgt7nb",
            title: "Year 2 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 2,
            link: "https://www.mathplayground.com/grade_1_games.html",
            title: "Year 2 Maths Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 2,
            link: "http://www.jmathpage.com/wpjmp/1st-grade-grade-1-page-1/",
            title: "Year 2 Maths Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 2,
            link: "https://apps.apple.com/us/app/otsimo-special-education-aac/id1084723774",
            title: "Year 2 Device Learning",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: " https://app.otsimo.org/special-education?gclid=CjwKCAjwy42FBhB2EiwAJY0yQuYkoFkdxJUsE9YuvEVsOfe3JjCLaxWHcCck75KqVuzOm3OfPfv5SxoCEGIQAvD_BwE#utm_source=ad-grants&utm_medium=cpc&utm_campaign=ad-grants-debut&utm_content=autism-apps?campaignid=1916697596&adgroupid=70090526345&adid=395718843548",
            title: "Year 2 iPad Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: "https://apps.apple.com/us/app/pop-math-lite/id303258911",
            title: "Year 2 iPad / iPhone Application",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["audio"],
            year: 3,
            link: " https://www.bbc.co.uk/teach/school-radio/cloud-rating-1/zkgt7nb",
            title: "Year 3 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 3,
            link: " https://www.mathplayground.com/grade_2_games.html",
            title: "Year 2 Maths Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 3,
            link: "http://www.jmathpage.com/wpjmp/start-second/",
            title: "Year 2 Maths Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["audio"],
            year: 4,
            link: " https://www.bbc.co.uk/teach/school-radio/cloud-rating-3/zjy6qp3",
            title: "Year 4 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 4,
            link: "https://www.mathplayground.com/grade_3_games.html",
            title: "Year 4 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 5,
            link: "https://www.mathplayground.com/grade_4_games.html",
            title: "Year 5 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 6,
            link: "https://www.mathplayground.com/grade_5_games.html",
            title: "Year 6 Maths Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 7,
            link: "https://www.mathplayground.com/grade_6_games.html",
            title: "Year 7 Maths Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },


    ]

    const english = [
        {
            category: ["visual", "reflective"],
            year: 2,
            link: "https://www.ixl.com/ela/grade-1",
            title: "Year 2 English Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 3,
            link: "https://www.ixl.com/ela/grade-2",
            title: "Year 3 English Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 4,
            link: "https://www.ixl.com/ela/grade-3",
            title: "Year 4 English Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 5,
            link: "https://www.ixl.com/ela/grade-4",
            title: "Year 5 English Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 6,
            link: "https://www.ixl.com/ela/grade-5",
            title: "Year 6 English Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 7,
            link: "https://www.ixl.com/ela/grade-6",
            title: "Year 7 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 8,
            link: "https://www.ixl.com/ela/grade-7",
            title: "Year 8 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 9,
            link: "https://www.ixl.com/ela/grade-8",
            title: "Year 9 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 10,
            link: "https://www.ixl.com/ela/grade-9",
            title: "Year 10 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 11,
            link: "https://www.ixl.com/ela/grade-10",
            title: "Year 11 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 12,
            link: "https://www.ixl.com/ela/grade-11",
            title: "Year 12 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 13,
            link: "https://www.ixl.com/ela/grade-12",
            title: "Year 13 English Literature / Language Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 2,
            link: "https://toytheater.com/category/language-arts/",
            title: "Year 2 English Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective", "kinesthetic"],
            year: 2,
            link: "https://apps.apple.com/us/app/otsimo-special-education-aac/id1084723774",
            title: "Year 2 Device Learning",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: "https://app.otsimo.org/special-education?gclid=CjwKCAjwy42FBhB2EiwAJY0yQuYkoFkdxJUsE9YuvEVsOfe3JjCLaxWHcCck75KqVuzOm3OfPfv5SxoCEGIQAvD_BwE#utm_source=ad-grants&utm_medium=cpc&utm_campaign=ad-grants-debut&utm_content=autism-apps?campaignid=1916697596&adgroupid=70090526345&adid=395718843548",
            title: "Year 2 iPad Games",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: "https://apps.apple.com/us/app/language-therapy-for-kids-mita/id1020290425",
            title: "Year 2 iPad Application",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: "https://play.google.com/store/apps/details?id=com.imagiration.mita",
            title: "Year 2 Android Application",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: " https://apps.apple.com/us/app/social-story-creator-library/id588180598?ign-mpt=uo%3D8",
            title: "Year 2 iPad / iPhone Application",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: "https://apps.apple.com/us/app/endless-reader/id722910739",
            title: "Year 2 iPad / iPhone Application",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["audio", "kinesthetic"],
            year: 2,
            link: "https://apps.apple.com/us/app/speech-blubs-language-therapy/id1544715736",
            title: "Year 2 iPad / iPhone Application",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },



    ]
    const science = [
        {
            category: ["visual", "reflective"],
            year: 3,
            link: "https://www.ixl.com/science/grade-2",
            title: "Year 3 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
        {
            category: ["visual", "reflective"],
            year: 4,
            link: "https://www.ixl.com/science/grade-3",
            title: "Year 4 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 5,
            link: "https://www.ixl.com/science/grade-4",
            title: "Year 5 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 6,
            link: "https://www.ixl.com/science/grade-5",
            title: "Year 6 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 7,
            link: "https://www.ixl.com/science/grade-6",
            title: "Year 7 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 8,
            link: "https://www.ixl.com/science/grade-7",
            title: "Year 8 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 9,
            link: "https://www.ixl.com/science/grade-8",
            title: "Year 9 Science Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        }

    ]

    const historyGeography = [
        {
            category: ["visual", "reflective"],
            year: 7,
            link: "https://www.ixl.com/social-studies/grade-6",
            title: "Year 7 History & Geography Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 8,
            link: " https://www.ixl.com/social-studies/grade-7",
            title: "Year 8 History & Geography Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },

        {
            category: ["visual", "reflective"],
            year: 9,
            link: "https://www.ixl.com/ela/grade-8",
            title: "Year 9 History & Geography Resources",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
        },
    ]
// Maths filters
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
// English filters

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
// Science Filters

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
    // HistoryGeography Filters

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

    const handleseeAll = () => {
        setSeeAll(prev => !prev)
    }
    return (
        <div className="subjectSection">
            <div className="subjectSection__header">
                <h1>{subject}</h1>
                <div onClick={handleseeAll} className="seeAll__button pointer">
                    {seeAll ? `SEE LESS <` : ` SEE ALL >`}
                </div>
            </div>
           
            {(subject == "Mathematics") ?
                <FilteredMaths subject="Mathematics" seeAll={seeAll} maths={maths} />
                :
                ""
               
            }
           
           {/* <FilteredEnglish subject="English" selectedTabAuditory={selectedTabAuditoryL} selectedTabKinesthetic={true} selectedTabReflective={selectedTabReflectiveL} selectedTabVisual={selectedTabVisualL} seeAll={seeAll} english={english} /> */}
           {(subject == "English") ?
                <FilteredEnglish subject="English" seeAll={seeAll} english={english} /> 
                :
                ""
            }  

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


        </div>
    )
}

export default SubjectSection
