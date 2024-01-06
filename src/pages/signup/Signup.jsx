import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Signup = () => {

    const navigate = useNavigate()
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateUser = async() => {
    try {
        const response = await axios.post('http://localhost:8080/api/users', signup);
  
        if (response.status === 200 || response.status === 201) {
          console.log('User created successfully');
          navigate('/login')
        } else {
          console.error('Failed to create user');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Create New User
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            fullWidth
            name="name"
            value={signup.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            fullWidth
            type="email"
            name="email"
            value={signup.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Password"
            fullWidth
            type="password"
            name="password"
            value={signup.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleCreateUser}>
            Signup
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
