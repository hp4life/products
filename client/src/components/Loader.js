import React from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';

const Loader = (props) => {
    

    return(
<div className="sk-chase" style={{alignSelf: 'center'}}>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div>
    )
};

export default Loader;