import React from 'react';
import './performance.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Performance=()=>{
    return (
        <div className="performance">
          <div className="headerP">
              <h3>Performance Survey</h3>
              <div className="infoTop">
                  <div className="date">
                      <label >Date: 
                          <input type="date" value="12:00" required />
                      </label>
                  </div>
                  <div className="date">
                      <label >Start Time:
                          <input type="time" />
                      </label>
                  </div>
                  <div className="date">
                      <label >End Time:
                          <input type="time" />
                      </label>
                  </div>
              </div>
          </div>
          <div className="perf-content">
              <form action="" className="perfomanceF">
                  <div className="leftP">
                      <div className="performance-input">
                      <label htmlFor="">Health Center:  
                        <input  style={{marginLeft:'150px'}}  type="text" name="" id="" placeholder="Enter Health center" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor="">Population:
                        <input style={{marginLeft:'170px'}}  type="text" name="" id="" placeholder="Enter population number" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""> # of patients per day:
                        <input style={{marginLeft:'100px'}}  type="text" name="" id="" placeholder="Enter Number of patients per day" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""> # of beds:
                        <input style={{marginLeft:'180px'}}  type="text" name="" id="" placeholder="Enter number of beds" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of consultation rooms:
                        <input style={{marginLeft:'80px'}}  type="text" name="" id="" placeholder="Enter Health center" />
                      </label>
                      </div>
                  </div>
                  <div className="rightP">
                  <div className="performance-input">
                      <label htmlFor="">Sector name:
                        <input style={{marginLeft:'120px'}}  type="text" name="" id="" placeholder="Enter sector name" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of consultation rooms:
                        <input style={{marginLeft:'40px'}}  type="text" name="" id="" placeholder="Number of consultation rooms" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of cells:
                        <input style={{marginLeft:'150px'}}   type="text" name="" id="" placeholder="Enter  number of cells" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of village:
                        <input style={{marginLeft:'130px'}}  type="text" name="" id="" placeholder="Enter number of villages" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of public health:
                        <input style={{marginLeft:'90px'}} type="text" name="" id="" placeholder="Enter number of public health" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of private post:
                        <input style={{marginLeft:'100px'}} type="text" name="" id="" placeholder="Enter number of private post" />
                      </label>
                      </div>
                      <div className="performance-input">
                      <label htmlFor=""># of hospitalization room:
                        <input style={{marginLeft:'40px'}} type="text" name="" id="" placeholder="Enter number of hospitalization room" />
                      </label>
                      </div>
                  </div>
                  <div className="btn" style={{marginTop:'23rem',float:'right',marginRight:'-24rem'}}>
                     <Link to="/info"><input type="submit" value="Back" style={{backgroundColor:'#A47AB3'}} /></Link>
                     <Link to="/leadership"><input type="submit" value="Send" style={{marginLeft:'20px',backgroundColor:'seagreen'}} /></Link>
                  </div>
              </form>
          </div>
        </div>
    )
}

export default Performance;