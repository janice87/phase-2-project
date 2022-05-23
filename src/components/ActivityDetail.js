import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';

const ActivityDetail = () => {
    const [activity, setActivity] = useState({})
    const {id} = useParams(); 
    const history = useHistory();
       
    useEffect(() => {
        fetch(`http://localhost:4000/all/${id}`)
        .then(res => res.json())
        .then(activityObj => setActivity(activityObj))
    }, [id])
    
    const handleHomePage = () => {
        history.push(`/activities`)
    }

    const {name, image, address, island, description} = activity

    return (
    <div className='activity-detail'>                  
            <div className="image">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>📍{address}</p>
            <p>{island}</p>
            <p>{description}</p>   
            <Button variant="outlined" onClick={handleHomePage}>BACK</Button>         
            </div>        
    </div>
    )
}

export default ActivityDetail