import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Box, Button, CircularProgress, GlobalStyles, IconButton, Link, Typography } from '@mui/material'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'
import BoasPraticasModal from '../components/BoasPraticasModal'

const imgNotifications = 'http://localhost:3845/assets/f65369d372ad36a089e4bbdf47d41d66780a2aed.svg'

// Step circles
const imgStepActive = 'http://localhost:3845/assets/6e48262f31c2eaae741b2dcb1940957f9c6ec1c1.svg'
const imgStepInactive = 'http://localhost:3845/assets/84ddce9fa8d7819777bcf2297c61b2d1539e9d27.svg'

// Upload icons
const imgUploadBg = 'http://localhost:3845/assets/00835d46c9ccfbbe1ab46c06f99c8147059996ef.svg'
const imgUploadIcon = 'http://localhost:3845/assets/4281910ab54b1add261d40fb07f0b375388af6c1.svg'
const imgUploadBtnIcon = 'http://localhost:3845/assets/2a429f0021e5bd0772e82d0aa08e86870638544d.svg'

const steps = [
  { label: 'Upload do pedido', active: true },
  { label: 'Diagnóstico', active: false },
  { label: 'Revisão e Dados', active: false },
  { label: 'Resultado', active: false },
]

function Stepper() {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: '51px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        width: 1256,
        mx: 'auto',
      }}
    >
      {steps.map((step, idx) => (
        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', flex: idx < steps.length - 1 ? 'none' : 'none' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: 189 }}>
            <Box sx={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
              <img src={step.active ? imgStepActive : imgStepInactive} alt="" style={{ width: 48, height: 48 }} />
              <Typography
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: 1.334,
                  color: step.active ? 'white' : 'rgba(0,0,0,0.6)',
                }}
              >
                {idx + 1}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: step.active ? 700 : 400,
                letterSpacing: 0.16,
                lineHeight: '18px',
                color: step.active ? 'primary.main' : 'rgba(0,0,0,0.6)',
                textAlign: 'center',
              }}
            >
              {step.label}
            </Typography>
          </Box>

          {idx < steps.length - 1 && (
            <Box
              sx={{
                width: 160,
                height: 4,
                borderRadius: '22px',
                background: 'linear-gradient(to right, #faf6f2 0%, #ffb3ae 135%)',
                flexShrink: 0,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  )
}

export default function NovoPedido() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#faf6f2', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        component="header"
        sx={{
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 16,
          height: 80,
          flexShrink: 0,
        }}
      >
        <Box sx={{ width: 110, height: 27, overflow: 'hidden', flexShrink: 0 }}>
          <Box sx={{ transform: `scale(${110 / 190})`, transformOrigin: 'top left', width: 190, height: 46.547 }}>
            <Logo />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Button variant="outlined" color="primary" size="medium" onClick={() => navigate('/home')}>
            Lista de pedidos
          </Button>
          <Button variant="contained" color="primary" size="medium" onClick={() => navigate('/novo-pedido')}>
            Novo pedido
          </Button>

          <Badge badgeContent={2} color="primary">
            <IconButton size="medium" sx={{ color: 'rgba(0,0,0,0.54)' }}>
              <img src={imgNotifications} alt="Notificações" style={{ width: 24, height: 24 }} />
            </IconButton>
          </Badge>

          <UserMenu />
        </Box>
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1, px: 16, pt: 3, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <GlobalStyles styles={{
          '@keyframes spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          '@keyframes shimmer': {
            '0%': { opacity: 0.4 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.4 },
          },
        }} />

        {/* Stepper */}
        <Stepper />

        {/* Upload area */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 616 }}>
          {/* Upload card */}
          <Box
            sx={{
              bgcolor: 'white',
              border: '2px dashed #c1c1c1',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: loading ? 4 : 6,
              p: 6,
              height: loading ? 360 : 'auto',
            }}
          >
            {loading ? (
              <>
                {/* Spinner */}
                <CircularProgress size={64} color="primary" />

                {/* Loading text */}
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700 }}>
                  Lendo pedido médico...
                </Typography>

                {/* Animated bars */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {[26, 47, 72].map((w, i) => (
                    <Box key={i} sx={{ position: 'relative', width: 254, height: 12, bgcolor: '#f0f0f0', borderRadius: '6px', overflow: 'hidden' }}>
                      <Box sx={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: w,
                        height: '100%',
                        bgcolor: '#d9d9d9',
                        borderRadius: '6px',
                        animation: `shimmer ${1.2 + i * 0.3}s ease-in-out infinite`,
                      }} />
                    </Box>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ position: 'relative', width: 64, height: 64 }}>
                    <img src={imgUploadBg} alt="" style={{ width: 64, height: 64 }} />
                    <Box sx={{ position: 'absolute', top: 12, left: 14, width: 36, height: 36, overflow: 'hidden' }}>
                      <img src={imgUploadIcon} alt="" style={{ width: '100%', height: '100%' }} />
                    </Box>
                  </Box>

                  <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    Enviar pedido médico
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: 'rgba(0,0,0,0.6)' }}>
                      Arraste e solte o arquivo ou clique para selecionar
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                      PDF ou imagem (JPG, PNG) • Máximo 1 arquivo
                    </Typography>
                  </Box>
                </Box>

                <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: 'none' }} />
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  startIcon={<img src={imgUploadBtnIcon} alt="" style={{ width: 16, height: 20 }} />}
                  onClick={() => {
                setLoading(true)
                setTimeout(() => navigate('/diagnostico'), 4000)
              }}
                >
                  Selecionar arquivo
                </Button>
              </>
            )}
          </Box>

          {/* Tip */}
          <Box
            sx={{
              bgcolor: '#ffedeb',
              borderRadius: '16px',
              p: 2,
              cursor: 'pointer',
            }}
          >
            <Typography variant="body2" sx={{ color: 'primary.main' }}>
              <Box component="span" sx={{ fontWeight: 700 }}>Dica:</Box>
              {' Certifique-se de que o pedido médico está legível e contém as informações de procedimentos TUSS. '}
              <Link
                component="button"
                onClick={() => setModalOpen(true)}
                sx={{ color: 'primary.main', fontWeight: 700, verticalAlign: 'baseline', fontSize: 'inherit' }}
              >
                Clique aqui para um exemplo visual de boas práticas
              </Link>
              .
            </Typography>
          </Box>
        </Box>
      </Box>

      <BoasPraticasModal open={modalOpen} onClose={() => setModalOpen(false)} />

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
          fontSize: 14,
          letterSpacing: 0.17,
          lineHeight: '24px',
        }}
      >
        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
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
