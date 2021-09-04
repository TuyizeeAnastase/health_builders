import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="loginContent">
        <div className="login-Title">
          <div style={{ backgroundColor: "white" }}>
            <img src={logo} alt="" />
          </div>
          <h3>Welcome to performance survey</h3>
          <h4 className="login-header2">
            Paternering with Rwandan commuinities to improve the quality of
            their health care
          </h4>
        </div>
        <form action="" className="loginForm">
          <div>
            <i class="fa fa-user"></i>
            <input type="text" className="username" placeholder="Email" />
          </div>
          <div>
            <i class="fa fa-lock"></i>
            <input
              type="text"
              className="password"
              placeholder="Enter your password"
            />
          </div>
          <Link to="/info">
            <input type="submit"  className="loginBtn" value="LOGIN" />
          </Link>
        </form>
        <div className="forgot">
          <Link to="/forgot">
            <h3 className="forgot-password">forgot Password?</h3>
          </Link>
          <Link to="/signUp">
            <h3 className="sign-up-link">Don't have account create one</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
