import React from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'


function Header() {
    return (
        <div className="header">
        <img src={logo} alt="logo" />

        <div className="header__mid">
          <div className="header__mid__home">
            Home
          </div>

          <div className="header__mid__social">
            Social
          </div>

          <div className="header__mid__resources">
            Resources
          </div>

          <div className="header__mid__foundation">
            Foundation
          </div>
        </div>

        <div className="header__right">
          SIGN IN
        </div>

      </div>
    )
}

export default Header
