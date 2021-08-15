import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Info from './components/Info/Info';
import signUp from './components/signUp/signUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/info" component={Info}/>
        <Route path="/signUp" component={signUp}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
