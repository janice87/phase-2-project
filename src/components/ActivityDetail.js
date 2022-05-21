import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const ActivityDetail = () => {
    const [activity, setActivity] = useState({})
    const {id} = useParams(); 
       
    useEffect(() => {
        fetch(`http://localhost:4000/all/${id}`)
        .then(res => res.json())
        .then(activityObj => setActivity(activityObj))
    }, [id])
    
    const {name, image, type, address, island, description} = activity

    return (
        <div>
           <h1>I'm from activity detail</h1>
           <p>{name}</p>
           <p>{image}</p>
           <p>{type}</p>
           <p>{address}</p>
           <p>{island}</p>
           <p>{description}</p>
        </div>
    )
}

export default ActivityDetail