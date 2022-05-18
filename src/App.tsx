import React from 'react';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { Switch, Route, useRouteMatch, Redirect, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product/:id' component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
