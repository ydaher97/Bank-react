import React from 'react'
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const CreateUserForm = () => {
    const handleCreateUser = () =>{
        
    }
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
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Cash"
          fullWidth
          type="number"
        //   value={cash}
        //   onChange={(e) => setCash(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Credit"
          fullWidth
          type="number"
        //   value={credit}
        //   onChange={(e) => setCredit(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleCreateUser}>
          Create User
        </Button>
      </Grid>
    </Grid>
  </Container>
  )
}

export default CreateUserForm