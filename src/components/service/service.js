import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "./service.css";
import StepIndicator from "./stepIndicator";

const Service = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push("/service/step2");
  };

  return (
    <div className="service">
      <div className="maincontent">
        <div className="output">
          <Route exact path="/service/step1">
            <div className="main-content">
              <h3>Job Description</h3>
              <div className="file">
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
              </div>
              <div className="available">
                <h4>available</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>Signed by employee</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>signed by employer</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>signed by employer</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>signed by employer</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
            </div>
            <div className="btnContainer">
              <button onClick={handleNext}>Next</button>
            </div>
          </Route>
          <Route exact path="/service/step2">
            <div className="main-content">
              <h3>Job Description</h3>
              <div className="file">
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
              </div>
              <div className="available">
                <h4>available</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="available">
                <h4>available</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="available">
                <h4>available</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
            </div>
            <div className="btnContainer">
              <Link to="/service/step1">Back</Link>
              <Link to="/service/step3">Next</Link>
            </div>
          </Route>
          <Route exact path="/service/step3">
            <div className="main-content">
              <h3>Job Description</h3>
              <div className="file">
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
                <h4>File</h4>
              </div>
              <div className="available">
                <h4>available</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>Signed by employee</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>signed by employer</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>signed by employer</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
              <div className="employer">
                <h4>signed by employer</h4>
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
                <input className="w4-check" type="checkbox" />
              </div>
            </div>
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
