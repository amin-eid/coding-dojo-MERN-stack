import React from 'react'

const Button = (props) => {
    const {operation,onSubmitt,onSubmitt2}=props;
    const handleDoo=(e)=>{
        {operation==="cancel"?
        onSubmitt()
    :
    onSubmitt2(e)}
    }
    return (
        <div>
<button onClick={handleDoo}>{operation}</button>
        </div>
    )
}

export default Button
