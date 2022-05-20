import React from 'react'
import ActivityCard from "./ActivityCard"

function ActivityList ({activities}) {
  
    const activityArray = activities.map(activity => (  
        <ActivityCard key={activity.id} activity={activity} />
        //console.log(activity)
    ))

    return (
        <div>
        {activityArray}
        </div>
    )
}

export default ActivityList