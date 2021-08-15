import React from 'react';
import './login.css';

const Login=()=>{
    return (
       <div className="login">
         <div className="login-Title">
           <h1 className="login-header1">Welcome to performanance survey</h1>
           <h3 className="login-header2">Partenering with Rwandan communities to improve the quality of their health care</h3>
           <form action="" className="login">
             <input type="text" className="username" placeholder="Enter your email" />
             <input type="text" className="password" placeholder="Enter your password" />
             <input type="submit" value="LOGIN" />
           </form>
           <div className="forgot">
             <h3 className="forgot-password">forgot Password?</h3>
             <h3 className="sign-up-link">Don't have account create one</h3>
           </div>
         </div>
       </div>
    ) 
}

export default Login;