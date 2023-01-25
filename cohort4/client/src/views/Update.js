import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { id } = props;
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);

            })
    }, [])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name,

        })
            .then(res => console.log(res))
            .catch(err=>{
                console.log(err.response)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })   
    }
    return (
        <div>
            <h1>Update an Author</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={updateAuthor}>
                <p>

                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>

                <input type="submit" />
            </form>
        </div>
    )
}