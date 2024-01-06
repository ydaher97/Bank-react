import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import DepositForm from './components/Deposit';
import { useParams } from 'react-router-dom';
import UpdateCreditForm from './components/UpdateCredit';
import WithdrawalForm from './components/Withdrawal';
import axios from 'axios';

const UserDetails = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${id}`);

        if (response.status === 200) {
          setUserData(response.data.user);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id,userData]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3}  style={{ padding: '20px' }}>
          {userData && (
            <>
              <Typography variant="h5" gutterBottom>
                User Details
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Cash: {userData.cash}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Credit: {userData.credit}
              </Typography>
            </>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <DepositForm userID={id} />
      </Grid>
      <Grid item xs={12}>
        <UpdateCreditForm userID={id} />
      </Grid>
      <Grid item xs={12}>
        <WithdrawalForm userID={id} />
      </Grid>
    </Grid>
  );
};

export default UserDetails;
