
import { 
    Button

} from "@mui/material"


export function SignUpBackBtn ({handleBack}) { 

    return ( 

         <Button
            sx={{ borderColor: "#FF1F06", color: 'red' }}
            variant="outlined" onClick={handleBack}>
                      Back
         </Button>

    ) ;
}