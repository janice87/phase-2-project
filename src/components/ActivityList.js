import React from 'react'
import ActivityCard from "./ActivityCard"

const ActivityList = ({activities, onHandleDeleteCard, onAddToFavs}) => {
  
    const activityArray = activities.map(activity => (  
        <ActivityCard key={activity.id} activity={activity} onHandleDeleteCard={onHandleDeleteCard} onAddToFavs={onAddToFavs} />
     ))

    return (
        <ul id="cards">
        {activityArray}
        </ul>
    )
}

export default ActivityList