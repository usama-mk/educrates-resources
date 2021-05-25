import React from 'react'
import Body from '../../Components/Body/Body';
import Header from '../../Components/Header/Header';
import HeaderCard from '../../Components/HeaderCard/HeaderCard';
import header1 from '../../assets/header1.png'
import header2 from '../../assets/header2.png'
import header3 from '../../assets/header3.png'
import tHeader1 from '../../assets/TeachersHeader/1.png'
import tHeader2 from '../../assets/TeachersHeader/2.png'
import tHeader3 from '../../assets/TeachersHeader/3.png'
import rec11 from '../../assets/rec11.png'
import { useDispatch } from 'react-redux';
import { toggleTeachersPage } from '../../actions/index'
import Footer from '../../Components/Footer/Footer';

function Teachers() {
    const dispatch = useDispatch();

    dispatch(toggleTeachersPage(true))
    return (
        <div className="teachers">
            {/*Header wrapper=> wraps the header of the web app in a container for styles */}
            <div className="header__wrapper">
                {/* Header of the component containing header buttons, displayed at the very top*/}
                <Header teachers={true} />

                {/* The welcome message */}
                <div className="welcome__message">
                    <h2>Welcome to</h2>
                    <h1>Educrates Resources</h1>
                </div>
                {/* Header Card having 3 images after the welcome message */}
                <HeaderCard teachers={true} tHeader1={tHeader1} tHeader2={tHeader2} tHeader3={tHeader3} header1={header1} header2={header2} header3={header3} rec11={rec11} />
            </div>


            {/* body of the entire app starting from the tab button */}
            <Body teachers={true} />
            {/* footer of the app, displayed at the very bottom */}
            <Footer />
        </div>
    )
}

export default Teachers
