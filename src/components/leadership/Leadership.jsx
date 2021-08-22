import React from 'react';
import './leadership.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Leadership=()=>{
    return (
        <div className="leadership">
            <div className="header" >
              <div className="logo">
                  <i className="fa fa-bars barIcon" style={{fontSize:'30px'}}></i>
                  <Link to="/"><img style={{marginTop:'-4px'}} src={logo} alt=""  className="logoIm" /></Link>
                    <p style={{marginLeft:'18rem',textTransform:'uppercase'}}>Leadership Process and Accountability</p>
              </div>
              <div className="user">
                  <h3 className="username">
                  <i class="fa fa-user" style={{margin:'10px',color:'green'}}></i>
                      UserName
                  <i class="fa fa-chevron-down" style={{margin:'4px',cursor:'pointer'}}></i>
                  </h3>
              </div>
            </div>
            <h3 style={{marginLeft: '36rem',fontSize:'24px',color:'seagreen',float:'left',marginTop: '-34rem'}}>Leadership structure</h3>
            <div className="top-info">
                <h3>Oragnisation Chart</h3>
                <form className="form-leadership">
                  <div className="form-leadershipDiv" style={{justifyContent:'space-around'}}> 
                       <label style={{marginRight:'2rem'}}>Available</label>
                       <input className="w3-check" type="checkbox" checked="checked"/>
                  </div>
                  <div className="form-leadershipDiv">
                       <label style={{marginRight:'2rem'}}>Up-To-date</label>
                       <input className="w3-check" type="checkbox"/>
                  </div> 
                  <div className="form-leadershipDiv">
                       <label style={{marginRight:'2rem'}}>Accessible to staff</label>
                       <input className="w3-check" type="checkbox" disabled />
                  </div>   
                   </form>
                  </div>
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
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                  </div>
                  <div className="employer">
                    <h4>Signed by employee</h4>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                  </div>
                  <div className="employer">
                    <h4>signed by employer</h4>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                    <input className="w4-check" type="checkbox"/>
                  </div>
                  </div>
                  <div className="btn">
                     <Link to="/info"><input type="submit" value="Back" style={{backgroundColor:'#A47AB3'}} /></Link>
                     <Link to="/leadership"><input type="submit" value="Send" style={{marginLeft:'20px',backgroundColor:'seagreen'}} /></Link>
                  </div>
                </div>
    )
}

export default Leadership;
