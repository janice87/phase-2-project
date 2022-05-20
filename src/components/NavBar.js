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


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// //import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Search from './Search'


// const pages = ['HOME', 'ALL', 'BEACHES', 'PARKS', 'SIGHTSEEING'];

// const SearchBar = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));

//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

// const NavBar = () => {
//    return (
  //   <AppBar position="static">
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //             <Button
  //               key={page}
  //               sx={{ my: 2, color: 'white', display: 'block' }}
  //             >
  //               {page}
  //             </Button>
  //           ))}
  //         </Box>

  //         <SearchBar>
  //           <SearchIconWrapper>
  //             <SearchIcon />
  //             <Search />
  //           </SearchIconWrapper>
  //           <StyledInputBase
  //             placeholder="Search by island…"
  //             inputProps={{ 'aria-label': 'search' }}
  //           />
  //         </SearchBar>

  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
// };

// export default NavBar

