import { Button } from "@mui/material";
import {  } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
export function SignupBtn ( { className = ""}) { 

    const navigate = useNavigate() ;
    return ( 
        
        <Button
        onClick={
            () => navigate("/signup")
        }
        variant="contained"
        sx={{backgroundColor : "#FF1F06" , color : 'white'}}
        className= { className}>
            <span 
                className="capitalize"
            >Sign-up</span>
        </Button>

    )
    
}