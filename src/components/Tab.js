import React, {useState} from 'react';

const Tab = (props) => {
    const[show,setShow] = useState(0);
    const onClickHandler = (e,i) => {
        setShow(i);

    }
    return (
        <>
            {props.content.map((content, i) =>
				<input type='button' value="Tab" key = {i} onClick={(e) => onClickHandler(e, i)} />
            )}
            { show===1?
            <p>{props.content[0]}</p>
            :show ===2?
            <p>{props.content[1]}</p>
            :
            <p>{props.content[2]}</p>
        }
        </>
    )
}

export default Tab;