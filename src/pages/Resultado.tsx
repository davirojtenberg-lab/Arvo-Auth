import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import AppHeader from '../components/AppHeader'
import AppStepper from '../components/AppStepper'
import AppFooter from '../components/AppFooter'

const imgCopyIcon      = '/assets/f40bbb5dd7e5293f9af06818c3c89cbe0da463c3.svg'
const imgDownload      = '/assets/6208372c1f41606f8f8d5da080566be2ee4ec835.svg'
const imgNewPedido     = '/assets/29fc8509bbd1eb90debd483f166f2f15ad9af476.svg'

const GUIDE_CODE = 'AG-2026-00008495'

export default function Resultado() {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(GUIDE_CODE).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#faf6f2', display: 'flex', flexDirection: 'column' }}>
      <AppHeader />

      {/* Main content */}
      <Box sx={{ flex: 1, px: { xs: 2, md: 16 }, pt: 3, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <AppStepper activeStep={3} />

        {/* Result card */}
        <Box sx={{
          bgcolor: 'white',
          borderRadius: '24px',
          p: { xs: 3, md: 6 },
          width: '100%',
          maxWidth: 616,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}>
          {/* Top section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', width: '100%' }}>

            {/* Success icon */}
            <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: '#6fdaa6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 36, height: 36, fill: '#034b28' }}>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </Box>
            </Box>

            {/* Title */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 34, lineHeight: 1.235, letterSpacing: 0.25, color: '#1ea664' }}>
                Autorização aprovada
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                Data/Hora: 11/02/2026, 15:48:53
              </Typography>
            </Box>

            {/* Guide code box */}
            <Box sx={{
              bgcolor: '#deffed',
              border: '1px solid #6fdaa6',
              borderRadius: '16px',
              p: 2,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: 1,
              width: '100%',
            }}>
              <Typography sx={{ fontWeight: 700, fontSize: 16, letterSpacing: 0.15, color: '#034b28' }}>
                Código da guia
              </Typography>
              <Box sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                px: 3,
                py: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
              }}>
                <Typography sx={{ fontWeight: 700, fontSize: 20, lineHeight: 1.6, letterSpacing: 0.15, color: '#034b28' }}>
                  {GUIDE_CODE}
                </Typography>
                <Tooltip title={copied ? 'Copiado!' : 'Copiar'} placement="top">
                  <IconButton size="small" onClick={handleCopy} sx={{ p: 0 }}>
                    <img src={imgCopyIcon} alt="Copiar" style={{ width: 24, height: 26 }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            {/* Details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15 }}>
                Detalhes adicionais:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box component="li">
                  <Typography variant="body2">
                    <Box component="span" sx={{ fontWeight: 700 }}>Beneficiário: </Box>
                    <Box component="span" sx={{ color: 'rgba(0,0,0,0.6)' }}>João da Silva</Box>
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body2">
                    <Box component="span" sx={{ fontWeight: 700 }}>Carteirinha: </Box>
                    <Box component="span" sx={{ color: 'rgba(0,0,0,0.6)' }}>2344 3456 3456 7890</Box>
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    4 procedimentos autorizados
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center', width: { xs: '100%', md: 'auto' } }}>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              sx={{ whiteSpace: 'nowrap', width: { xs: '100%', md: 'auto' }, px: { md: 3 } }}
              startIcon={<img src={imgDownload} alt="" style={{ width: 16, height: 16 }} />}
            >
              Baixar guia em PDF
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{ width: { xs: '100%', md: 'auto' }, px: { md: 3 } }}
              startIcon={<img src={imgNewPedido} alt="" style={{ width: 16, height: 16 }} />}
              onClick={() => navigate('/novo-pedido')}
            >
              Novo pedido
            </Button>
          </Box>
        </Box>
      </Box>

      <AppFooter />
    </Box>
  )
}
