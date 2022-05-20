const ActivityCard = ({activity}) => {
   const {name, image, address, island} = activity

    return (
        <li className="card">
            <div className="image">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{address}</p>
            <p>{island}</p>
            <button>MORE</button>
            <button>DELETE</button>
            </div>
        </li>
    )
}

export default ActivityCard