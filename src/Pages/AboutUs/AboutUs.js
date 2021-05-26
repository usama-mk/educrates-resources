import React from 'react'
import Body from '../../Components/Body/Body';
import Header from '../../Components/Header/Header';
import HeaderCard from '../../Components/HeaderCard/HeaderCard';
import header1 from '../../assets/header1.png'
import header2 from '../../assets/header2.png'
import header3 from '../../assets/header3.png'
import rec11 from '../../assets/rec11.png'
import Footer from '../../Components/Footer/Footer';
import AboutUsBody from './AboutUsBody';

function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="header__wrapper">
                {/* Header of the component containing header buttons, displayed at the very top*/}
                <Header aboutUs={true} />

                {/* The welcome message */}
                <div className="welcome__message">
                    <h2>About Us</h2>
                    <h1>Educrates</h1>
                </div>
                {/* Header Card having 3 images after the welcome message */}
                <HeaderCard header1={header1} header2={header2} header3={header3} rec11={rec11}/>
            </div>


            {/* body of About Us page*/}
            <AboutUsBody/>


             {/* footer of the app, displayed at the very bottom */}
            <Footer />
        </div>
    )
}

export default AboutUs
