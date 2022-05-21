import {Link} from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const NavBar = () => {

  return (   
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            <Button color="inherit" to="/" component={Link}>HOME</Button>
            <Button color="inherit" to="/activities" component={Link}>ACTIVITIES</Button>
            <Button color="inherit" to="/activities/new" component={Link}>ADD ACTIVITY</Button>               
          </Box>    
       </Toolbar>
      </Container>
    </AppBar>
  );  
}

export default NavBar

