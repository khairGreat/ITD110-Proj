import { Button } from "@mui/material";
import {  } from '@mui/icons-material'

export function SignupBtn ( { className = ""}) { 

    return ( 

        <Button
        variant="contained"
        sx={{backgroundColor : "#FF1F06" , color : 'white'}}
        className= { className}>
            <span 
                className="capitalize"
            >Sign-up</span>
        </Button>

    )
    
}