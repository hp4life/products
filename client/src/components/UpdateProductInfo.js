import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Loader from './Loader'

class UpdateProductInfo extends Component {
  
    state = {
           name: '',
          description:'',
          price:'',
          category:'',
          image:'',
          color:'' ,
          loading: true
    };
  

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://calm-plains-43580.herokuapp.com/api/products/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
          category: res.data.category,
          image: res.data.image,
          color: res.data.color,
          loading: false
        })
      })
      .catch(err => {
        console.log("Error from UpdateProductInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          category: this.state.category,
          image: this.state.image,
          color: this.state.color  
    };

    axios
      .put('https://calm-plains-43580.herokuapp.com/api/products/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-product/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateProductInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateProductInfo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {this.state.loading? <Loader />: <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Product Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='name'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="description">description</label>
              <input
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="price"> price</label>
              <input
                type='number'
                placeholder='price'
                name='price'
                className='form-control'
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="category">category</label>
              <input
                type='text'
                placeholder='category'
                name='category'
                className='form-control'
                value={this.state.category}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="image">image</label>
              <input
                type='text'
                placeholder='image_url'
                name='image'
                className='form-control'
                value={this.state.image}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="color">color</label>
              <input
                type='text'
                placeholder='color'
                name='color'
                className='form-control'
                value={this.state.color}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Product</button>
            </form>
          </div>

        </div>}
      </div>
    );
  }
}

export default UpdateProductInfo;
