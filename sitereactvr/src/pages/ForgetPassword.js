import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    try {
      // Here you would typically make an API call to initiate the password reset process
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('If an account exists for this email, a password reset link has been sent.');
      
      // Optionally, redirect to login page after a delay
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor: 'rgba(244,247,260,262)' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#14183e', mb: 2 }}>Forgot Password</Typography>

          <form onSubmit={handleSubmit}>
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

            <Button
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontWeight: 'bold', fontSize: '1rem' }}
            >
              Reset Password
            </Button>
          </form>

          {message && (
            <Typography sx={{ mt: 2, textAlign: 'center', color: message.includes('error') ? 'error.main' : 'success.main' }}>
              {message}
            </Typography>
          )}
        </Box>
      </motion.div>
    </Box>
  );
};

export default ForgotPassword;