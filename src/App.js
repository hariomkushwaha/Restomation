import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import MenuPage from './pages/menu/menu.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { GlobalStyle } from './global-styles/global.styles';


function App() {
  return (

    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/menu' component={MenuPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>

    </div>
  );
}

export default App;
