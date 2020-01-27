import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Loader from './Loader'

class ShowProductList extends Component {
  
    state = {
      product: [],
      loading: true
    };
  

  componentDidMount() {
    axios
      .get('https://calm-plains-43580.herokuapp.com/api/products')
      .then(res => {
        this.setState({
          product: res.data,
          loading: false
        
        })
        // console.log(this.state.product)
      })
      .catch(err =>{
        console.log('Error from ShowProductList');
      })
  };


  render() {
    const products = this.state.product;
    let productList;

    if(!products) {
      productList = "there is no product recored!";
    } else {
      productList = products.map((product, k) =>
        <ProductCard product={product} key={k} />
      );
    }

    return (
      <div className="ShowProductList" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        
          {this.state.loading? <Loader />: 
          <div className="container">
            <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Products List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-product" className="btn btn-outline-warning float-right">
                + Add New Product
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
         
                {productList}
           
          </div></div>}
        
      </div>
    );
  }
}

export default ShowProductList;
