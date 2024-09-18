import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton,MenuItem } from '@mui/material';
import { Password, Visibility, VisibilityOff } from '@mui/icons-material';
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
   

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Gender, setGender]= useState('');
  const [Age, setAge] = useState('');
  const [Company, setCompany] = useState('');
  // const [password, setPassword] = useState('');
  const [ConfirmPassword,setConfirmPassword]= useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Simulated server response
    if (email && Password) {
      localStorage.setItem('user', JSON.stringify({ email })); // Save user data
      alert('Signup successful!');
      navigate('/'); // Redirect to home page after signup
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
        initial={{ opacity: 0, y: 20 }} // Start state: Hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // End state: Fully visible and in position
        transition={{ duration: 2.0 }} // Animation duration
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Box sx={{ p: 4, boxShadow: 20, borderRadius: 2, backgroundColor:'rgba(244,247,260,262)' }}>
          
          {/* Form Heading */}
          <Typography variant='h5'sx={{fontWeight:'bold',color:'#14183e'}}>Sign Up</Typography>

          {/* Name Input */}
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            sx={{ mb: 2, backgroundColor:'#ffffff' }}
            value={FirstName}
            onChange={(e)=> setFirstName(e.target.value)}
            InputProps={{
              sx: {
                transition: 'border-color 0.3s ease', // Form Field Focus Animation
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />
           <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value={LastName}
            onChange={(e)=> setLastName(e.target.value)}
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
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            InputProps={{
              sx: {
                transition: 'border-color 0.3s ease', // Form Field Focus Animation
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}
          />
           <TextField select label="Gender" fullWidth variant="outlined" 
           value={Gender}
           onChange={(e)=> setGender(e.target.value)}
           required sx={{ mb: 2,backgroundColor:'#ffffff' }}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>


            <TextField label="Age" variant="outlined" fullWidth required type="number" 
            value={Age}
            onChange={(e)=> setAge(e.target.value)}
            sx={{ mb: 2,backgroundColor:'#ffffff' }} />
             
             {/* company Input */}
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            sx={{ mb: 2 ,backgroundColor:'#ffffff'}}
            value={Company}
            onChange={(e)=> setCompany(e.target.value)}
            InputProps={{
              sx: {
                transition: 'border-color 0.3s ease', // Form Field Focus Animation
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)' },
              },
            }}/>

          {/* Password Input with Toggle Animation */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            sx={{ mb: 2,backgroundColor:'#ffffff' }}
            // value={Password}
            // onChange={(e)=> setPassword(e.target.value)}
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
            value={ConfirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
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
          <Button onClick={handleSignup}
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
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

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
