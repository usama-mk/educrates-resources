import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import aboutUsImage from '../../assets/aboutUsImage.png'
import book from '../../assets/book.png'
import gc from '../../assets/gc.png'
import './AboutUsBody.css'

function AboutUsBody() {
    const history= useHistory()

    const goHome=()=>{
        history.push('/')
    }
    return (
        <div className="aboutUsBody">
            <div className="aboutUsPara">
                Educrates is an educational web application that specialises in providing academic resources through computer aided learning that are catered towards students who have been diagnosed with Autism or ADHD. The educational Resources provided are divided into four categories that are tailored towards students learning styles. the four learning styles provided consist of Visual, Audio, Kinesthetic and Reflective. Students can select the learning style that works best for them and choose from the three categories of Maths, English and Science. These educational Resources have been divided into years 2 - 13 to make selection easier for our users.
            </div>

            <div className="aboutUsMidImage">
                <img src={aboutUsImage} alt="" max-width="485px" max-height="487px" />
            </div>

            <div className="aboutUsPara aboutUsParaTwo">
                Educrates also provides a one to one tuition service enlisting teachers that have Special Education Needs qualifications making them an ideal fit for students with developmental disorders such as Autism and ADHD. The teachers will be divided into four categories consisting of Maths, English, Science and Music. The process is as simple as clicking on a teachers profile, which will redirect the user straight to their full profile with a booking system available to schedule online lessons.
            </div>

            <div className="aboutUsNavigation">
                <div className="about__Nav">
                    <div className="about__NavSection">
                    <div>
                            <img src={gc} alt="" />
                        </div>

                        <div className="nav__text">
                        ONE TO ONE TUITION
                        </div>
                    </div>

                    <Link to='/teachers' style={{textDecoration:'none'}}>
                    <div className="nav__access">
                        
                            CLICK TO ACCESS
                     
                    </div>
                    </Link>
                </div>

                <div className="about__Nav">
                    <div className="about__NavSection">
                        <div>
                            <img src={book} alt="" />
                        </div>

                        <div className="nav__text">
                            SCHOOL RESOURCES
                     </div>
                    </div>

                    <Link onClick={goHome} style={{textDecoration:'none'}}>
                    <div className="nav__access">
                        
                            CLICK TO ACCESS
                     
                    </div>
                    </Link>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default AboutUsBody
