import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setUser } from '../../actions'
import backButton from '../../assets/back.png'
import logo from '../../assets/logo.svg'
import firebaseApp from '../../firebase.js'
import './SignIn.css'

function SignIn() {

    const [email, setEmail]= useState("")
    const [emailError, setEmailError]= useState("")

    const [password, setPassword]= useState("")
    const [passwordError, setPasswordError]= useState("")

    const [waiting, setWaiting]= useState(false)
    const history= useHistory()
    const dispatch= useDispatch()
    
    const handleLogin=()=>{
        setWaiting(true)
        firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error=>{
            switch(error.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    console.log("error")
                    alert(error.message)
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message);
                    console.log("error")
                    alert(error.message)
                    break;
                
            }
        }).then((userL)=>{
            if(userL){

                dispatch(setUser(userL))
                history.push("/")
            }
            setWaiting(false)
            
        })
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
                    Log in
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

                <div onClick={handleLogin} className="loginButton">
                    {waiting?"logging in ...": "LOG IN"}
                </div>
            </div>
        </div>
    )
}

export default SignIn
