import { Button, Chip, Grid, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { divalo } from '../../Listas/divalo';
import {DataGrid} from '@mui/x-data-grid'
import { AA } from '../../Listas/AA';
import { indulock } from '../../Listas/indulock';
import { sg } from '../../Listas/sg';
import { fader } from '../../Listas/fader';
import Title from '../Title';
import ButtonStock from '../ButtonStock';
import CantidadStock from '../CantidadStock';
export const Home = () => {
    const [Divalo, setDivalo] = useState(divalo);

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, hide:true , identity:true },
        { field: 'name', headerName: 'Nombre ', width: 300 },
        {field: 'lista',headerName: 'Lista',width: 200,sortable: false,},
        { field: 'precio', headerName: 'Precio', width: 300 },
        {field: 'precioPublico',headerName: 'Precio Publico',width: 200,sortable: false,},
        {headerName: "Cantidad", field:"x" , renderCell: () => {
            return( <CantidadStock/> )
        }},
        {headerName: "Stock", renderCell: ()=>{
            return(
                    <ButtonStock/>            
           )
        }},
        
    ];

    const fader1 =
        fader.map(e =>{
            return{
                id:e.id,
                name: e.name,
                precio: e.precio,
                precioPublico: e.precioPublico,
                lista: e.lista
            }
       
    })
  
    const json = [...Divalo, ...AA , ...indulock,...fader1,...sg]
    

    json.forEach((i)=>{
        i.stock=0
    })

    console.log(AA)
  return (
    <div>
        <Title></Title>
                <Grid container>
                    <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                        <DataGrid
                            rows={ [...Divalo, ...AA , ...indulock,...fader1,...sg] }
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
