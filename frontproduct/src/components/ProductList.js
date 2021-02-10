import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    return (
        <div>
            <center>All Products</center><center>
            {props.products.map((product, idx)=>{
                // return <p key={idx}>{product.title}, {product.price}, {product.description}</p>
                return <p key={idx}><Link to ={product._id}>{product.title}</Link></p>
            })}
            </center>
        </div>
    )
}