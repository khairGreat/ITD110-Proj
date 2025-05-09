
import { ProfileNavbar } from "../../components/others/ProfileNavbar";
import { Outlet } from "react-router-dom";

export function UserRootPage () { 

    return (
        <div>
            <ProfileNavbar />
            <Outlet/>
        </div>
    );
    
}