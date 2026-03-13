import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'

const imgNotifications = 'http://localhost:3845/assets/f65369d372ad36a089e4bbdf47d41d66780a2aed.svg'

// Step circles
const imgStepDone     = 'http://localhost:3845/assets/23dd6772b22addfad05cd7a77b34a9df7df2e957.svg'
const imgStepDoneIcon = 'http://localhost:3845/assets/363fb76ef112bf1341d9e1f682692bde8a605291.svg'
const imgStepActive   = 'http://localhost:3845/assets/6e48262f31c2eaae741b2dcb1940957f9c6ec1c1.svg'
const imgStepInactive = 'http://localhost:3845/assets/84ddce9fa8d7819777bcf2297c61b2d1539e9d27.svg'

// Card icons
const imgDocScanner    = 'http://localhost:3845/assets/d428539db2aa9657be184aacba58eb28f00b350a.svg'
const imgCheckCircle   = 'http://localhost:3845/assets/ec30237e378e434f34be96ed08a17de22c4d8bfc.svg'
const imgMedicalSvcs   = 'http://localhost:3845/assets/4593b0472eab8bb61f22597146f78547c0d6f4bf.svg'

const steps = [
  { label: 'Upload do pedido', state: 'done' },
  { label: 'Diagnóstico',      state: 'active' },
  { label: 'Revisão e Dados',  state: 'inactive' },
  { label: 'Resultado',        state: 'inactive' },
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
                  <img src={step.state === 'active' ? imgStepActive : imgStepInactive} alt="" style={{ width: 48, height: 48 }} />
                  <Typography sx={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    fontWeight: 700, fontSize: 24, lineHeight: 1.334,
                    color: step.state === 'active' ? 'white' : 'rgba(0,0,0,0.6)',
                  }}>
                    {idx + 1}
                  </Typography>
                </>
              )}
            </Box>
            <Typography sx={{
              fontSize: 13, fontWeight: step.state === 'active' ? 700 : 400,
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

type Procedure = {
  code: string
  description: string
}

const initialProcedures: Procedure[] = [
  { code: '344567834', description: 'Consulta médica em consultório' },
  { code: '345645645', description: 'Hemograma completo' },
  { code: '1212345456', description: 'Glicose sérica' },
  { code: '401356434', description: 'TSH ultrassensível' },
]

const codeOptions = ['344567834', '345645645', '1212345456', '401356434']
const descriptionOptions = [
  'Consulta médica em consultório',
  'Hemograma completo',
  'Glicose sérica',
  'TSH ultrassensível',
]

function DeleteIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 24, height: 24, fill: '#902b29' }}>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </Box>
  )
}

export default function Diagnostico() {
  const navigate = useNavigate()
  const [procedures, setProcedures] = useState<Procedure[]>(initialProcedures)

  const handleDelete = (idx: number) => {
    setProcedures(prev => prev.filter((_, i) => i !== idx))
  }

  const handleAdd = () => {
    setProcedures(prev => [...prev, { code: '', description: '' }])
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: 616 }}>
          {/* Title */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h5">Diagnóstico do documento</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: 'rgba(0,0,0,0.6)' }}>
              {procedures.length} procedimentos detectados
            </Typography>
          </Box>

          {/* Card 1: Avaliação geral */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src={imgDocScanner} alt="" style={{ width: 24, height: 26 }} />
              <Typography variant="h6" color="primary">Avaliação geral do pedido</Typography>
            </Box>
            <Box sx={{
              bgcolor: '#deffed',
              border: '1px solid #6fdaa6',
              borderRadius: '6px',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}>
              <img src={imgCheckCircle} alt="" style={{ width: 34, height: 36, flexShrink: 0 }} />
              <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: '#034b28' }}>
                O documento inserido está em conformidade com todas as normas e com o preenchimento adequado.
              </Typography>
            </Box>
          </Box>

          {/* Card 2: Procedimentos identificados */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src={imgMedicalSvcs} alt="" style={{ width: 24, height: 26 }} />
              <Typography variant="h6" color="primary">Procedimentos identificados</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {procedures.map((proc, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 1.75, alignItems: 'center' }}>
                  <TextField
                    select
                    label="Cod. TUSS"
                    value={proc.code}
                    onChange={(e) => setProcedures(prev => prev.map((p, i) => i === idx ? { ...p, code: e.target.value } : p))}
                    size="medium"
                    sx={{ width: 145, flexShrink: 0 }}
                  >
                    {codeOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                  </TextField>

                  <TextField
                    select
                    label="Descrição do Procedimento"
                    value={proc.description}
                    onChange={(e) => setProcedures(prev => prev.map((p, i) => i === idx ? { ...p, description: e.target.value } : p))}
                    size="medium"
                    fullWidth
                  >
                    {descriptionOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                  </TextField>

                  <IconButton onClick={() => handleDelete(idx)} size="small">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}

              <Box>
                <Link
                  component="button"
                  onClick={handleAdd}
                  sx={{ color: 'primary.main', fontWeight: 700, fontSize: 14, letterSpacing: 0.4, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  + Adicionar procedimento
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Bottom navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2 }}>
            <Button
              variant="text"
              color="primary"
              size="medium"
              startIcon={
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, fill: 'currentColor' }}>
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
                </Box>
              }
              onClick={() => navigate('/novo-pedido')}
            >
              Voltar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              endIcon={
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, fill: 'currentColor' }}>
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </Box>
              }
              onClick={() => navigate('/revisao')}
            >
              Continuar
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 16, py: 1, fontSize: 14, letterSpacing: 0.17, lineHeight: '24px' }}>
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
