import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import Info from "./components/Info/Info";
import Info from "./components/Overview";
import Login from "./Login/Login";
import SignUp from "./components/signUp/signUp";
import Forgot from "./components/forgot/Forgot";
import Feedback from './components/feedback/Feedback';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/info" exact component={Info} />
      <Route path="/signUp" exact component={SignUp} />
      <Route path="/forgot" exact component={Forgot} />
      <Route path="/feedback" exact component={Feedback} />
    </Router>
  );
}

export default App;
