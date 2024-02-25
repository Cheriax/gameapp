import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { EventType } from '@azure/msal-browser';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lightTheme, darkTheme } from './styling/theme'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Box, Typography } from '@mui/material';


function App({msalInstance}) {
  const [theme, setTheme] = React.useState(darkTheme);
  const { instance, accounts, inProgress } = useMsal();
  const isLoggedIn = accounts && accounts.length > 0;

  const handleLogin = () => {
    console.log("Handling login");
    msalInstance.loginPopup()
      .then(response => {
        // Handle the response after successful login
        console.log("Login successful", response);
      })
      .catch(err => {
        // Handle errors
        console.error("Login failed", err);
      });
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider theme={theme}>
        <Box style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
          <Router>
            <Navbar toggleTheme={toggleTheme} isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
          </Box>
      </ThemeProvider>
    </MsalProvider>
  );
}
export default App;
