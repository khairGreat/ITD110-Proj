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


export function LoginForm () {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("") ;

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
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
                    className="font-bold uppercase font-primary text-center"
                > Sign in to your account.</span> 
                
            </div>


            <form onSubmit={handleSubmit}>

                {/* USERNAME */}
                <TextField
                    label="Username"
                    variant="outlined"
                    type="email"
                    fullWidth
                    required
                    margin="normal"            
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