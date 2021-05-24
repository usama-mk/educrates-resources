import React from 'react'
import Body from '../../Components/Body/Body';
import Header from '../../Components/Header/Header';
import HeaderCard from '../../Components/HeaderCard/HeaderCard';
import header1 from '../../assets/header1.png'
import header2 from '../../assets/header2.png'
import header3 from '../../assets/header3.png'
import rec11 from '../../assets/rec11.png'

function Home() {
    return (
        <div className="home">
            {/*Header wrapper=> wraps the header of the web app in a container for styles */}
            <div className="header__wrapper">
                {/* Header of the component containing header buttons, displayed at the very top*/}
                <Header home={true} />

                {/* The welcome message */}
                <div className="welcome__message">
                    <h2>Welcome to</h2>
                    <h1>Educrates Resources</h1>
                </div>
                {/* Header Card having 3 images after the welcome message */}
                <HeaderCard header1={header1} header2={header2} header3={header3} rec11={rec11}/>
            </div>


            {/* body of the entire app starting from the tab button */}
            <Body home={true}/>

        </div>
    )
}

export default Home
