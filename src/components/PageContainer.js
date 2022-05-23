import React, {useState} from 'react'
import Search from './Search'
import ActivityList from './ActivityList'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const PageContainer = ({activities, setActivities, onAddToFavs}) => {
  const [searchTerm, setSearchTerm] = useState("")

const handleSearchQuery = (searchQuery) => {
    setSearchTerm(searchQuery)
}

const searchedActivities = activities.filter(activity => 
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()))

const handleDeleteCard = (id) => {
    const updatedActivities = activities.filter(act => act.id !== id)
    setActivities(updatedActivities)
}    
  
    return (
      <div>
        <CssBaseline />
          <Container maxWidth="xl">     
            <Search searchTerm={searchTerm} onHandleSearch={handleSearchQuery} />
            <ActivityList activities={searchedActivities} onHandleDeleteCard={handleDeleteCard} onAddToFavs={onAddToFavs} />
         </Container>
      </div>
    )   
}

export default PageContainer
