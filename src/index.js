import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
      <Paper variant='outlined' sx={{ my: { xs: 5, md: 6 }, p: { xs: 2, md: 3 } }}>
      <App />
      </Paper>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

