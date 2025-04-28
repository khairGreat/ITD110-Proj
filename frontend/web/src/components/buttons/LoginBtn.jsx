import { Button } from "@mui/material";


export function LoginBtn ( { className = ""}) { 

    return ( 

        <Button
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
            >Login</span>
        </Button>

    )
    
}