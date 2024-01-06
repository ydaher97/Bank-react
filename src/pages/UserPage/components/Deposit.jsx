import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const DepositForm = ({ userID }) => {
  const [amount, setAmount] = useState(0);

  const handleDeposit = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/users/deposit`, { userID,amount });

      if (response.status === 200) {
        console.log('Deposit successful');
      } else {
        console.error('Deposit failed');
      }
    } catch (error) {
      console.error('Error depositing:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Amount"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" onClick={handleDeposit}>
          Deposit
        </Button>
      </Grid>
    </Grid>
  );
};

export default DepositForm;
