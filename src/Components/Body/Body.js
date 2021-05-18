import React, { useEffect, useState } from 'react'
import SubjectSection from '../Subject Section/SubjectSection'
import header1 from '../../assets/header1.png'
import './Body.css'

function Body() {
    const[selectedTabVisual, setSelectedTabVisual]= useState(false)
    const[selectedTabAuditory, setSelectedTabAuditory]= useState(false)
    const[selectedTabKinesthetic, setSelectedTabKinesthetic]= useState(false)
    const[selectedTabReflective, setSelectedTabReflective]= useState(false)


    const toggleSelected=(id)=>{
        if((id=='visual')){
           setSelectedTabVisual((prev)=>{ return !prev})
            if(true){
                setSelectedTabAuditory(false)
                setSelectedTabKinesthetic(false)
                setSelectedTabReflective(false)
            }
            
        }
        else if((id=='auditory')){
           
            setSelectedTabAuditory((prev)=>!prev)
            if(true){
                setSelectedTabVisual(false)
                setSelectedTabKinesthetic(false)
                setSelectedTabReflective(false)
            }
        }
        else if( (id=='kinesthetic')){
            setSelectedTabKinesthetic((prev)=>!prev)
            if(true){
                setSelectedTabVisual(false)
                setSelectedTabAuditory(false)
                setSelectedTabReflective(false)
            }
        }
        else if((id=='reflective')){
            setSelectedTabReflective((prev)=>!prev)
            if(true){
                setSelectedTabVisual(false)
                setSelectedTabAuditory(false)
                setSelectedTabKinesthetic(false)
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
             <SubjectSection subject="Mathematics" />
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