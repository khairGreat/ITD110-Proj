import React from 'react'; 
import { Button } from '@mui/material';

export const AboutBtn = ( { className = ""}) => { 


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
        className= { className}> 
            <span 
                className='capitalize'
            >
            About Us
            </span>
        </Button>
    ) 

}