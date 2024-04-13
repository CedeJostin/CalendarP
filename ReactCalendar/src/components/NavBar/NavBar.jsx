import React, { useState, useEffecT } from 'react';
import { mockData } from '../../../../Mock/Mock';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignitems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function SearchAppBar({ onSearchIdChange }) {
  const [searchId, setSearchId] = useState('');

  const handleSearchChange = (event) => {
    console.log("Search Input Changed: ", event.target.value); // Debugging input changes
    setSearchId(event.target.value);
    onSearchIdChange(event.target.value);
  };

  // const [usuario, setUsuario] = useState([]);
  // const [tablaUsuario, setTablaUsuario] = useState([]);
  // const [search , setSearch] = useState('');
  

  // const peticionGet = async () => {
  //   await axios.get('https://tu-api.com/usuarios')
  //   .then(response => {
  //     setUsuario(response.data);
  //     setTablaUsuario(response.data);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
 
 

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" alignitems={'center'}>
        <Toolbar >
        
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
               value={searchId}
               onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar;


