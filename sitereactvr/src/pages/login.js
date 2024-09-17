import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion'; // For smooth form slide-in animation

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className="login-page" sx={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Smooth Slide-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start state: Hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // End state: Fully visible and in position
        transition={{ duration: 2.0 }} // Animation duration
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor: 'rgba(244,247,260,262)' }}>
          
          {/* Form Heading */}
          <Typography variant='h5'sx={{fontWeight:'bold',color:'#14183e'}}>Log in</Typography>

          {/* Email/Username Input */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{
              sx: {
                backgroundColor:'#ffffff',
                transition: 'border-color 0.3s ease', // Focus animation (Form Field Focus Animation)
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />

          {/* Password Input with Toggle Animation */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ mb: 2,backgroundColor:'#ffffff', }}
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

          {/* Forgot Password Link */}
          <Typography variant="h6" sx={{ textAlign: 'right', mb: 2 }}>
            <a href="/forgot-password" style={{ textDecoration: 'none', color: '#007BFF' }}>Forgot Password?</a>
          </Typography>

          {/* Submit Button with Hover Effects */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 1.5,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Button Hover Effect (Scaling and Shadow)
              '&:hover': { transform: 'scale(1.05)', boxShadow: '0 5px 15px rgba(0, 123, 255, 0.4)' },
              backgroundcolor:'#1363c6'
            }}
          >
            Log In
          </Button>

          {/* Don't Have an Account? */}
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
            Don’t have an account? <a href="/signup" style={{ textDecoration: 'none', color: '#007BFF' }}>Sign Up</a>
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Login;
