import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'

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
        <CssBaseline />
          <Box m="auto">   
            <h3>{name}</h3>
            <div className="image">
            <img src={image} alt={name} />
            <p>📍{address}</p>
            <p>{island}</p>
            <p>{description}</p>   
            <Button variant="outlined" onClick={handleHomePage}>BACK</Button>         
            </div>
         </Box>        
    </div>
    )
}

export default ActivityDetail