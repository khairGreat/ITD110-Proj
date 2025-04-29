import React from 'react'; 
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
export const AboutBtn = ( { className = ""}) => { 
     const navigate = useNavigate() ;

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
        onClick={
            () => navigate("/about")
        }
        className= { className}> 
            <span 
                className='capitalize'
            >
            About Us
            </span>
        </Button>
    ) 

}