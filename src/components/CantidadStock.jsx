import { TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';


function CantidadStock() {
    const [cantidad , setCantidad] = useState({
        cantidad : 0
    })

   const sumarCantidad = (e) =>{
    e.preventDefault()
    setCantidad(e.target.value)
   }     
   
  return (
    <TextField title='cantidad' type={"number"} value = {cantidad.cantidad} onChange={(e) => sumarCantidad(e)} InputProps={{ inputProps: { min: 0 } }} />
  )
}

export default CantidadStock