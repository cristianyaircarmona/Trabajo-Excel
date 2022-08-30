import { Chip, Grid } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { divalo } from '../../Listas/divalo';
import {DataGrid} from '@mui/x-data-grid'
import { AA } from '../../Listas/AA';

export const Home = () => {
    const [Divalo, setDivalo] = useState(divalo);
    useEffect(()=>{
        console.log(Divalo);
    },[])
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nombre ', width: 300 },
        {field: 'lista',headerName: 'Lista',width: 200,sortable: false,},
        { field: 'precio', headerName: 'Precio', width: 300 },
        {field: 'precioPublico',headerName: 'Precio Publico',width: 200,sortable: false,}

    ];
  return (
    <div>
                <Grid container>
                    <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                        <DataGrid
                            rows={ [...Divalo,...AA] }
                            columns={ columns }
                            pageSize={ 10 }
                            rowsPerPageOptions={ [10] }
                        />
                    </Grid>
                </Grid> 
                

        
    </div>
  )
}
