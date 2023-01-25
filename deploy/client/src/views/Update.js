import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton'
import {navigate}  from '@reach/router' 
const Update = (props) => {

    const [author,setAuthor]=useState({})
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true);
            })
    }, []);
    
    const updateProduct = author=> {
      
        axios.put('http://localhost:8000/api/authors/' + props.id, author)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
          {loaded && <AuthorForm onSubmitProp={updateProduct} initialName={author.name} />}
          <DeleteButton personId={author._id} word="Back" successCallback={()=>navigate("/")} />
        </div>
    )
}
    
export default Update;

