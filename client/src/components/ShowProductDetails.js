import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Loader from './Loader'

class showProductDetails extends Component {
  
    state = {
      product: {},
      loading: true
    };
  

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://calm-plains-43580.herokuapp.com/api/products/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          product: res.data,
          loading: false

        })
      })
      .catch(err => {
        console.log("Error from ShowProductDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('https://calm-plains-43580.herokuapp.com/api/products/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const product = this.state.product;
      return (
      <div className="ShowProductDetails" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {this.state.loading? <Loader />:
        <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link to="/" className="btn btn-outline-warning float-left">
                Show Product List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
    <h1 className="display-4 text-center">{product.name}</h1>
            {/* <p className="lead text-center">
                View Products Info
            </p> */}
            
          </div>
        </div>
        <div>
  <div className="card-container" style={{width: "30rem"}}>
<img src={product.image} className="card-img-top" alt="..." style={{height: "40vh", objectFit: "cover"}} />
<div className="card-body">
  <h4>{product.name}</h4>
  <div>price: ₦{product.price}</div>
    <div>Description: {product.description}</div>
    <div>Category: {product.category}</div>
    <div>Color: {product.color}</div>
</div>
</div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,product._id)}>Delete Product</button><br />
          </div>

          <div className="col-md-6">
            <Link to={`/edit-product/${product._id}`} className="btn btn-outline-info btn-lg btn-block">
                  Edit Product
            </Link>
            <br />
          </div>

        </div>

      </div> }
        
      </div>
    );
  }
}

export default showProductDetails;
