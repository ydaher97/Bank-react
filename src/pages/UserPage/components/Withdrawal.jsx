import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const WithdrawalForm = ({ userID }) => {
  const [amount, setAmount] = useState(0);

  const handleWithdrawal = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/users/withdraw`, {userID, amount });

      if (response.status === 200) {
        console.log('Withdrawal successful');
      } else {
        console.error('Withdrawal failed');
      }
    } catch (error) {
      console.error('Error withdrawing:', error);
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
        <Button variant="contained" onClick={handleWithdrawal}>
          Withdraw
        </Button>
      </Grid>
    </Grid>
  );
};

export default WithdrawalForm;
