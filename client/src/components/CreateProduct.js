import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateProduct extends Component {
  ID
  Name
  Description
  Price
  Category
  Image
  Color

  
    state = {
      name: '',
      description:'',
      price:'',
      category:'',
      image:'',
      color:''
    };
  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const {name, description ,price, category, image, color} = this.state

    const data = {name, description ,price, category, image, color};

    axios
      .post('https://calm-plains-43580.herokuapp.com/api/products', data)
      .then(res => {
        this.setState({
          name: '',
          description:'',
          price:'',
          category:'',
          image:'',
          color:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateProduct!");
      })
  };

  render() {
    return (
      <div className="CreateProduct">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add products</h1>
              <p className="lead text-center">
                  Create new Product
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='color'
                    name='color'
                    className='form-control'
                    value={this.state.color}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
