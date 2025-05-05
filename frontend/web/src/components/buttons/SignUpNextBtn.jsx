import { 
    Button 
} from "@mui/material"


export function SignUpNextBtn ( {handleNext} ) { 

    return (
         <Button
                    sx = {{backgroundColor : "#FF1F06"}}
                    variant="contained" onClick={handleNext}>
                      Next
        </Button>
    ) ; 
}