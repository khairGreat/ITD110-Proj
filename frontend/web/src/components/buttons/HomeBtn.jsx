
import { } from 'react'; 
import { Button

 } from '@mui/material';

import { Home } from '@mui/icons-material'


export const HomeBtn = ( { className = ""}) => {   

    return  ( 

        <Button 
        sx = {{
            color : 'black', 
            backgroundColor : 'white',
            borderRadius : '0px',
            ":hover" : {
                borderBottom : '2px solid'
            }
        }}

        
        className={className}> 
            <span
                className='capitalize'
            >
                Home
            </span>
        </Button>
    ) 

 }