import React, {useState, useEffect} from 'react'
import Form from './Form'
import Search from './Search'
import ActivityList from './ActivityList'

const PageContainer = () => {
const [activities, setActivities] = useState([])

useEffect (() => {
        fetch('http://localhost:4000/all')
        .then(res => res.json())
        .then(data => setActivities(data))
      }, [])
    
    return (
      <div>
        {/* <Form /> */}
        <Search />
        <ActivityList activities={activities} />
      </div>

    )   
}

export default PageContainer

// const PageContainer = ({activities}) => {
//     const activityList = activities.map(activity => (
//         <ActivityCard key={activity.id} activity={activity} />
//     ))
//     return (
//         <ul>
//            {activityList}            
//         </ul>

//     )   
// }
