import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Info from './components/Info/Info';
import signUp from './components/signUp/signUp';
import forgot from './components/forgot/Forgot';
import feedback from './components/feedback/Feedback';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/info" component={Info}/>
        <Route path="/signUp" component={signUp}/>
        <Route path="/forgot" component={forgot}/>
        <Route path="/feedback" component={feedback}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
