import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../core/theme';

const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    fontWeight: 'bold', 
    fontSize: 15,
    lineHeight: 26,
  },
}));

export default function Button({ mode, style, ...props }) {
  const classes = useStyles();

  return (
    <MuiButton
      className={`${classes.button} ${mode === 'outlined' ? classes.outlined : ''}`}
      variant={mode === 'outlined' ? 'outlined' : 'contained'}
      style={style}
      {...props}
    />
  );
}
