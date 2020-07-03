import React from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Payment from './components/Payments/Payment';
import Home from './components/Home/Home';
import AdminHome from './components/Admin/HomePage/AdminHome'
import AdminLogin from './components/Admin/Login/Login'
import AdminRegister from './components/Admin/Register/Register'
import Profile from './components/Profile/profile'
const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/product'} component={Product} />
      <Route exact path={'/cart'} component={Cart} />
      <Route exact path={'/payment'} component={Payment}/>
      <Route exact path={'/admin/home'}  component={AdminHome}/>
      <Route exact path={'/admin/register'}  component={AdminRegister}/>
      <Route exact path={'/admin/login'}  component={AdminLogin}/>
      <Route exact path={'/user/profile'}  component={Profile}/>
    </Router>
  );
}

export default App;
