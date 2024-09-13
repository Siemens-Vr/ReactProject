import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton,MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion'; // For smooth form slide-in animation

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Box className="signup-page" sx={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Smooth Slide-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start state: Hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // End state: Fully visible and in position
        transition={{ duration: 0.6 }} // Animation duration
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor:'rgba(244,247,258,260)' }}>
          
          {/* Form Heading */}
          <Button 
            variant="outlined" 
            sx={{ 
                borderColor: 'grey.400', // Set border color to grey
                borderRadius: '9999px', // Make the button fully rounded
                color: 'primary.main',
                marginTop:'0px',
                marginBottom:'20px'
            }} 
            className="mb-2"
        >
        Sign up
        </Button>

          {/* Username Input */}
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            sx={{ mb: 2, backgroundColor:'#ffffff' }}
            InputProps={{
              sx: {
                transition: 'border-color 0.3s ease', // Form Field Focus Animation
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2 ,backgroundColor:'#ffffff'}}
            InputProps={{
              sx: {
                transition: 'border-color 0.3s ease', // Form Field Focus Animation
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />
           <TextField select label="Gender" fullWidth variant="outlined" required sx={{ mb: 2,backgroundColor:'#ffffff' }}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>

              
            </TextField>


            <TextField label="Age" variant="outlined" fullWidth required type="number" sx={{ mb: 2,backgroundColor:'#ffffff' }} />

          {/* Password Input with Toggle Animation */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ mb: 2,backgroundColor:'#ffffff' }}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{
                    transition: 'transform 0.3s ease', // Password Toggle Animation (Rotation)
                    '&:hover': { transform: 'rotate(180deg)' },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
              sx: {
                transition: 'border-color 0.3s ease',
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />

          {/* Confirm Password Input with Toggle Animation */}
          <TextField
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ mb: 2,backgroundColor:'#ffffff'}}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{
                    transition: 'transform 0.3s ease', // Password Toggle Animation (Rotation)
                    '&:hover': { transform: 'rotate(180deg)' },
                  }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
              sx: {
                transition: 'border-color 0.3s ease',
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />

          {/* Submit Button with Hover Effects */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              backgraoundColor:'#1363c6',
              py: 1.5,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Button Hover Effect (Scaling and Shadow)
              '&:hover': { transform: 'scale(1.05)', boxShadow: '0 5px 15px rgba(0, 123, 255, 0.4)' },
            }}
          >
            Sign Up
          </Button>

          {/* Already Have an Account? */}
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
            Already have an account? <a href="/login" style={{ textDecoration: 'none', color: '#007BFF' }}>Log In</a>
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Signup;
