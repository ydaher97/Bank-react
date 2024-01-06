import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const UpdateCreditForm = ({ userID }) => {
  const [creditAmount, setCreditAmount] = useState('');

  const handleUpdateCredit = async () => {
    try {
      const response = await axios.put(`https://bank-backend-mongo.onrender.com/api/users/update-credit`, {userID, creditAmount });

      if (response.status === 200) {
        console.log('Credit updated successfully');
      } else {
        console.error('Credit update failed');
      }
    } catch (error) {
      console.error('Error updating credit:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Credit"
          fullWidth
          type="number"
          value={creditAmount}
          onChange={(e) => setCreditAmount(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" onClick={handleUpdateCredit}>
          Update Credit
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdateCreditForm;
