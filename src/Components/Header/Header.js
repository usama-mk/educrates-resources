import React from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'


function Header({home, social, teachers, aboutUs}) {
    return (
      // Header component having logo and other buttons
        <div className="header">
        <img src={logo} alt="logo" />

        <div className="header__mid">
          <div className={`header__mid__home pointer ${home?'selectedHeader':""} `}>
            Home
          </div>

          <div className={`header__mid__home pointer ${social?'selectedHeader':""} `}>
            Social
          </div>

          <div className={`header__mid__home pointer ${teachers?'selectedHeader':""} `}>
            Teachers
          </div>

          <div className={`header__mid__home pointer ${aboutUs?'selectedHeader':""} `}>
            About Us
          </div>
        </div>

        <div className="header__right pointer">
          SIGN IN &gt;
        </div>

      </div>
    )
}

export default Header
