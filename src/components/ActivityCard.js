const ActivityCard = ({activity}) => {
    const {name, image, address, island} = activity
    
    return (
        <li>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{address}</p>
            <p>{island}</p>
            <button>MORE</button>
        </li>
    )
}

export default ActivityCard