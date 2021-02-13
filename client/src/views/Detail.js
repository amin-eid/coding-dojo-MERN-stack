import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [team, setTeam] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/teams/" + props.id)
            .then(res => setTeam(res.data))
    }, [])
    return (
        <div>
            <p>Name: {team.name}</p>
            <Link to={"/teams/" + team._id + "/edit"}>
    Edit
</Link>
        </div>
    )
}