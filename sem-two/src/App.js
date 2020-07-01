import React from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Register, Login } from './components/User/index';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/register'} component={Register} />
      <Route path={'/login'} component={Login}/>
    </Router>
  );
}

export default App;
