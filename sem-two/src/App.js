import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


//components
import Login from './components/login/Login'
import Register from './components/register/Register'
import Nav from './components/navBar/Nav'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
        <Route path="/login" exact children={<div><Login/></div>} />
        <Route path="/register" exact render={props => <Register {...props}/>} />
        <Route path="/home" exact render={props => <Home {...props}/>} />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
