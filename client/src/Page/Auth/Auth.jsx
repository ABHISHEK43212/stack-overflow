import React, { useState } from "react";
import './Auths.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from '../../assets/logo.png'
import AboutAuths from './AboutAuths'
import { signUp, logIn } from "../../actions/auth";

const Auth = () => {
     const [isSignup,setIsSignup]=useState(false)
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    
    const dispatch =useDispatch()
    const navigate= useNavigate()

     const handelswitch =()=>{
      setIsSignup(!isSignup)
     }
     const handleSubmit = (e) => {
       e.preventDefault()
      if (!email && !password) {
        alert("Enter email and password");
      }
      if (isSignup) {
        if (!name) {
          alert("Enter a name to continue");
        }
        dispatch(signUp({ name, email, password }, navigate));
      } else {
        dispatch(logIn({ email, password }, navigate));
      } 
    }; 
  
  return (
   <section className='auths-section'> 
         {isSignup && <AboutAuths/>}
         <div className='auths-container-2'> 
                 {!isSignup && <img src={icon} alt='stack overflow ' className='login-logo'/>}
        <form onSubmit={ handleSubmit }>
          {isSignup && (
       <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name"  onChange={(e) => {setName(e.target.value)}}/>
        </label>
              )
          }
        <label htmlFor='email'>
                <h4>Email</h4>
                <input type='text' name='email' id='email'  onChange={(e) => {setEmail(e.target.value)}}/>
        </label>
        <label htmlFor='password'>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                 <h4>Password</h4>
                 {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password
                </p>
              )}
              </div>
              <input type="password" name='password' id='password'  onChange={(e) => {setPassword(e.target.value)}}/>
                  { isSignup &&  <p>
                  Passwords must contain at least eight<br/>
                  characters including atleast 1 letter and 1 <br/>number.
                </p>}
           </label>
           {
            isSignup && (
              <label htmlFor='check'>
                <input type="checkbox" id='check'/>
                <p style={{ fontSize:"13px"}}>
                Opt-in to receive occasional,<br/>
                product, updates, user research invitations,<br/>
                company announcements, and digests.
                </p>
              </label>
            )
           }
            <button type='submit'className='auth-btn '>{isSignup ? 'Sign Up': 'Log In'}</button>
            {
             isSignup && (

              <p style={{ color: "#666767", fontSize:"13px"}}>
                By clicking "Sign up", you agree to our 
                <span style={{ color: "#007ac6"}}>terms of <br/>service</span>,
                <span style={{ color: "#007ac6"}}> privacy policy</span> 
                <span style={{ color: "#007ac6"}}>and cookie policy</span>
              </p>
             )
            }
            </form>
          <p>
            {isSignup? 'already have an account ': "Dont have an account "}
            <button type='button' className='handel-switch-btn'onClick={handelswitch}>{isSignup ? "Log In ": 'Sign Up'}</button>
          </p>

           </div>
   </section>
   
  )
}

export default Auth;
