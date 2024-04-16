/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Import the useUser hook



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



function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { login } = useUser(); // Access the login function from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', formData);
      login(response.data); // Assuming response.data contains user data including role info
  
      if (response.data.isAdmin) {
        navigate('/adminnavbar');
      } else {
        navigate('/usernavbar');
      }
    } catch (error) {
      console.error('Login Failed:', error.response?.data.message || error.message);
      alert('Login Failed: ' + (error.response?.data.message || "An error occurred"));
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
        height: '30rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.2)',
        padding: '2rem',
        animation: `${rotateIn} 0.7s ease-in`
      }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Typography variant="h4" color="textPrimary" gutterBottom>Login</Typography>
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
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            name="password"
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
            Login
          </Button>
          <Typography sx={{ textAlign: 'center', mt: 2.5 }}>
            Don't have an account? <RouterLink to="/signup" style={{ textDecoration: 'underlined', color: 'orange' }}>SignUp</RouterLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
