import React from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductAll from './components/Product/ProductAll';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Payment from './components/Payments/Payment';
import Home from './components/Home/Home';
import Orders from './components/Order/Order';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Profile from './components/User/profile/Profile'
const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/product'} component={ProductAll} />
      <Route exact path={'/product/:id'} component={Product} />
      <Route exact path={'/cart'} component={Cart} />
      <Route exact path={'/payment'} component={Payment}/>
      <Route exact path={'/order'} component={Orders} />
      <Route exact path={'/progress'} component={ProgressBar}/>
      <Route exact path={'/profile'} component={Profile}/>
    </Router>
  );
}

export default App;
