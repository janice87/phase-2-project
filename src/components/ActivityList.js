import React from 'react'
import ActivityCard from "./ActivityCard"

const ActivityList = ({activities, onHandleDeleteCard, onAddToTrip }) => {
  
    const activityArray = activities.map(activity => (  
        <ActivityCard key={activity.id} activity={activity} onHandleDeleteCard={onHandleDeleteCard} onAddToTrip={onAddToTrip}/>
     ))

    return (
        <ul id="cards">
        {activityArray}
        </ul>
    )
}

export default ActivityList