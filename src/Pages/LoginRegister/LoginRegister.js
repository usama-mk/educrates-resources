import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './LoginRegister.css'

function LoginRegister() {
    return (
        <div className='loginRegister'>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <div className="loginRegister__logo">
                <img src={logo}  alt="logo" max-width="377px" height="200px"/>
            </div>
            </Link>

            <div className="loginRegister__Buttons">
                <Link to='/signin'style={{ textDecoration: 'none', color: 'white' }} >
                <div className="login button">
                    LOGIN
                </div>
                </Link>

                <Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>
                    <div className="register button">
                        REGISTER
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default LoginRegister
