import React from 'react'
import FavoriteCard from './FavoriteCard'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const FavoritesList = ({favorites, onHandleDeleteFav}) => {
    
     const tripList = favorites.map(fav => (
    <FavoriteCard key={fav.id} fav={fav} onHandleDeleteFav={onHandleDeleteFav} />
))

    return (
        <ul>   
        <CssBaseline />  
        <Container maxWidth="xs"> 
            <h2> My Favorites: </h2>       
            {tripList}
        </Container>
        </ul>
    )
}

export default FavoritesList

