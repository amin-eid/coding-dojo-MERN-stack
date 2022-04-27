import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import List from '../components/List';
import axios from 'axios'

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setAuthors(authors.filter(person => person._id != personId));
    }


    return (
        <div>
           {/* <AuthorForm onSubmitProp={createAuthor} initialTitle="" initialPrice="" initialDescription=""/> */}
           {loaded && <List authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}
