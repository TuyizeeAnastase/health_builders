import React from "react";
import "./leadership.css";
import { Link } from "react-router-dom";

const Leadership = () => {
  return (
    <div className="leadership">
      <div className="leadership-header">
        <div className="leadership--title">
          <p
            style={{
              textAlign: "center",
              color: "rgb(0, 197, 149)",
              fontSize: "20px",
            }}
          >
            Leadership Process and Accountability
          </p>
        </div>
      </div>
      <div className="top-info-l">
        <h3>Oragnisation Chart</h3>
        <form className="form-leadership">
          <div
            className="form-leadershipDiv"
            style={{ justifyContent: "space-around" }}
          >
            <label style={{ marginRight: "2rem" }}>Available</label>
            <input className="w3-check" type="checkbox" checked="checked" />
          </div>
          <div className="form-leadershipDiv">
            <label style={{ marginRight: "2rem" }}>Up-To-date</label>
            <input className="w3-check" type="checkbox" />
          </div>
          <div className="form-leadershipDiv">
            <label style={{ marginRight: "2rem" }}>Accessible to staff</label>
            <input className="w3-check" type="checkbox" disabled />
          </div>
        </form>
      </div>
      <div className="main-contentL">
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
        <form action="" className="position">
          <h4>Position</h4>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <div className="available">
          <h4>available</h4>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft: "-100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px" , marginLeft:"100px"}}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
        </div>
        <div className="employer">
          <h4>Signed by employee</h4>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft: "-100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px" , marginLeft:"100px"}}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
        </div>
        <div className="employer">
          <h4>signed by employer</h4>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft: "-100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px" , marginLeft:"100px"}}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{ width: "100px", height: "30px", marginLeft:"100px" }}
          >
            <option value="volvo">Options</option>
            <option value="saab">Y</option>
            <option value="opel">N</option>
            <option value="audi">N/A</option>
          </select>
        </div>
      </div>
      <div className="btn">
        <Link to="/info">
          <input
            type="submit"
            value="Back"
            style={{ backgroundColor: "#A47AB3" }}
          />
        </Link>
        <Link to="/service/step1">
          <input
            type="submit"
            value="Send"
            style={{ marginLeft: "20px", backgroundColor: "seagreen" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Leadership;
