import React from 'react';
import { Alert as MuiAlert } from '@mui/material';

export default function CustomAlert({ variant, severity, children }) {
  return (
    <MuiAlert variant={variant} severity={severity}>
      {children}
    </MuiAlert>
  );
}
