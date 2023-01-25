import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { word,personId, successCallback } = props;
    
    const deleteProduct = e => {
        word=="Delete"?
        axios.delete('http://localhost:8000/api/authors/' + personId)
            .then(res=>{
                successCallback();
            })
    
    :

                successCallback();

        }
    
    return (
        <button onClick={deleteProduct}>
            {word}
        </button>
    )
}
