import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
export default () => {
    const [authors, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllAuthors')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = authorId => {
        setAuthor(authors.filter(author => author._id != authorId));
    }

    return (
        <div>
         
           <hr/>
           {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}