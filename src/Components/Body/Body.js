import React, { useEffect, useState } from 'react'
import SubjectSection from '../Subject Section/SubjectSection'
import header1 from '../../assets/header1.png'
import {toggleAuditory, toggleEnglishTeacher, toggleKinesthetic, toggleMathsTeacher, toggleMusicTeacher, toggleReflective, toggleScienceTeacher, toggleVisual} from '../../actions/index.js'
import './Body.css'
import visualIcon from '../../assets/eyeVisual.svg'
import reflectiveIcon from '../../assets/reflectiveIcon.svg'
import touchIcon from '../../assets/touchIcon.svg'
import headsetIcon from '../../assets/headsetIcon.svg'
import visualIconUnselect from '../../assets/eyeVisualUnselect.svg'
import englishLogo from '../../assets/teachersSubjectLogos/englishLogo.svg'
import mathsLogo from '../../assets/teachersSubjectLogos/mathsLogo.svg'
import scienceLogo from '../../assets/teachersSubjectLogos/scienceLogo.svg'
import musicLogo from '../../assets/teachersSubjectLogos/musicLogo.png'

import { useDispatch, useSelector } from 'react-redux'

function Body({home, social, teachers, aboutUs}) {
    // There constants control the category state of the app, updates which category is selected currently
    const selectedTabVisual= useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory= useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic= useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective= useSelector(state => state.selectedTabReflective)

    const selectedTabMaths= useSelector(state => state.selectedTabMaths)
    const selectedTabScience= useSelector(state => state.selectedTabScience)
    const selectedTabEnglish= useSelector(state => state.selectedTabEnglish)
    const selectedTabMusic= useSelector(state => state.selectedTabMusic)
   
    const dispatch= useDispatch();

    // this function is fired when clicked on the categories button, this function basically checks which button was clicked, updates the state of the app accordingly
    const toggleSelected=(id)=>{
        if((id=='visual')){
            
            dispatch(toggleVisual(!selectedTabVisual))
           
            if(true){
                dispatch(toggleAuditory(false))
                dispatch(toggleKinesthetic(false))
                dispatch(toggleReflective(false))
            }
           
            
        }
        else if((id=='auditory')){
             dispatch(toggleAuditory(!selectedTabAuditory))
           
            if(true){
                dispatch(toggleVisual(false))
                dispatch(toggleKinesthetic(false))
                dispatch(toggleReflective(false))
            }
        }
        else if( (id=='kinesthetic')){
            dispatch(toggleKinesthetic(!selectedTabKinesthetic))
           
            if(true){
                dispatch(toggleVisual(false))
                dispatch(toggleAuditory(false))
                dispatch(toggleReflective(false))
            }
        }
        else if((id=='reflective')){
            dispatch(toggleReflective(!selectedTabReflective))

            if(true){
                dispatch(toggleVisual(false))
                dispatch(toggleAuditory(false))
                dispatch(toggleKinesthetic(false))
                
            }
        }
    }

    const toggleSelectedTeachers=(id)=>{
        if((id=='maths')){
            
            dispatch(toggleMathsTeacher(!selectedTabMaths))
           
            if(true){
                dispatch(toggleEnglishTeacher(false))
                dispatch(toggleMusicTeacher(false))
                dispatch(toggleScienceTeacher(false))
            }
           
            
        }
        else if((id=='science')){
             dispatch(toggleScienceTeacher(!selectedTabScience))
           
            if(true){
                dispatch(toggleEnglishTeacher(false))
                dispatch(toggleMusicTeacher(false))
                dispatch(toggleMathsTeacher(false))
            }
        }
        else if( (id=='english')){
            dispatch(toggleEnglishTeacher(!selectedTabEnglish))
           
            if(true){
                dispatch(toggleMusicTeacher(false))
                dispatch(toggleMathsTeacher(false))
                dispatch(toggleScienceTeacher(false))
            }
        }
        else if((id=='music')){
            dispatch(toggleMusicTeacher(!selectedTabMusic))

            if(true){
                dispatch(toggleMathsTeacher(false))
                dispatch(toggleScienceTeacher(false))
                dispatch(toggleEnglishTeacher(false))
                
            }
        }
    }
    return (
        <div className="body" >
{/* Tab buttons */}
{/* Through these buttons we select the category to filter out of the subjects' lessons */}
            {
                teachers?
                <div className="body__buttons">
                <div onClick={()=>{toggleSelectedTeachers("maths")}} id="maths" className={`visual__button  ${selectedTabMaths ? "tab__button__selected":"tab__button"} pointer`}>
                  <img className="tabsIcon" src={mathsLogo} />  MATHS
                </div>

                <div onClick={()=>toggleSelectedTeachers("science")} id="science" className={`auditory__button ${selectedTabScience ? "tab__button__selected":"tab__button"} pointer`}>
                <img className="tabsIcon" src={scienceLogo} />   SCIENCE
                </div>

                <div onClick={()=>toggleSelectedTeachers("english")} id="english" className={`kinesthetic__button ${selectedTabEnglish ? "tab__button__selected":"tab__button"} pointer`}>
                <img className="tabsIcon" src={englishLogo} />   ENGLISH
                </div>

                <div onClick={()=>toggleSelectedTeachers("music")} id="music" className={`reflective__button ${selectedTabMusic ? "tab__button__selected":"tab__button"} pointer`}>
                <img className="tabsIcon" src={musicLogo} />   MUSIC
                </div>
            </div>

                :
                <div className="body__buttons">
                <div onClick={()=>{toggleSelected("visual")}} id="visual" className={`visual__button  ${selectedTabVisual ? "tab__button__selected":"tab__button"} pointer`}>
                  <img className="tabsIcon" src={visualIconUnselect} />  VISUAL
                </div>

                <div onClick={()=>toggleSelected("auditory")} id="auditory" className={`auditory__button ${selectedTabAuditory ? "tab__button__selected":"tab__button"} pointer`}>
                <img className="tabsIcon" src={headsetIcon} />   AUDITORY
                </div>

                <div onClick={()=>toggleSelected("kinesthetic")} id="kinesthetic" className={`kinesthetic__button ${selectedTabKinesthetic ? "tab__button__selected":"tab__button"} pointer`}>
                <img className="tabsIcon" src={touchIcon} />   KINESTHETIC
                </div>

                <div onClick={()=>toggleSelected("reflective")} id="reflective" className={`reflective__button ${selectedTabReflective ? "tab__button__selected":"tab__button"} pointer`}>
                <img className="tabsIcon" src={reflectiveIcon} />   REFLECTIVE
                </div>
            </div>
            }

{/* Subjects */}
{/* There are The subject components and in subject components we render subjectCards */}
             {
                 home?
                 (
                     <div>
            <SubjectSection subject="Mathematics" selectedTabVisual={selectedTabVisual} selectedTabAuditory={selectedTabAuditory} selectedTabKinesthetic={selectedTabKinesthetic} selectedTabReflective={selectedTabReflective} />
             <SubjectSection subject="English" />
             <SubjectSection subject="Science" />
             <SubjectSection subject="History And Geography" />
             <SubjectSection subject="Primary School Resources" />
             <SubjectSection subject="Secondary School Resources" />
                     </div>
                 )
             :
             ""
             }
    {/* Subject section teachers */}
            {
                 teachers?
                 (
                     <div>
            <SubjectSection teachers={true} subject="Mathematics teachers" selectedTabVisual={selectedTabVisual} selectedTabAuditory={selectedTabAuditory} selectedTabKinesthetic={selectedTabKinesthetic} selectedTabReflective={selectedTabReflective} />
            <SubjectSection teachers={true} subject="English teachers" />
            <SubjectSection teachers={true} subject="Science teachers" />
             
             
             
                     </div>
                 )
             :
             ""
             }

        </div>
    )
}

export default Body