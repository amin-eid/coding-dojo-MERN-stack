import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Button from './Button';
export default (props) => {
    const { initialName, onSubmitProp,errors } = props;

    const [name,setName]=useState(initialName);


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
       
    }


    return (
        <form>
            <p>
            
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <Button operation="cancel" onSubmitt={(e)=>navigate("/")} /><Button operation="submit" onSubmitt2={onSubmitHandler} />
            </p>

            
        </form>
    )
}
