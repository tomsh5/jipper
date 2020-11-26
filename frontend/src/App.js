import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss';
import {JipperApp} from './pages/JipperApp/JipperApp.jsx'
import {ProductPage} from './pages/ProductPage/ProductPage.jsx'
import {ProductEdit} from './pages/ProductEdit/ProductEdit.jsx'
import {ProductDetails} from './pages/ProductDetails/ProductDetails.jsx'
import {OurStory} from './pages/OurStory/OurStory.jsx'
import {ShopingCart} from './pages/ShopingCart/ShopingCart.jsx'
import { Navbar } from './cmps/Navbar/Navber.jsx'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route component={ ProductEdit } path="/product/edit/:id?" />
          <Route component={ ProductDetails } path="/product/:id" />
          <Route component={ OurStory } path="/about" />
          <Route component={ ShopingCart } path="/cart" />
          <Route component={ ProductPage } path="/product" />
          <Route component={ JipperApp } exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
