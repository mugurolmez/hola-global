import React from 'react';
import { Typography } from '@mui/material';

const TextError = (props) => {
 
  return (
    <Typography fontSize={'16px'} style={{ color: 'white' }}>
      {props.children}
    </Typography>
  );
};
export default TextError;
