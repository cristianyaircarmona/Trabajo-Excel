import { TextField } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inStock } from '../redux/actions/actions';


function CantidadStock({id}) {
    const dispatch = useDispatch();
    const allJson = useSelector(state=>state.allJson);
    const Cantidad = allJson.filter(i=>i.id === id)
   const sumarCantidad = (e) =>{
    dispatch(inStock({id,value : parseInt(e.target.value)}))
   }     
   console.log(Cantidad);
  return (
    <TextField title='cantidad' type={"number"} value = {Cantidad[0].stock} onChange={(e) => sumarCantidad(e)} InputProps={{ inputProps: { min: 0 } }} />
  )
}

export default CantidadStock