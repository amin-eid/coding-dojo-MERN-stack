import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => setAuthor(res.data))
    }, [])
    return (
        <div>
            <p>Name: {author.name}</p>
            <Link to={"/authors/" + author._id + "/edit"}>
    Edit
</Link>
        </div>
    )
}