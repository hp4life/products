import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateProduct from './components/CreateProduct';
import ShowProductList from './components/ShowProductList';
import ShowProductDetails from './components/ShowProductDetails';
import UpdateProductInfo from './components/UpdateProductInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowProductList} />
          <Route path='/create-product' component={CreateProduct} />
          <Route path='/edit-product/:id' component={UpdateProductInfo} />
          <Route path='/show-product/:id' component={ShowProductDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
