import { Button } from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from "react-router-dom";

export function RecipeBtn() {
    const navigate = useNavigate();

    // Navigate to the Recipe Menu page
    const handleClick = () => {
        navigate('/user/recipe');  // Full path
    };

    return (
        <Button
            onClick={handleClick}
            className="h-10"
            sx={{
                mt: '50px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '0px',
                ":hover": {
                    borderBottom: '2px solid'
                }
            }}
            startIcon={<RestaurantMenuIcon />}
        >
            <span className="text-black">RECIPE</span>
        </Button>
    );
}
