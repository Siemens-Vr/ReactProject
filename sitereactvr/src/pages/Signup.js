import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion'; // For smooth form slide-in animation
import { useNavigate, Link } from 'react-router-dom';
import SendLoginForm from '../components/sendForm/SendFormLogin';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(''); // New state to handle email error
  const [passwordError, setPasswordError] = useState(''); // New state for password error
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); // New state for confirm password error
  const [formData, setFormData] = useState({ name: '', LastName: '', gender: '', age: 0, company: '', password: ''});
  const { submitForm, loading, error, success } = SendLoginForm('http://localhost:5002/users');


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

  // Validate email when user moves to the next field
  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Validate password when user moves to confirm password field
  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.');
    } else {
      setPasswordError('');
    }
  };

  // Validate that password and confirm password match
  const handleConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, and include an uppercase letter, lowercase letter, number, and special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    setErrorMessage('');
    alert('Signup successful!');
    navigate('/login'); // Redirect after signup
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
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
          />

          {/* Last Name */}
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#ffffff' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state as user types
            onBlur={handleEmailBlur} // Validate when the user moves to the next field
            error={Boolean(emailError)} // Show error if email is invalid
            helperText={emailError} // Display error message
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur} // Validate password when moving to confirm password field
            error={Boolean(passwordError)} // Show error if password is invalid
            helperText={passwordError} // Display password error message
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleConfirmPasswordBlur} // Validate passwords match when moving away from confirm password field
            error={Boolean(confirmPasswordError)} // Show error if passwords do not match
            helperText={confirmPasswordError} // Display error message for mismatched passwords
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
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

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
