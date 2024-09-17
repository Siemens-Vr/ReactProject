import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion'; // For smooth form slide-in animation
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState(''); // Use setPassword for password input
  const [confirmPassword, setConfirmPassword] = useState(''); // Typo: confirmPassword instead of ConfirmPassword
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const navigate = useNavigate();

  // Email validation (checks for a valid email format)
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Password validation (8 characters, uppercase, lowercase, number, and special character)
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, and include an uppercase letter, lowercase letter, number, and special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setErrorMessage('');
    // Proceed with form submission logic (e.g., sending data to the server)
    alert('Signup successful!');
    navigate('/login'); // Redirect after signup
  };

  return (
    <Box className="signup-page" sx={{ minHeight: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Smooth Slide-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor: 'rgba(244,247,260,262)' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#14183e' }}>Sign Up</Typography>

          {/* First Name */}
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
            // onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
            // onChange={(e) => setLastName(e.target.value)}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Gender */}
          <TextField select label="Gender" fullWidth variant="outlined" required sx={{ mb: 2, backgroundColor: '#ffffff' }}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>

          {/* Age */}
          <TextField label="Age" variant="outlined" fullWidth required type="number" sx={{ mb: 2, backgroundColor: '#ffffff' }} />

          {/* Company */}
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
            value={password} // Use password state
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'rotate(180deg)' },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
            value={confirmPassword} // Use confirmPassword state
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'rotate(180deg)' },
                  }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          {/* Error Message */}
          {errorMessage && (
            <Typography color="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Typography>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleSignup}
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 1.5,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': { transform: 'scale(1.05)', boxShadow: '0 5px 15px rgba(0, 123, 255, 0.4)' },
            }}
          >
            Sign Up
          </Button>

          {/* Already Have an Account? */}
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
            Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: '#007BFF' }}>Log In</Link>
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Signup;
