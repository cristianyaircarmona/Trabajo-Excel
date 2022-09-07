import { Button , Typography} from '@mui/material';
import React from 'react'
import { useState } from 'react';

function ButtonStock() {
    const [button, setButton] = useState(true)
    const cambioColor = () =>{  
        setButton(!button)}

  return (
        <Typography
                    onClick={(e) => cambioColor(e) }
                >
                {button ? <Button variant="contained" color='primary'> STOCK </Button> : <Button variant="contained" color="secondary" > STOCK </Button> }
                </Typography>
  )
}

export default ButtonStock