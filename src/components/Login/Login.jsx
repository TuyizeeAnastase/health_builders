import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Login=()=>{
    return (
      <div className="log">
       <div className="login" style={{background:'rgb(35,35,56,.9)'}}>
         <div className="login-Title">
           <div style={{background:'#fff',marginTop:'0px'}}>
             <img src={logo} alt="" style={{height:'70px'}}/>
           </div>
           <h3 className="login-header2">Welcome to CHC community Portal login below using the email that you have on CHC file</h3>
           <form action="" className="login">
             <i class="fa fa-user" style={{marginLeft:'-6rem',marginTop:'4px',fontSize:'30px',color:'seagreen',position:'absolute'}}></i>
             <input type="text" className="username" placeholder="Email" />
             <input type="text" className="password" placeholder="Enter your password" />
             <i class="fa fa-lock" style={{marginLeft:'-30rem',marginTop:'4px',fontSize:'30px',color:'seagreen',position:'absolute'}}></i>
             <Link to="/info">
                <input type="submit" value="LOGIN" />
             </Link>
           </form>
           <div className="forgot">
             <Link to="/forgot" style={{textDecoration:'none',color:'#000'}}><h3 className="forgot-password">forgot Password?</h3></Link>
             <Link to="/signUp" style={{textDecoration:'none',color:'#000'}}><h3 className="sign-up-link">Don't have account create one</h3></Link>
           </div>
         </div>
       </div>
       </div>
    ) 
}

export default Login;