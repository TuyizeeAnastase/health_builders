import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './signUp.css';
import nurse from '../../images/nurse.jpeg';

const signUp=()=>{
    return(
        <div className="sign-up">
            <div className="header">
              <img src={logo} alt="" />
              <Link to="/"><p>Already have account ? Login</p></Link>
            </div>
            <div className="left">
                <h2>Sign Up</h2>
                <p>Strengthining helath care in Rwanda</p>
                <form action="" className="signup">
                    <div className="inputBox">
                      <label >Full Name</label>
                      <input type="text" />
                    </div>
                    <div className="inputBox">
                       <label>Phone Number</label>
                       <input type="text" />
                    </div>
                    <div className="inputBox">
                      <label>Job Title</label>
                      <input type="text" />
                    </div>
                    <div className="inputBox">
                      <label>Email</label>
                       <input type="email" />
                    </div>
                    <div className="inputBox">
                      <label>Password</label>
                      <input type="password" />
                    </div>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
            <div className="right">
                <img src={nurse} alt="" />
            </div>
        </div>
    )
}

export default signUp;