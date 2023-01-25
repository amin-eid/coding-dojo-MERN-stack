import React from 'react'
import {Link,navigate} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton.js'
const ProductList = (props) => {
    const { removeFromDom } = props;



    return (
        <div >
            <table border="1" style={{margin:"10px auto"}}>
            {props.authors.map( (person, i) =>
            <tr key={i}>
                <td ><Link to={"/api/authors/"+person._id}>{person.name} </Link>  </td><td>                 
                <DeleteButton personId={person._id} word="Edit" successCallback={()=>navigate("/edit/"+person._id)}/>
                <DeleteButton personId={person._id} word="Delete" successCallback={()=>removeFromDom(person._id)}/></td> </tr>
            )}
            </table>
        </div>
    )
}

export default ProductList
