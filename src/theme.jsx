import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App'; // Your main application component

// Define your global typography styles
const typography = {
  fontFamily: 'Roboto', // Example font family
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  // Add more typography settings as needed
};

// Create a theme with the typography settings
const theme = createTheme({
  typography: typography,
  // Add more theme settings if needed
});

// Wrap your app with the ThemeProvider and provide the theme
export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets styles to default browser styles */}
      <App />
    </ThemeProvider>
  );
}
