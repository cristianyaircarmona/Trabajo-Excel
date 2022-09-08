import { Button, Chip, Grid, Typography } from '@mui/material';
import React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import ButtonStock from '../ButtonStock';
import CantidadStock from '../CantidadStock';
import SearchAppBar from '../SearchBar';
import { useFiltros } from '../../hooks/useFiltros';



export const Home = () => {
    const {allJson} = useFiltros();
    const columns = [
        { field: 'id', headerName: 'ID', width: 100, hide:true , identity:true },
        { field: 'name', headerName: 'Nombre ', width: 300 },
        {field: 'lista',headerName: 'Lista',width: 200,sortable: true,},
        { field: 'precio', headerName: 'Precio', width: 300 },
        {field: 'precioPublico',headerName: 'Precio Publico',width: 200,sortable: true,},
        {headerName: "Cantidad", field:"x" , renderCell: (rows) => {
            return( <CantidadStock id={rows.id} /> )
        }},
        {headerName: "Stock", renderCell: (rows)=>{
            return(
                    <ButtonStock  id={rows.id} />            
           )
        }},
        
    ];
    console.log(allJson);
  return (
    <div>
        <SearchAppBar></SearchAppBar>
                <Grid container>
                    <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                        <DataGrid
                            rows={ allJson}
                            columns={ columns }
                            pageSize={ 10 }
                            rowsPerPageOptions={ [10] }
                            getRowId={rows => rows.id}
                        />
                    </Grid>
                </Grid> 
    </div>
  )
}
