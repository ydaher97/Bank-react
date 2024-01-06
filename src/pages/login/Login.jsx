import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleLogin = async() => {
      try {
          const response = await axios.post('https://bank-backend-mongo.onrender.com/api/users/login', login);
        const result = response.data.user
        console.log(result)
          if (response.status === 200 || response.status === 201) {
            console.log('User created successfully');
            localStorage.setItem('user', JSON.stringify(result));
            // navigate('/home')
            window.location = "/home"
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
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              fullWidth
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleLogin}>
              login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to={'/signup'}><Button variant="contained" >
              signup
            </Button></Link>
          </Grid>
        </Grid>
      </Container>
  )
}

export default Login