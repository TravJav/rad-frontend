import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import NotFound from './pages/NotFound/NotFoundPage';
import Header from './components/Header';

const typography = {
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    typography: typography,
  },
});

function App() {
  const [message, setMessage] = useState('');

  const handleCallback = (dataFromChild) => {
    setMessage(dataFromChild);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <div>
        {message && message.type && (
          <Alert severity={message.type}>{message.message}</Alert>
        )}
        <Routes>
          <Route path="/" element={<LoginPage callback={handleCallback} />} />
          <Route path="/dashboard" element={<DashboardPage callback={handleCallback} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
