import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Form from './Form'
import ActivityDetail from './ActivityDetail'
import PageContainer from './PageContainer';
import MyTrip from './MyTrip'
import Home from './Home'

const App = () => {
        
  return (
    <div>     
      <NavBar />      
      <Switch>
        <Route path="/activities/new"><Form /></Route>    
        <Route path="/activities/:id"><ActivityDetail /></Route>
        <Route path="/activities"><PageContainer /></Route>   
        <Route path="/mytrip"><MyTrip /></Route>    
        <Route exact path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
