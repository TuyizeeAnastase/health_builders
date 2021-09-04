import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import logo from './images/logo.png'

import Login from './components/Login/Login';
import Info from './components/Info/Info';
import signUp from './components/signUp/signUp';
import forgot from './components/forgot/Forgot';
import feedback from './components/feedback/Feedback';
import Performance from './components/performance/Performance';
import Leadership  from './components/leadership/Leadership';
import Service from './components/service/service';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">
          <div className="logo">
                  <i className="fa fa-bars barIcon" style={{fontSize:'30px',color:'#000'}}></i>
                  <Link to="/"><img style={{marginTop:'-4px'}} src={logo} alt=""  className="logoIm" /></Link>
          </div>
          </Link>
          <Link >
          <div className="user">
                  <select id="user" name="user">
                          <option value="username">username</option>
                          <option value="logout">Logout</option>
                          <option value="account">account</option>
                   </select>
                  <i class="fa fa-user" style={{marginRight:'74rem',position:'absolute'}}></i>
              </div>
          </Link>
        </nav>
        <Route path="/" exact component={Login}/>
        <Route path="/info" component={Info}/>
        <Route path="/signUp" component={signUp}/>
        <Route path="/forgot" component={forgot}/>
        <Route path="/feedback" component={feedback}/>
        <Route path="/performance" component={Performance}/>
        <Route path="/leadership" component={Leadership}/>
        <Route path="/service/:step" component={Service}/>
      </Router>
    </div>
  );
}

export default App;
