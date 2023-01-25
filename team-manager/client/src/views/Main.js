import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamForm from '../components/TeamForm';
import TeamList from '../components/TeamList';
export default () => {
    const [teams, setTeam] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllteams')
            .then(res=>{
                setTeam(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = teamId => {
        setTeam(teams.filter(team => team._id != teamId));
    }

    return (
        <div>

           <hr/>
           {loaded && <TeamList teams={teams} removeFromDom={removeFromDom}/>}
        </div>
    )
}