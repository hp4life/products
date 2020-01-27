import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = (props) => {
    const  product  = props.product;

    return(
        <div className="card-container">
             <Link to={`/show-product/${product._id}`} style={{color: 'white', textDecoration: 'none'}}>
            <img src={product.image} alt="" className="card-img-top" style={{height: "30vh", objectFit: "cover"}} />
            <div style={{padding: '5px'}}>
                <h4>{ product.name }</h4>
                <div>price: ₦{product.price}</div>
                {/* <p>{product.description}</p> */}
               
            </div>
            </Link>
        </div>
    )
};

export default ProductCard;