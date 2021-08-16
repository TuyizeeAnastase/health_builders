import React from 'react';
import './feedback.css';

import logo from '../../images/logo.png'

const Feedback=()=>{
    return(
        <div className="feedback">
            <div className="header">
              <img src={logo} alt="" />
              <p>Remember your password ? <span>Login</span></p>
            </div>
            <div className="content">
                <h3 className="feedback-header">Check your email</h3>
                <p>
                    In a few minutes you will receive an email with instructions on how to reset password.
                </p>
                <button>Go To Your Email</button>
            </div>
        </div>
    )
}

export default Feedback;