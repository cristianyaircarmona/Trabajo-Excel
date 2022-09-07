import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import data from '../Listas/allData.js';
import { FormControl,InputLabel, MenuItem, Select } from '@mui/material';
import { useFiltros } from '../hooks/useFiltros.jsx';




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
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    const { filtrar } = useFiltros();
    const [restablecer,setRestablecer] = useState('');
    const listas = data
    const [lista , setLista] = useState("")

    const buscar = (e) =>{
        e.preventDefault()
        setLista(e.target.value)
    }
     
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CERRAJERIA LA CUSPIDE
          </Typography>
          <FormControl sx={{ m: .3, minWidth: 95}} size="small">
          <InputLabel sx={{color:'inherit'}} id="ordenamiento-small">Marcas</InputLabel>
            <Select
              sx={{color:'inherit'}}
              labelId="ordenamiento-small"
              id="ordenamiento-small"
              label="Marcas"
              onChange={e=>{
                filtrar(e.target.value)
                setRestablecer("")
              }}
            >
              <MenuItem value=''>
                <em>Restablecer</em>
              </MenuItem>
              <MenuItem value='AA'>AA</MenuItem>
              <MenuItem value="divalo">Divalo</MenuItem>
              <MenuItem value="fader">Fader</MenuItem>
              <MenuItem value="indulock">Indulock</MenuItem>
              <MenuItem value="sg">Sg</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: .3, minWidth: 132}} size="small">
          <InputLabel sx={{color:'inherit'}} id="ordenamiento">Ordenar por:</InputLabel>
            <Select
              sx={{color:'inherit'}}
              labelId="ordenamiento"
              value={restablecer}
              id="ordenamiento"
              label="Ordenar por:"
              onChange={e=>{
                filtrar(e.target.value)
                setRestablecer(e.target.value)
              }}
            >
              <MenuItem value="">
                <em>Restablecer</em>
              </MenuItem>
              <MenuItem value="az">orden alfabetico(a-z)</MenuItem>
              <MenuItem value="za">orden alfabetico(z-a)</MenuItem>
              <MenuItem value="min">Precio de menor a mayor</MenuItem>
              <MenuItem value="max">Precio de mayor a menor</MenuItem>
            </Select>
          </FormControl>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => buscar(e)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
