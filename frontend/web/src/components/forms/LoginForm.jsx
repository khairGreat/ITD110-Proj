import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Box,
  Typography,
  Paper
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BannerLogo } from "../others/BannerLogo";
import { useVerify } from '../../hooks/useVerify.js'
import { authenticate } from "../../hooks/request.js";
import { useNavigate  } from "react-router-dom";


export function LoginForm () {

    const [showPassword, setShowPassword] = useState(false);
    
    const { user_name, password , setPassword, setUsername } = useVerify() ; 
    const navigate = useNavigate();
    

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
          e.preventDefault();
          
          const response = await authenticate(user_name, password);
          
          if (response.result) { 
            console.log(response.data);
            navigate("/profile");
          } else {
            console.log('wrong credentials');
          }         
    };
    

      
      return (

        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >


          <Paper elevation={3} sx={{ 
 
            padding: 4, maxWidth: 400, width: "100%" }}>

            {/* HEADER */}
            <div 
                className="flex flex-col justify-center"
            >
                <BannerLogo
                    className="h-40 "
                />
                <span
                    className="font-annie uppercase text-center"
                > Sign in to your account.</span> 
                
            </div>


            <form onSubmit={handleSubmit}>

                {/* USERNAME */}
                <TextField
                    label="Username"
                    variant="outlined"
                    type="text"
                    fullWidth
                    required
                    margin="normal" 
                    value={user_name}
                    onChange={(e) => setUsername(e.target.value)} 
                />

                {/* PASSWORD */}
                <TextField
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"} // ← this is the fix
                    fullWidth
                    required
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />


                {/* LOGIN BUTTON */}
                <Button
                    className=" text-bold "
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#FF1F06", mt: 2,  }}
                >
                    Login
                </Button>

            </form>
          </Paper>
        </Box>


      );
} 