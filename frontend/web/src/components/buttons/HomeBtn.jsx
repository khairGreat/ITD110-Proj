
import { } from 'react'; 
import { Button

 } from '@mui/material';

import { Home } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

export const HomeBtn = ( { className = ""}) => {   
    const navigate = useNavigate() ;

    return  ( 

        <Button
        onClick={
            () => navigate("/home")
        } 
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