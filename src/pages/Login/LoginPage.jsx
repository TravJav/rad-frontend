import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Container, Typography, Box, Grid, FormControlLabel, Checkbox } from '@mui/material';
import Logo from '../../components/Logo';
import HelpToolTip from '../../components/HelpToolTip';
import { emailValidator } from '../../helpers/emailValidator';
import { passwordValidator } from '../../helpers/passwordValidator';
import { getUTCTimestamp } from '../../helpers/common';

const BASE_URL = 'http://127.0.0.1:5000';

function LoginScreen({ callback }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const url = BASE_URL + '/status';
    axios.get(url)
      .then((res) => {
        if (res?.data?.success) {
          callback({ type: 'success', message: res?.data?.message });
        } else {
          callback({ type: 'error', message: 'Something went wrong, the backend is not accepting requests' });
        }
      })
      .catch(() => {
        callback({ type: 'warning', message: 'ATTENTION: There is a backend to be ran with this demo!' });
      });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (emailError || passwordError) {
      callback({ type: 'error', message: 'Please review your email and password as they do not meet the standard expected input' });
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/login`, {
          email: email,
          password: password,
          loginTime: getUTCTimestamp(),
        });
  
        if (response.data.success === true) {
          navigate('/dashboard');
        } else {
          callback({ type: 'error', message: 'Invalid credentials' });
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
  };

  const onCreateNewAccount = () => {
    callback({ type: 'success', message: 'Sign up complete' });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Please Sign in
        </Typography>
        <Logo />
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button variant="text" onClick={onCreateNewAccount}>New Members Sign up Here</Button>
            </Grid>
            <HelpToolTip />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginScreen;
