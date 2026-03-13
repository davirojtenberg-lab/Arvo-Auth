import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, CircularProgress, GlobalStyles, Link, Typography } from '@mui/material'
import AppHeader from '../components/AppHeader'
import AppStepper from '../components/AppStepper'
import AppFooter from '../components/AppFooter'
import BoasPraticasModal from '../components/BoasPraticasModal'

// Upload icons
const imgUploadBg = '/assets/00835d46c9ccfbbe1ab46c06f99c8147059996ef.svg'
const imgUploadIcon = '/assets/4281910ab54b1add261d40fb07f0b375388af6c1.svg'
const imgUploadBtnIcon = '/assets/2a429f0021e5bd0772e82d0aa08e86870638544d.svg'

export default function NovoPedido() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#faf6f2', display: 'flex', flexDirection: 'column' }}>
      <AppHeader />

      {/* Main content */}
      <Box sx={{ flex: 1, px: { xs: 2, md: 16 }, pt: 3, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
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
        <AppStepper activeStep={0} />

        {/* Upload area */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: { xs: '100%', md: 616 } }}>
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
              p: { xs: 3, md: 6 },
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

      <AppFooter />
    </Box>
  )
}
