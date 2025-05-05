import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRegister } from "../../hooks/useRegister";
import { useVerify } from "../../hooks/useVerify";
import { BannerLogo  } from "../others/BannerLogo";
import { addUser } from "../../hooks/request";
import { useNavigate  } from "react-router-dom";
import { SignUpNextBtn } from "../buttons/SignUpNextBtn";
import { SignUpBackBtn } from "../buttons/SignUpBackBtn";
import { CredentialConfirmModal } from "../modals/CredentialConfirmModal";


export function SignupForm() {
  const [phase, setPhase] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate() ;
  
  // Destructure values and setters from the hooks
  const { 
    first_name, 
    last_name, 
    birthdate, 
    setFirstName, 
    setLastName, 
    setBirthdate
  } = useRegister();

  const { 
    user_name, 
    password, 
    setUsername, 
    setPassword 
  } = useVerify();

  const handleNext = () => {
    if (phase === 1) {
      // Basic validation for phase 1 fields
      if (!first_name || !last_name || !birthdate) {
        alert("Please fill in all fields.");
        return;
      }
      // Optional: Validate date is not in the future
      const today = new Date().toISOString().split("T")[0];
      if (birthdate > today) {
        alert("Birthday cannot be in the future.");
        return;
      }
    }
    setPhase((prev) => prev + 1);
  };

  const handleBack = () => {
    setPhase((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user_name || !password) {
        alert("Please fill in username and password.");
        return;
      }
      setOpenModal(true); // Show confirmation modal    
  };



  const handleConfirmSubmit = async () => {
    const user = {
      first_name,
      last_name,
      birthdate,
      user_name,
      password
    };
    const response = await addUser(user);
    setOpenModal(false);
    if (response.result) {
      console.log(response.data);
      navigate("/profile");
    } else {
      console.log("Creating an account failed");
    }
  };
  

  return (
    <div
        className="
            flex justify-center
        "
    >
        
    <Box    
      maxWidth={400}
      padding={3}
      boxShadow={3}
      borderRadius={2}
      mt={10}
        bgcolor="white"
        display="flex"
        justifyContent="center"
     flexDirection="column"
    >
    
       <BannerLogo
        className="h-40"
       />
      <span
        className="font-annie uppercase  text-center"
      >

        Sign-up form

      </span>

      {phase === 1 && (
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Birthday"
            name="birthday"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: new Date().toISOString().split("T")[0],
            }}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <SignUpNextBtn 
                handleNext={
                    handleNext 
                }
            />
          </Box>
        </Box>
      )}

      {phase === 2 && (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={user_name}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />


          <Box
          
          mt={3} display="flex" justifyContent="space-between">

            <SignUpBackBtn
                handleBack={handleBack}
            />

            <Button
              sx = {{backgroundColor : "#FF1F06"}}
            variant="contained" type="submit">
              Submit
            </Button>


          </Box>

        </Box>
      )}
    </Box>

    <CredentialConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmSubmit}
        first_name={first_name}
        last_name={last_name}
        birthdate={birthdate}
        user_name={user_name}
        password={password}
    />



    </div>
  );
}