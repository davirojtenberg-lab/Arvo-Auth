import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import Logo from '../components/Logo'
import AppFooter from '../components/AppFooter'

export default function Login() {
  const [accepted, setAccepted] = useState(false)
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#faf6f2',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          py: 6,
          px: { xs: 2, md: 0 },
        }}
      >
        <Logo />

        {/* Card */}
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            width: { xs: '100%', sm: 480 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Typography variant="h5">Entrar na conta</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              maxWidth: 306,
            }}
          >
            <TextField label="E-mail" fullWidth defaultValue="rafael@arvo.com.br" />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-end' }}>
              <TextField label="Senha" type="password" fullWidth defaultValue="12345678901" />
              <Link
                href="#"
                underline="none"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: 0.17,
                  color: 'primary.main',
                  lineHeight: 1.43,
                }}
              >
                Esqueci a senha
              </Link>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  size="medium"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
              }
              label={
                <Typography variant="body1" component="span">
                  Li e aceito os{' '}
                  <Link href="#" color="#004e60">
                    termos de uso
                  </Link>
                </Typography>
              }
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ maxWidth: 306, py: 1 }}
            onClick={() => navigate('/home')}
          >
            Entrar
          </Button>
        </Box>
      </Box>

      <AppFooter />
    </Box>
  )
}
