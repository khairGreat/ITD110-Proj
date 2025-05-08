import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LoginBtn ( { className = ""}) { 

    const navigate = useNavigate() ;


    return ( 

        <Button
        onClick={()=> navigate('/login')}
        sx = {{
            color : 'black', 
            backgroundColor : 'white',
            borderRadius : '0px',
            ":hover" : {
                borderBottom : '2px solid'
            }
        }}
            className= { className }
        >
            <span
                className="text-black capitalize"
            >LOGIN</span>
        </Button>

    )
    
}