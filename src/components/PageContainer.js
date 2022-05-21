import React, {useState, useEffect} from 'react'
import Search from './Search'
import ActivityList from './ActivityList'
import Form from './Form'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const PageContainer = () => {
const [activities, setActivities] = useState([])
const [searchTerm, setSearchTerm] = useState("")
const [display, setDisplay] = useState(false)

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

const handleDeleteCard = (id) => {
    const updatedActivities = activities.filter(act => act.id !== id)
    setActivities(updatedActivities)
}    

const handleAddActivity = (newActivity) => {
    const updatedActivities = [...activities, newActivity]
    setActivities(updatedActivities)
}
    
    return (
      <div>
        <CssBaseline />
          <Container maxWidth="xl">
        
            { display ? (<Form onHandleAddActivity={handleAddActivity} />) : null }
            <Search searchTerm={searchTerm} onHandleSearch={handleSearchQuery} />
            <ActivityList activities={searchedActivities} onHandleDeleteCard={handleDeleteCard} />

      </Container>
      </div>

    )   
}

export default PageContainer

