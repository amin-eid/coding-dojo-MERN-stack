import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { id } = props;
    const [name, setName] = useState('');
     const [position, setPosition] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/teams/' + id)
            .then(res => {
                setName(res.data.name);
                 setPosition(res.data.position);
            })
    }, [])
    const updateTeam = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/teams/' + id, {
            name,
            position,

        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update an Team</h1>
            <form onSubmit={updateTeam}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                                <p>
				                    <label>Position</label><br />
				                    <input type="text"
				                    name="position"
				                    value={position}
				                    onChange={(e) => { setPosition(e.target.value) }} />
                </p>


                <input type="submit" />
            </form>
        </div>
    )
}