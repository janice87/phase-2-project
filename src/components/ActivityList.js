import React from 'react'
import ActivityCard from "./ActivityCard"

const ActivityList = ({activities}) => {
  
    const activityArray = activities.map(activity => (  
        <ActivityCard key={activity.id} activity={activity} />
     ))

    return (
        <ul id="cards">
        {activityArray}
        </ul>
    )
}

export default ActivityList