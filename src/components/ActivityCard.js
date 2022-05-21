import {useParams, useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';

const ActivityCard = ({activity, onHandleDeleteCard}) => {
   const {name, image, address, island} = activity
   const {id} = useParams() 
   const history = useHistory();

   const handleDelete = () => {
    fetch(`http://localhost:4000/all/${id}`, {
        method: 'DELETE'
    })
     .then(res => res.json())
     .then(() => onHandleDeleteCard(id))  
    //onHandleDeleteCard(id)  
    }

    const handleShowCard = () => {
        history.push(`${id}`)
    }

    return (
        <li className="card">
            <div className="image">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{address}</p>
            <p>{island}</p>
           <Button variant="outlined" onClick={handleShowCard}>MORE</Button>
           <Button variant="outlined" onClick={handleDelete}>DELETE</Button>
           </div>
        </li>
    )
}

export default ActivityCard