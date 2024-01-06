import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'))


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`https://bank-backend-mongo.onrender.com/api/transaction/${user._id}`);
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>From User ID</TableCell>
              <TableCell>To User ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Transaction Type</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell>{transaction._id}</TableCell>
                <TableCell>{transaction.fromUserId}</TableCell>
                <TableCell>{transaction.toUserId}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.transactionType}</TableCell>
                <TableCell>{new Date(transaction.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TransactionTable;
