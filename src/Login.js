import React, { useState } from 'react';

import Avatar from 'react-avatar';
import './Login.css';
import {useSpring,animated} from 'react-spring';
function Login(){
    const[registrationFormStatus,setRegistrationFormStatus]=useState(false);
const loginProps=useSpring({
    left:registrationFormStatus ? -500:0
})
const registerProps=useSpring({
    left:registrationFormStatus ? 0:500
})
const loginBtnProps=useSpring({borderBottom:registrationFormStatus ? 'solid 0px tansparent':'solid 2px #1059ff'})
const registerBtnProps=useSpring({borderBottom:registrationFormStatus ? 'solid 2px #1059ff':'solid 0px transparent'})
    function registerClicked(){setRegistrationFormStatus(true)}
function loginClicked(){setRegistrationFormStatus(false)}
    return(
        
    
       
        <div className="login-register-wrapper">
            
            
    
       <div className="form-group">
      
       <Avatar facebookId="100008343750912" size="100" round="20px" 
  className="avatar"
       />
    <animated.form action='' id='loginform' style={loginProps}><LoginForm /></animated.form>
    <animated.form action='' id='registerform' style={registerProps}><RegisterForm /></animated.form>
    <animated.div className="forgot-panel" style={loginProps}><a href='#'>forgot your password</a></animated.div>
    </div>
   
       
        </div>
        


    );
}
function LoginForm(){return(
    <React.Fragment>
       
    <label for="username">USERNAME</label>
<input type='text' id='username' placeholder="User Name"/>
<label for='password'>PASSWORD</label>
<input type='password' id='password' placeholder="Password"/>
<input type='submit' value='Login' className='submit' />
<animated.div className="forgot-panel" ><a href='#'>forgot your password?</a></animated.div>
</React.Fragment>
    )}
function RegisterForm(){return(
 <React.Fragment>
  
        <label for="fullname">full name</label>
        <input type="text" id="fullname" />
        <label for="email">email</label>
        <input type="text" id="email" />
        <label for="password">password</label>
        <input type="password" id="password" />
        <label for="confirmpassword">confirm password</label>
        <input type="password" id="confirmpassword" />
        <input type="Login" id="submit" value="Login" class="Login"/>
        </React.Fragment>
)}

export default Login;