import React from 'react';
import { Link } from 'react-router-dom';
import './info.css';
import logo from '../../images/logo.png';
import map from '../../images/map.jpeg';
import 'font-awesome/css/font-awesome.min.css';

const Info=()=>{
    return (
        <div className="info">
            <div className="content">
               <div className="left-content">
                   <div className="input-Box">
                       <i className="fa fa-map-marker" style={{fontSize:'25px',margin:'4px'}}></i>
                       <input type="text" placeholder="Input field"/>
                       <i className="fa fa-search" style={{fontSize:'22px',margin:'4px',position:'absolute',background:'seagreen',color:'white',padding:'4px'}}></i>
                   </div>
                   <div className="select">
                       <select name="Please select Province" id="">
                           <option value="Please select Province">Please select Province</option>
                           <option value="Northern Province">Nothern Province</option>
                           <option value="Southern Province">Southern Province</option>
                           <option value="Eastern Province">Eastern Province</option>
                           <option value="Western Province">Western Province</option>
                           <option value="Kigali City">Kigali City</option>
                       </select>
                   </div>
                   <div className="select">
                       <select name="Please select district" id="">
                           <option value="Please select district">Please select District</option>
                           <option value="Northern Province">Rwamagana</option>
                           <option value="Southern Province">Nyabihu</option>
                           <option value="Southern Province">Rwamagana</option>
                           <option value="Southern Province">Rulindo</option>
                       </select>
                   </div>
                   <div className="select">
                       <select name="Please select Health center" id="">
                           <option value="Please select Health center">Please select Health center</option>
                           <option value="Northern Province">Rwamagana</option>
                           <option value="Southern Province">Nyabihu</option>
                           <option value="Southern Province">Rwamagana</option>
                           <option value="Southern Province">Rulindo</option>
                       </select>
                   </div>
               </div>
               <div className="right-content">
                   <img src={map} alt="" />
                   <p>Our works focuses on three districts serving more than one million people</p>
                   <Link to="./performance"><button>Send</button></Link>
               </div>
            </div>
        </div>
    )
}

export default Info;