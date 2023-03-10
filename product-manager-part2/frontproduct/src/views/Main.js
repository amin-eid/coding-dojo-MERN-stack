import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [products, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList products={products}/>}
        </div>
    )
}