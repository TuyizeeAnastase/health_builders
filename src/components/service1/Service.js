import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "./service.css";
import StepIndicator from "./stepIndicator";
import Service1  from "./Service1";

const Service = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push("/service/step3");
  };

  return (
    <div className="service">
      <div className="maincontent">
        <div className="output">
          <Route exact path="/service/step1">
           <Service1/>
            <div className="btnContainer">
              <Link to="/leadership">Back</Link>
              <Link to="/service/step2">Next</Link>
            </div>
          </Route>
          <Route exact path="/service/step2">
           <Service1/>
            <div className="btnContainer">
              <Link to="/service/step1">Back</Link>
              <button onClick={handleNext}>Next</button>
            </div>
          </Route>
          <Route exact path="/service/step3">
           <Service1/>
            <div className="btnContainer">
              <Link to="/service/step2">Back</Link>
              <button onClick={handleNext}>Next</button>
            </div>
          </Route>
        </div>
        <StepIndicator />
      </div>
    </div>
  );
};

export default Service;
