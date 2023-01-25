import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {

    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/people/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }


    return (
        <div>
            <center>All Products</center><center>
            {props.products.map((product, idx)=>{
                // return <p key={idx}>{product.title}, {product.price}, {product.description}</p>
                return <p key={idx}><Link to ={product._id}>{product.title}</Link>                    |
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button></p>
            })}
            </center>
        </div>
    )
}