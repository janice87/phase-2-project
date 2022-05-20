const ActivityCard = ({activity, onHandleDeleteCard}) => {
   const {name, image, address, island, id} = activity

   const handleDelete = () => {
    fetch(`http://localhost:4000/all/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => onHandleDeleteCard(id))      
    }

    return (
        <li className="card">
            <div className="image">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{address}</p>
            <p>{island}</p>
            <button>MORE</button>
            <button onClick={handleDelete}>DELETE</button>
            </div>
        </li>
    )
}

export default ActivityCard