import React from 'react';
import { Typography } from '@mui/material';

const Title = ({ text }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {text}
    </Typography>
  );
};

export default Title;
