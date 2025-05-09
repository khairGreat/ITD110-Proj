import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { useNavigate } from "react-router-dom";

export function ProfileBtn() {

    const navigate = useNavigate() ;

    const callback = () => {
        navigate("/user/profile")
    }
    return (
        <Button
            onClick={callback}
            className="h-10"
            sx={{
                mt: '50px',
                color: 'black',
                backgroundColor: "white",
                borderRadius: '0px',
                ":hover": {
                    borderBottom: '2px solid'
                }
            }}
            startIcon={<ManageAccountsIcon />}
        >
            <span className=" text-black">PROFILE</span>
        </Button>
    );
}
