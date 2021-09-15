import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import "./service.css";
import StepIndicator from "./stepIndicator";
import Service1  from "./Service1";
import Service2 from './service2';
import Service3 from './service3';

const Service = () => {
  const history = useHistory();
  // const handleNextF = () => {
  //   history.push("/service/step3");
  // };
  const last=()=>{
    history.push("/leadership")
  }
  const first=()=>{
    history.push("/service/step1")
  }
  const second=()=>{
    history.push("/service/step2");
  }
  const third=()=>{
    history.push("/service/step3");
  }

  return (
    <div className="service">
      <div className="maincontent">
        <div className="output">
          <Route exact path="/service/step1">
           <Service1/>
            <div className="btnContainer" >
              <button className="btnContainerLinkB" onClick={last}>Back</button>
              <button className="btnContainerLink" onClick={second}>Next</button>
            </div>
          </Route>
          <Route exact path="/service/step2">
           <Service2/>
            <div className="btnContainer">
              <button className="btnContainerLinkB" onClick={first}>Back</button>
              <button className="btnContainerLink" onClick={third}>Next</button>
            </div>
          </Route>
          <Route exact path="/service/step3">
           <Service3/>
            <div className="btnContainer">
              <button className="btnContainerLinkB" onClick={second}>Back</button>
              <button className="btnContainerLink">Submit</button>
            </div>
          </Route>
        </div>
        <StepIndicator />
      </div>
    </div>
  );
};

export default Service;
