import React, {useState, useEffect} from 'react'
import Search from './Search'
import ActivityList from './ActivityList'
import Form from './Form'
import FavoritesList from './FavoritesList'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const PageContainer = () => {
const [activities, setActivities] = useState([])
const [searchTerm, setSearchTerm] = useState("")
const [display, setDisplay] = useState(false)
const [trips, setTrips] = useState([])

useEffect (() => {
        fetch('http://localhost:4000/all')
        .then(res => res.json())
        .then(data => setActivities(data))
      }, [])

useEffect(() => {
        fetch('http://localhost:4000/favorites')
        .then(res => res.json())
        .then(data => setTrips(data))
    }, [])

const handleSearchQuery = (searchQuery) => {
    setSearchTerm(searchQuery)
}

const searchedActivities = activities.filter(activity => 
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()))

const handleDeleteCard = (id) => {
    const updatedActivities = activities.filter(act => act.id !== id)
    setActivities(updatedActivities)
}    

const handleAddActivity = (newActivity) => {
    const updatedActivities = [...activities, newActivity]
    setActivities(updatedActivities)
}

const AddToTrip = (activityObj) => {
  const updatedTrips = [...trips, activityObj]
  setTrips(updatedTrips)
  console.log(updatedTrips) 
}
    
    return (
      <div>
        <CssBaseline />
          <Container maxWidth="xl">        
            { display ? (<Form onHandleAddActivity={handleAddActivity} />) : null }
            { display ? (<FavoritesList trips={trips} />) : null }
            <Search searchTerm={searchTerm} onHandleSearch={handleSearchQuery} />
            <ActivityList activities={searchedActivities} onHandleDeleteCard={handleDeleteCard} onAddToTrip={AddToTrip} />
         </Container>
      </div>

    )   
}

export default PageContainer

