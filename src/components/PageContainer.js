import React, {useState, useEffect} from 'react'
//import Form from './Form'
import Search from './Search'
import ActivityList from './ActivityList'

const PageContainer = () => {
const [activities, setActivities] = useState([])
const [searchTerm, setSearchTerm] = useState("")

useEffect (() => {
        fetch('http://localhost:4000/all')
        .then(res => res.json())
        .then(data => setActivities(data))
      }, [])

const handleSearchQuery = (searchQuery) => {
    setSearchTerm(searchQuery)
}

const searchedActivities = activities.filter(activity => 
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return (
      <div>
        {/* <Form /> */}
        <Search searchTerm={searchTerm} onHandleSearch={handleSearchQuery} />
        <ActivityList activities={searchedActivities} />
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
