import Button from '@mui/material/Button';

const FavoriteCard = ({fav, onHandleDeleteFav}) => {
const {name, image, address, id} = fav

    const handleRemoveFav = () => {
        fetch(`http://localhost:4000/favorites/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => onHandleDeleteFav(id))
    }

    return (                      
        <div className="fav-card">
            <h3>{name}</h3>
            <div className="image">          
            <img src={image} alt={name}/>
            </div>
            <p>📍{address}</p>
            <Button variant="outlined" onClick={handleRemoveFav}>REMOVE</Button>            
        </div>
      
    )
}

export default FavoriteCard
