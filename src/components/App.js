import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import PageContainer from './PageContainer';
import Form from './Form'
import ActivityCard from './ActivityCard'

function App() {

  return (
    <div>     
      <NavBar />      
      <Switch>
        <Route path="/activities/:id"><ActivityCard /></Route>
        <Route path="/activities/new"><Form /></Route>    
        <Route path="/activities"><PageContainer /></Route>      
        <Route exact path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
