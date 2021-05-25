import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setUser } from '../../actions'
import logo from '../../assets/logo.svg'
import firebaseApp from '../../firebase.js'
import './Header.css'


function Header({ home, social, teachers, aboutUs }) {
  const user = useSelector((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogout = () => {
    firebaseApp.auth().signOut().then(() => {
      dispatch(setUser(false))
    });
  }

  const handleRoute = () => {
    history.push('./loginregister')
  }

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
      else {
        dispatch(setUser(false));
      }
    })
  }

  useEffect(() => {
    authListener(); //on app starting check if user is available or not
  }, []);


  return (
    // Header component having logo and other buttons
    <div className="header">
      <img src={logo} alt="logo" />

      <div className="header__mid">
        <div className={`header__mid__home pointer ${home ? 'selectedHeader' : ""} `}>
          <Link to='/' style={{ textDecoration: 'none', color: home ? 'white' : 'lightGrey' }}> Home </Link>
        </div>

        <div className={`header__mid__home pointer ${social ? 'selectedHeader' : ""} `}>
          Social
          </div>


        <div className={`header__mid__home pointer ${teachers ? 'selectedHeader' : ""} `}>
          <Link to='/teachers' style={{ textDecoration: 'none', color: teachers ? 'white' : 'lightGrey' }}> Teachers </Link>
        </div>


        <div className={`header__mid__home pointer ${aboutUs ? 'selectedHeader' : ""} `}>
          About Us
          </div>
      </div>

      <div onClick={user ? handleLogout : handleRoute} className="header__right pointer">
        {
          !user ? "SIGN IN >"
            :
            "LOG OUT <"
        }
      </div>

    </div>
  )
}

export default Header
