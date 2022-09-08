import { Button , Typography} from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';


function ButtonStock({id}) {
    const [button, setButton] = useState(true);
    const allJson = useSelector(state=>state.allJson);
    const producto = allJson.filter(i=>i.id === id);
    const cambioColor = () =>{  
        setButton(!button)}

  return (
        <Typography
                    onClick={(e) => cambioColor(e) }
                >
                {producto[0].stock > 0 ? <Button variant="contained" color='primary'> STOCK </Button> : <Button variant="contained" color="error" > STOCK </Button> }
                </Typography>
  )
}

export default ButtonStock