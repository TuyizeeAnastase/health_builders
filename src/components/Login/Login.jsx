import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Login=()=>{
    return (
      <div className="log">
       <div className="login">
         <div className="login-Title">
           <div style={{background:'#fff',marginTop:'0px'}}>
             <img src={logo} alt="" style={{height:'70px'}}/>
           </div>
           <h1 className="login-header1">Welcome to performanance survey</h1>
           <h3 className="login-header2">Partenering with Rwandan communities to improve the quality of their health care</h3>
           <form action="" className="login">
             <input type="text" className="username" placeholder="Enter your email" />
             <i class="fa fa-user" style={{marginLeft:'-20rem',marginTop:'4px',fontSize:'30px',color:'seagreen',position:'absolute'}}></i>
             <input type="text" className="password" placeholder="Enter your password" />
             <i class="fa fa-lock" style={{marginLeft:'-20rem',marginTop:'4px',fontSize:'30px',color:'seagreen',position:'absolute'}}></i>
             <i class="fa fa-eye" style={{marginLeft:'-2.5rem',cursor:'pointer',marginTop:'4px',fontSize:'30px',color:'#000',position:'absolute'}}></i>
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