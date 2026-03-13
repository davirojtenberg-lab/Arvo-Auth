import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Box, Button, IconButton, Link, Tooltip, Typography } from '@mui/material'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'

const imgNotifications = 'http://localhost:3845/assets/f65369d372ad36a089e4bbdf47d41d66780a2aed.svg'

const imgStepDone     = 'http://localhost:3845/assets/23dd6772b22addfad05cd7a77b34a9df7df2e957.svg'
const imgStepDoneIcon = 'http://localhost:3845/assets/363fb76ef112bf1341d9e1f682692bde8a605291.svg'
const imgStepActive   = 'http://localhost:3845/assets/6e48262f31c2eaae741b2dcb1940957f9c6ec1c1.svg'

const imgSuccessCircle = 'http://localhost:3845/assets/c5e09328006ecfcc3d5d7f1e665b2bbaf354c852.svg'
const imgCheckFilled   = 'http://localhost:3845/assets/fd3cc75f67655453f3dcd88a41377ed175dbfb8c.svg'
const imgCopyIcon      = 'http://localhost:3845/assets/f40bbb5dd7e5293f9af06818c3c89cbe0da463c3.svg'
const imgDownload      = 'http://localhost:3845/assets/6208372c1f41606f8f8d5da080566be2ee4ec835.svg'
const imgNewPedido     = 'http://localhost:3845/assets/29fc8509bbd1eb90debd483f166f2f15ad9af476.svg'

const GUIDE_CODE = 'AG-2026-00008495'

const steps = [
  { label: 'Upload do pedido', state: 'done' },
  { label: 'Diagnóstico',      state: 'done' },
  { label: 'Revisão e Dados',  state: 'done' },
  { label: 'Resultado',        state: 'active' },
]

function Stepper() {
  return (
    <Box sx={{ bgcolor: 'white', borderRadius: '51px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, width: 1256, mx: 'auto' }}>
      {steps.map((step, idx) => (
        <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: 189 }}>
            <Box sx={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
              {step.state === 'done' ? (
                <>
                  <img src={imgStepDone} alt="" style={{ width: 48, height: 48 }} />
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 24, height: 24 }}>
                    <img src={imgStepDoneIcon} alt="" style={{ width: '100%', height: '100%' }} />
                  </Box>
                </>
              ) : (
                <>
                  <img src={imgStepActive} alt="" style={{ width: 48, height: 48 }} />
                  <Typography sx={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    fontWeight: 700, fontSize: 24, lineHeight: 1.334, color: 'white',
                  }}>
                    {idx + 1}
                  </Typography>
                </>
              )}
            </Box>
            <Typography sx={{
              fontSize: 13,
              fontWeight: step.state === 'active' ? 700 : 400,
              letterSpacing: 0.16, lineHeight: '18px', textAlign: 'center',
              color: step.state === 'active' ? 'primary.main' : 'rgba(0,0,0,0.6)',
            }}>
              {step.label}
            </Typography>
          </Box>
          {idx < steps.length - 1 && (
            <Box sx={{ width: 160, height: 4, borderRadius: '22px', background: 'linear-gradient(to right, #faf6f2 0%, #ffb3ae 135%)', flexShrink: 0 }} />
          )}
        </Box>
      ))}
    </Box>
  )
}

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
      {/* Header */}
      <Box component="header" sx={{ bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 16, height: 80, flexShrink: 0 }}>
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
        <Stepper />

        {/* Result card */}
        <Box sx={{
          bgcolor: 'white',
          borderRadius: '24px',
          p: 6,
          width: 616,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}>
          {/* Top section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', width: '100%' }}>

            {/* Success icon */}
            <Box sx={{ position: 'relative', width: 64, height: 64 }}>
              <img src={imgSuccessCircle} alt="" style={{ width: 64, height: 64 }} />
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 40, height: 43 }}>
                <img src={imgCheckFilled} alt="" style={{ width: '100%', height: '100%' }} />
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
              alignItems: 'center',
              justifyContent: 'space-between',
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
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              startIcon={<img src={imgDownload} alt="" style={{ width: 16, height: 16 }} />}
            >
              Baixar guia em PDF
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<img src={imgNewPedido} alt="" style={{ width: 16, height: 16 }} />}
              onClick={() => navigate('/novo-pedido')}
            >
              Novo pedido
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 16, py: 1 }}>
        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
          © 2026 Arvo Auth - Sistema de Autorização Médica
        </Typography>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <Link href="#" underline="none" sx={{ color: 'primary.main', fontSize: 14, letterSpacing: 0.17 }}>Documentação</Link>
          <Link href="#" underline="none" sx={{ color: 'primary.main', fontSize: 14, letterSpacing: 0.17 }}>Suporte</Link>
        </Box>
      </Box>
    </Box>
  )
}
