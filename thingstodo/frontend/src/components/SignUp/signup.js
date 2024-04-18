
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 2;
  }
  to {
    opacity: 5;
  }
`;

const rotateIn = keyframes`
  from {
    transform: flip;
  }
  to {
    transform: flip;
  }
`;


function SignUp() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const navigate = useNavigate(); // Hook for programmatic navigation
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        // Assuming the API endpoint for signup is correctly set to accept these parameters
        const response = await axios.post('https://thingstodo-zdio.onrender.com/signup', {
          username: formData.username,
          email: formData.email,
          address: formData.address,
          password: formData.password,
          type: 'user'  // Assuming 'type' needs to be sent, and all new signups are 'user' by default
        });
        alert('Signup Successful!');
        navigate('/login'); // Redirect user to login page upon successful signup
      } catch (error) {
        console.error('Signup Failed:', error.response?.data || error.message);
        alert('Signup Failed: ' + (error.response?.data.message || error.message));
      }
    };
    
  return (
    <Box sx={{
      background: 'linear-gradient(to right, #fee66f, #fde400)',
      height: '100vh',
      display: 'grid',
      placeContent: 'center',
      animation: `${fadeIn} 1s ease-out`
    }}>
      <Paper sx={{
        position: 'relative',
        width: { xs: '90%', sm: '35rem' },
        height: '40rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
        padding: '2rem',
        animation: `${rotateIn} 0.7s ease-in`
      }}>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>


          
        <Typography variant="h3" color="#ffc107" textAlign="center" fontWeight='bold' gutterBottom>THINGS<span style={{ color: 'black' }}>TODO</span></Typography>
          <Typography variant="h5" color="textPrimary" textAlign="center" gutterBottom>Create Account</Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            name="username"
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            name="email"
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          {/* <TextField
            label="Address"
            variant="outlined"
            fullWidth
            required
            name="address"
            onChange={handleChange}
            sx={{ mb: 3 }}
          /> */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            name="password"
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            name="confirmPassword"
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <Button type="submit" variant="contained" sx={{
            width: '100%',
            background: 'linear-gradient(to right, #f3ca46, #fde400)',
            ':hover': {
              background: 'linear-gradient(to right, #e0b042, #dbcc50)',
            },
          }}>
            Sign Up
          </Button>
          <Typography sx={{ textAlign: 'center', mt: 2.5 }}>
          You already have an account? <RouterLink to="/login" style={{ textDecoration: 'underlined', color: 'orange' }}>Login</RouterLink>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
}

export default SignUp;
