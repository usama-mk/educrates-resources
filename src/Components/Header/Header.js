import React from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'


function Header() {
    return (
        <div className="header">
        <img src={logo} alt="logo" />

        <div className="header__mid">
          <div className="header__mid__home pointer selectedHeader">
            Home
          </div>

          <div className="header__mid__social pointer">
            Social
          </div>

          <div className="header__mid__resources pointer">
            Resources
          </div>

          <div className="header__mid__foundation pointer">
            Foundation
          </div>
        </div>

        <div className="header__right pointer">
          SIGN IN &gt;
        </div>

      </div>
    )
}

export default Header
