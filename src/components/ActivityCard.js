import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';

const ActivityCard = ({activity, onHandleDeleteCard, onAddToFavs}) => {
const {name, image, address, island, id} = activity
const history = useHistory();

   const handleDelete = () => {
    fetch(`http://localhost:4000/all/${id}`, {
        method: 'DELETE'
    })
     .then(res => res.json())
     .then(() => onHandleDeleteCard(id))  
     }

    const handleShowCard = () => {
        history.push(`/activities/${id}`)
    }

    const addToFav = () => {
        fetch('http://localhost:4000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(activity)
        })
        .then(res => res.json())
        .then(activityObj => onAddToFavs(activityObj))
    }

    return (
        <li className="card">
            <div className="image">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>📍{address}</p>
            <p>{island}</p>
           <Button variant="outlined" onClick={handleShowCard}>MORE</Button>
           <Button variant="outlined" onClick={handleDelete}>DELETE</Button>
           <br />
           <Button variant="outlined" onClick={addToFav}>ADD TO FAVORITES</Button> 
           </div>
        </li>
    )
}

export default ActivityCard
