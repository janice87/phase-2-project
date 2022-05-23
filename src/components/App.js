import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Form from './Form'
import ActivityDetail from './ActivityDetail'
import PageContainer from './PageContainer';
import FavoritesList from './FavoritesList'
import Home from './Home'

const App = () => {
  const [activities, setActivities] = useState([])
  //const [trips, setTrips] = useState([])
  const [favorites, setFavorites] = useState([])
  
useEffect (() => {
  fetch('http://localhost:4000/all')
  .then(res => res.json())
  .then(data => setActivities(data))

  fetch('http://localhost:4000/favorites')
  .then(res => res.json())
  .then(data => setFavorites(data))
}, [])

const handleAddActivity = (newActivity) => {
  const updatedActivities = [...activities, newActivity]
  setActivities(updatedActivities)
}

const addToFavorites = (activityObj) => {
  const updatedFavs = [...favorites, activityObj]
  setFavorites(updatedFavs)
}

const handleDeleteFav = (id) => {
  const updatedFavs = favorites.filter(fav => fav.id !== id)
    setFavorites(updatedFavs)
}
        
  return (
    <div>     
      <NavBar />      
      <Switch>
        <Route path="/activities/new"><Form onAddActivity={handleAddActivity}/></Route>    
        <Route path="/activities/:id"><ActivityDetail /></Route>
        <Route path="/activities"><PageContainer activities={activities} setActivities={setActivities} onAddToFavs={addToFavorites} /></Route>   
        <Route path="/favorites"><FavoritesList favorites={favorites} onHandleDeleteFav={handleDeleteFav} /></Route>    
        <Route exact path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
