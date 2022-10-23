import React from 'react';
import { customTheme } from "../Theme";
import { Box, ThemeProvider } from '@mui/material';


const Error = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{p:1, m:1}}>
      {children}
      </Box>
     </ThemeProvider>
  
  );
};

export default Error;