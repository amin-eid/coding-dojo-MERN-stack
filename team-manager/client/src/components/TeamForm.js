import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from "@reach/router";
export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/createNewTeam', {
            name,
            position,
        })
            .then(res=>console.log(res)& navigate('/'))
            .catch(err=>{
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
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
                        <p>
			                <label>Position</label><br/>
			                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>

            <input type="submit"/>
        </form>
        </div>
    )
}