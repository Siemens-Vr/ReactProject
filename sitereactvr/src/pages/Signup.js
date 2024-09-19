import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion'; 
import { useNavigate, Link } from 'react-router-dom';
import SendLoginForm from '../components/sendForm/sendFormLogin';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [company, setCompany] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const { submitForm, loading, error, success } = SendLoginForm('http://localhost:5002/users');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Password validation
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Validate each field and set corresponding error messages
  const validateFields = () => {
    let isValid = true;

    if (!name) {
      setNameError('First name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!lastName) {
      setLastNameError('Last name is required.');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }
     
    if (!gender) {
      setGenderError('Gender is required.');
      isValid = false;
    } else {
      setGenderError('');
    }

    if (!age) {
      setAgeError('Age is required.');
      isValid = false;
    } else {
      setAgeError('');
    }

    if (!company) {
      setCompanyError('Company is required.');
      isValid = false;
    } else {
      setCompanyError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm password is required.');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields and submit form if all are valid
    if (validateFields()) {
      submitForm({ name, lastName, email, gender, age, company, password });
      console.log({ name, lastName, email, gender, age, company, password });

      alert('Signup successful!');
      navigate('/login'); // Redirect after signup
    } else {
      setErrorMessage('Please fix the errors above.');
    }
  };

  return (
    <Box className="signup-page" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor: 'rgba(244,247,260,262)' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#14183e' }}>Sign Up</Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={Boolean(nameError)}
              helperText={nameError}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
            />

            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={Boolean(lastNameError)}
              helperText={lastNameError}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email) ? setEmailError('') : setEmailError('Please enter a valid email address.')}
              error={Boolean(emailError)}
              helperText={emailError}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
            />

            <TextField 
              select 
              label="Gender" 
              fullWidth 
              variant="outlined" 
              required
              sx={{ mb: 2, backgroundColor: '#ffffff' }} 
              name="gender" 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              error={Boolean(genderError)}
              helperText={genderError}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>

            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              required
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              error={Boolean(ageError)}
              helperText={ageError}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
            />

            <TextField
              fullWidth
              label="Company"
              variant="outlined"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              error={Boolean(companyError)}
              helperText={companyError}
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
              onBlur={() => validatePassword(password) ? setPasswordError('') : setPasswordError('Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.')}
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

            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              variant="outlined"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={Boolean(confirmPasswordError)}
              helperText={confirmPasswordError}
              onBlur={() => password !== confirmPassword ? setConfirmPasswordError('Passwords do not match.') : setConfirmPasswordError('')}
              sx={{ mb: 2, backgroundColor: '#ffffff' }}
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

            <Button
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontWeight: 'bold', fontSize: '1rem' }}
            >
              Sign Up
            </Button>

            {errorMessage && (
              <Typography color="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            )}
          </form>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ align: 'center', mt: 2 }}>
              Already have an account?{' '}
              <Link to="/login" style={{ textDecoration: 'none', color: '#007BFF' }}>
                Log in
              </Link>
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Signup;