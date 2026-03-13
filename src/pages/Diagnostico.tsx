import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  IconButton,
  Link,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import AppHeader from '../components/AppHeader'
import AppStepper from '../components/AppStepper'
import AppFooter from '../components/AppFooter'

// Card icons
const imgDocScanner    = '/assets/d428539db2aa9657be184aacba58eb28f00b350a.svg'
const imgCheckCircle   = '/assets/ec30237e378e434f34be96ed08a17de22c4d8bfc.svg'
const imgMedicalSvcs   = '/assets/4593b0472eab8bb61f22597146f78547c0d6f4bf.svg'

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
      <AppHeader />

      {/* Main content */}
      <Box sx={{ flex: 1, px: { xs: 2, md: 16 }, pt: 3, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <AppStepper activeStep={1} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%', maxWidth: 616 }}>
          {/* Title */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h5">Diagnóstico do documento</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: 'rgba(0,0,0,0.6)' }}>
              {procedures.length} procedimentos detectados
            </Typography>
          </Box>

          {/* Card 1: Avaliação geral */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
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
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src={imgMedicalSvcs} alt="" style={{ width: 24, height: 26 }} />
              <Typography variant="h6" color="primary">Procedimentos identificados</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {procedures.map((proc, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 1.75, alignItems: 'center', flexWrap: 'wrap' }}>
                  <TextField
                    select
                    label="Cod. TUSS"
                    value={proc.code}
                    onChange={(e) => setProcedures(prev => prev.map((p, i) => i === idx ? { ...p, code: e.target.value } : p))}
                    size="medium"
                    sx={{ width: { xs: '100%', md: 145 }, flexShrink: 0 }}
                  >
                    {codeOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                  </TextField>

                  <TextField
                    select
                    label="Descrição do Procedimento"
                    value={proc.description}
                    onChange={(e) => setProcedures(prev => prev.map((p, i) => i === idx ? { ...p, description: e.target.value } : p))}
                    size="medium"
                    sx={{ flex: { xs: '1 1 auto', md: 1 }, minWidth: 0 }}
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

      <AppFooter />
    </Box>
  )
}
