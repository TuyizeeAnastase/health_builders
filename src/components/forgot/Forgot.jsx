import React from 'react';
import './forgot.css'

import logo from '../../images/logo.png';
import children from '../../images/children.jpeg';
import { Link } from 'react-router-dom';


const Forgot=()=>{
    return (
        <div className="forgot">
            <div className="header">
              <img src={logo} alt="" />
             <Link to="/"><p>Remember your password ? <span>Login</span></p></Link> 
            </div>
            <div className="left">
                <p>Enter your email below and we will send you intructions to reset your password</p>
                <form action="" className="forgotF">
                    <div className="inputBox">
                      <label>Email</label>
                       <input type="email" placeholder="Email" />
                    </div>
                    <Link to="/feedback"><input className="forgotBtn" type="submit" value="Reset Password" /></Link>
                </form>
            </div>
            <div className="rightF">
                <img src={children} alt="" />
            </div>
        </div>
    )
}

export default Forgot;

