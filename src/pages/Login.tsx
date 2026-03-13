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
        }}
      >
        <Logo />

        {/* Card */}
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 3,
            p: 6,
            width: 402,
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
              width: 306,
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
            sx={{ width: 306, py: 1 }}
            onClick={() => navigate('/home')}
          >
            Entrar
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 16,
          py: 1,
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 14,
          letterSpacing: 0.17,
          lineHeight: '24px',
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: 'rgba(0,0,0,0.6)', textAlign: 'right' }}
        >
          © 2026 Arvo Auth - Sistema de Autorização Médica
        </Typography>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <Link href="#" underline="none" sx={{ color: 'primary.main', fontSize: 14, letterSpacing: 0.17 }}>
            Documentação
          </Link>
          <Link href="#" underline="none" sx={{ color: 'primary.main', fontSize: 14, letterSpacing: 0.17 }}>
            Suporte
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
