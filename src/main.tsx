import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#902b29',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    h5: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.334,
    },
    body1: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.17,
    },
    button: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 0.46,
      textTransform: 'none',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          boxShadow:
            '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
