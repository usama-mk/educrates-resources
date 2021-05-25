import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setUser } from '../../actions'
import backButton from '../../assets/back.png'
import logo from '../../assets/logo.svg'
import firebaseApp from '../../firebase.js'
import '../SignIn/SignIn.css'

function Register() {

    const [email, setEmail]= useState("")
    const [emailError, setEmailError]= useState("")

    const [password, setPassword]= useState("")
    const [passwordError, setPasswordError]= useState("")

    // const [user, setUser]= useState("")
    const [waiting, setWaiting]= useState(false)

    const history= useHistory()
    const dispatch= useDispatch()

    const handleSignup=()=>{
        setWaiting(true)
        firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            alert(errorMessage)
            // ...
          }).then((userL)=>{
              if(userL){
                  dispatch(setUser(userL))
                  history.push("/")  
              }
                setWaiting(false)
                
          }) ;
    }

    return (
        <div className='signIn'>
            <Link to='/loginregister' style={{textDecoration: 'none'}}>
                <div className="signinup__back">
                    <img src={backButton} alt="back" />
                </div>
            </Link>
            

            <div className="signInForm">
                <div className="signInForm__heading">
                    Register
                </div>

                <div className="email">
                    <input type="text" placeholder="jane@example.com" onChange={(e)=> setEmail(e.target.value)} value={email} />
                </div>


               <div className="logo">
               <img src={logo} alt="logo" max-width="377px" height="200px" />
               </div>

               <div className="password email">
                    <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
                </div>

                <div onClick={handleSignup} className="loginButton">
                {waiting?"Setting up account ...": "NEXT"}
                </div>
            </div>
        </div>
    )
}

export default Register
