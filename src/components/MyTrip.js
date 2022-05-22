import React from 'react'
import TripCard from './TripCard'

const MyTrip = ({trips}) => {
    //   const {name, address} = trips
     const tripList = trips.map(trip => (
    <TripCard key={trip.id} trip={trip} />
))

    return (
        <ul>
           {/* <li>{name}</li>
           <li>{address}</li> */}
           {tripList}
        </ul>
    )
}

export default MyTrip