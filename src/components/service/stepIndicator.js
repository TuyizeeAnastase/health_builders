import React from "react";
import { NavLink } from "react-router-dom";
import "./service.css";

const StepIndicator = () => {
  const steps = [
    {
      path: "/service/step1",
    },
    {
      path: "/service/step2",
    },
    {
      path: "/service/step3",
    },
  ];
  const handleStop = (e) => {
    e.preventDefault();
  };
  return (
    <div className="stepIndicator">
      {steps.map((step, index) => {
        return (
          <>
            <NavLink
              onClick={handleStop}
              activeClassName="activeLink"
              key={index}
              to={step.path}
            >
              {index + 1}
            </NavLink>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default StepIndicator;
