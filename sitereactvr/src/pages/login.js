import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion'; 
import { useNavigate, Link } from 'react-router-dom';
import useLogin from '../services/DB/users/LoginService';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { handleSubmit, loading, error, success } = useLogin();

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      handleSubmit(e);
      console.log({ email});
      if (!error) {
        navigate('/');
      }
    }
  };

  return (
    <Box className="login-page" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor: 'rgba(244,247,260,262)' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#14183e', mb: 2 }}>Log In</Typography>

          <form method="POST" action="#" onSubmit = {(e) => handleFormSubmit(e)}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(passwordError)}
              helperText={passwordError}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
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

            <Button
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontWeight: 'bold', fontSize: '1rem' }}
            >
              Log In
            </Button>
          </form>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Box sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <MuiLink
                component={Link}
                to="/ForgetPassword"
                sx={{fontSize:'h6', mt:2, color: '#007BFF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Forgot Password?
              </MuiLink>
            </Box>
            <Typography variant="h6" sx={{ align: 'center', mt: 2 }}>
              Don't have an account?{' '}
              <Link to="/signup" style={{ textDecoration: 'none', color: '#007BFF' }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Login;
