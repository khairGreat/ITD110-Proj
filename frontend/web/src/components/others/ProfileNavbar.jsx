
import { ProfileBtn } from "../buttons/ProfileBtn.jsx";
import { RecipeBtn } from "../buttons/RecipeBtn.jsx";
import { BannerLogo } from "./BannerLogo.jsx" ;
import { Button } from "@mui/material";


export function ProfileNavbar() {
    return (
        <div className="w-full h-[130px] flex
             justify-center   
        ">
            <RecipeBtn/>
            <BannerLogo className="mx-20 w-35 h-35" />
            <ProfileBtn />
        </div>
    );
}
