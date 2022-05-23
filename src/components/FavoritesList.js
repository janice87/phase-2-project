import React from 'react'
import FavoriteCard from './FavoriteCard'

const FavoritesList = ({trips}) => {
    
     const tripList = trips.map(trip => (
    <FavoriteCard key={trip.id} trip={trip} />
))

    return (
        <ul>          
           {tripList}
        </ul>
    )
}

export default FavoritesList