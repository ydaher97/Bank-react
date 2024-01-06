import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, TextField, Button } from '@mui/material';
import axios from 'axios';

const UserTable = ({ users }) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const currUser = JSON.parse(localStorage.getItem('user'));

  if (!Array.isArray(users.users)) {
    return <div>No user data available</div>;
  }

  const handleTransfer = async (fromID, toID) => {
    console.log(fromID,toID,transferAmount)
    try {
      const response = await axios.put('http://localhost:8080/api/users/transfer', {
        fromID,
        toID,
        amount: transferAmount,
      });

      if (response.status === 200) {
        console.log('Transfer successful');
        setTransferAmount(0); 
        setSelectedUserId(null); 
      } else {
        console.error('Transfer failed');
      }
    } catch (error) {
      console.error('Error during transfer:', error);
    }
  };

  const handleInputChange = (event) => {
    setTransferAmount(event.target.value);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {currUser._id !== user._id && (
                    <>
                      {selectedUserId === user._id ? (
                        <>
                          <TextField
                            type="number"
                            label="Enter amount"
                            value={transferAmount}
                            onChange={handleInputChange}
                          />
                          <Button onClick={() => handleTransfer(currUser._id,user._id)}>Confirm</Button>
                        </>
                      ) : (
                        <Button onClick={() => setSelectedUserId(user._id)}>Transfer</Button>
                      )}
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserTable;
