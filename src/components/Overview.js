import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../images/logo.png";
import Info from "./Info/Info";
import Performance from "../components/performance/Performance";
import Leadership from "../components/leadership/Leadership";
import Service from "./service1/Service";

const Overview = () => {
  return (
    <Router>
        
      <nav>
        <div className="logo">
          <i
            className="fa fa-bars barIcon"
            style={{ fontSize: "30px", color: "#000" }}
          ></i>
          <Link to="/">
            <img
              style={{ marginTop: "-4px" }}
              src={logo}
              alt=""
              className="logoIm"
            />
          </Link>
        </div>
        <Link to="/signUp">
          <div className="user">
            <select id="user" name="user">
              <option value="username">username</option>
              <option value="logout">Logout</option>
              <option value="account">account</option>
            </select>
            <i
              class="fa fa-user"
              style={{ marginRight: "74rem", position: "absolute" }}
            ></i>
          </div>
        </Link>
      </nav>
      <Route path="/info" exact component={Info} />
      <Route path="/performance" exact component={Performance} />
      <Route path="/leadership" exact component={Leadership} />
      <Route path="/service/:step" exact component={Service}/>
    </Router>
  );
};

export default Overview;
