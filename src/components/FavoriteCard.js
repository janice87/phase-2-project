const FavoriteCard = ({trip}) => {
const {name, address} = trip
    return (
        <div>
            <h1>hello from card</h1>
            <h1>{name}</h1>
            <h1>{address}</h1>
        </div>
    )
}

export default FavoriteCard