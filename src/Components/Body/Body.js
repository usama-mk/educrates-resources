import React, { useEffect, useState } from 'react'
import SubjectSection from '../Subject Section/SubjectSection'
import header1 from '../../assets/header1.png'
import {toggleAuditory, toggleKinesthetic, toggleReflective, toggleVisual} from '../../actions/index.js'
import './Body.css'
import { useDispatch, useSelector } from 'react-redux'

function Body() {
    const selectedTabVisual= useSelector(state => state.selectedTabVisual)
    const selectedTabAuditory= useSelector(state => state.selectedTabAuditory)
    const selectedTabKinesthetic= useSelector(state => state.selectedTabKinesthetic)
    const selectedTabReflective= useSelector(state => state.selectedTabReflective)
    const selectedTabVisualL= useSelector(state => state.selectedTabVisual)
   
    const dispatch= useDispatch();

    const toggleSelected=(id)=>{
        if((id=='visual')){
            
            dispatch(toggleVisual(!selectedTabVisual))
            console.log("aaaaaaaaa"+selectedTabVisualL)

        //    setSelectedTabVisual((prev)=>{ return !prev})
           
            if(true){
                dispatch(toggleAuditory(false))
                dispatch(toggleKinesthetic(false))
                dispatch(toggleReflective(false))
                // setSelectedTabAuditory(false)
                // setSelectedTabKinesthetic(false)
                // setSelectedTabReflective(false)
            }
           
            
        }
        else if((id=='auditory')){
             dispatch(toggleAuditory(!selectedTabAuditory))
            // setSelectedTabAuditory((prev)=>!prev)
            if(true){
                dispatch(toggleVisual(false))
                dispatch(toggleKinesthetic(false))
                dispatch(toggleReflective(false))
                // setSelectedTabVisual(false)
                // setSelectedTabKinesthetic(false)
                // setSelectedTabReflective(false)
            }
        }
        else if( (id=='kinesthetic')){
            dispatch(toggleKinesthetic(!selectedTabKinesthetic))
            // setSelectedTabKinesthetic((prev)=>!prev)
            if(true){
                dispatch(toggleVisual(false))
                dispatch(toggleAuditory(false))
                dispatch(toggleReflective(false))
                // setSelectedTabVisual(false)
                // setSelectedTabAuditory(false)
                // setSelectedTabReflective(false)
            }
        }
        else if((id=='reflective')){
            dispatch(toggleReflective(!selectedTabReflective))
            // setSelectedTabReflective((prev)=>!prev)
            if(true){
                dispatch(toggleVisual(false))
                dispatch(toggleAuditory(false))
                dispatch(toggleKinesthetic(false))
                // setSelectedTabVisual(false)
                // setSelectedTabAuditory(false)
                // setSelectedTabKinesthetic(false)
            }
        }
    }
    return (
        <div className="body" >
{/* Tab buttons */}
            <div className="body__buttons">
                <div onClick={()=>{toggleSelected("visual")}} id="visual" className={`visual__button  ${selectedTabVisual ? "tab__button__selected":"tab__button"} pointer`}>
                    VISUAL
                </div>

                <div onClick={()=>toggleSelected("auditory")} id="auditory" className={`auditory__button ${selectedTabAuditory ? "tab__button__selected":"tab__button"} pointer`}>
                    AUDITORY
                </div>

                <div onClick={()=>toggleSelected("kinesthetic")} id="kinesthetic" className={`kinesthetic__button ${selectedTabKinesthetic ? "tab__button__selected":"tab__button"} pointer`}>
                    KINESTHETIC
                </div>

                <div onClick={()=>toggleSelected("reflective")} id="reflective" className={`reflective__button ${selectedTabReflective ? "tab__button__selected":"tab__button"} pointer`}>
                    REFLECTIVE
                </div>
            </div>

{/* Subjects */}
             <SubjectSection subject="Mathematics" selectedTabVisual={selectedTabVisual} selectedTabAuditory={selectedTabAuditory} selectedTabKinesthetic={selectedTabKinesthetic} selectedTabReflective={selectedTabReflective} />
             <SubjectSection subject="English" />
             <SubjectSection subject="Science" />
             <SubjectSection subject="History And Geography" />
{/* 
<SubjectSection subject="English" title="English Speaking by the webapp part one" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut purus ex. Praesent in velit eget nulla pharetra malesuada quis vitae nulla. Mauris faucibus, lorem at tempor efficitur, enim dolor tincidunt eros, id mollis nunc arcu eu mi. a malesuada quis vitae nulla. Maur"
              tutorName="Arsad Ansary" thumbnail={header1} link="https://www.google.com/" /> */}
        </div>
    )
}

export default Body