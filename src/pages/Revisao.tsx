import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'

const imgNotifications = 'http://localhost:3845/assets/f65369d372ad36a089e4bbdf47d41d66780a2aed.svg'

const imgStepDone     = 'http://localhost:3845/assets/23dd6772b22addfad05cd7a77b34a9df7df2e957.svg'
const imgStepDoneIcon = 'http://localhost:3845/assets/363fb76ef112bf1341d9e1f682692bde8a605291.svg'
const imgStepActive   = 'http://localhost:3845/assets/6e48262f31c2eaae741b2dcb1940957f9c6ec1c1.svg'
const imgStepInactive = 'http://localhost:3845/assets/84ddce9fa8d7819777bcf2297c61b2d1539e9d27.svg'

const imgDocScanner    = 'http://localhost:3845/assets/d428539db2aa9657be184aacba58eb28f00b350a.svg'
const imgPersonFilled  = 'http://localhost:3845/assets/1d82bbfd4252e4af67210ee1f9b2de5b0978badd.svg'
const imgHospital      = 'http://localhost:3845/assets/d9799c29cb3f049ecd900f883f5a3a7d8cc7cc35.svg'

const steps = [
  { label: 'Upload do pedido', state: 'done' },
  { label: 'Diagnóstico',      state: 'done' },
  { label: 'Revisão e Dados',  state: 'active' },
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

function CalendarIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 24, height: 24, fill: 'rgba(0,0,0,0.54)' }}>
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
    </Box>
  )
}

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <img src={icon} alt="" style={{ width: 24, height: 26 }} />
      <Typography variant="h6" color="primary">{title}</Typography>
    </Box>
  )
}

const especialidades = ['Cardiologia', 'Ortopedia', 'Neurologia', 'Clínica Geral', 'Oncologia']

export default function Revisao() {
  const navigate = useNavigate()

  const [guia, setGuia] = useState({
    codigo: '234523452435',
    cid: 'E11.9',
    dataPedido: '10/02/2026',
  })

  const [beneficiario, setBeneficiario] = useState({
    nome: 'André Tavares da Silva',
    carteirinha: '0000    0000    0000    0000',
    cpf: '043.45.457-86',
    dataNascimento: '12/11/1977',
  })

  const [prestador, setPrestador] = useState({
    medico: 'Dr. Arnaldo Silva',
    crm: '12345-SP',
    especialidade: 'Cardiologia',
  })

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
            <Typography variant="h5">Dados Complementares</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: 'rgba(0,0,0,0.6)' }}>
              Complete ou confirme as informações necessárias para a autorização
            </Typography>
          </Box>

          {/* Card: Dados da Guia */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionHeader icon={imgDocScanner} title="Dados da Guia" />
            <TextField
              label="Código da Guia"
              value={guia.codigo}
              onChange={(e) => setGuia(g => ({ ...g, codigo: e.target.value }))}
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 3 }}>
              <TextField
                label="CID"
                value={guia.cid}
                onChange={(e) => setGuia(g => ({ ...g, cid: e.target.value }))}
                sx={{ flex: 1 }}
              />
              <TextField
                label="Data do pedido"
                value={guia.dataPedido}
                onChange={(e) => setGuia(g => ({ ...g, dataPedido: e.target.value }))}
                sx={{ flex: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Card: Dados do Beneficiário */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionHeader icon={imgPersonFilled} title="Dados do Beneficiário" />
            <TextField
              label="Nome do Beneficiário"
              value={beneficiario.nome}
              onChange={(e) => setBeneficiario(b => ({ ...b, nome: e.target.value }))}
              fullWidth
            />
            <TextField
              label="Número da carteirinha *"
              value={beneficiario.carteirinha}
              onChange={(e) => setBeneficiario(b => ({ ...b, carteirinha: e.target.value }))}
              fullWidth
              helperText="Número impresso no cartão do beneficiário"
            />
            <Box sx={{ display: 'flex', gap: 3 }}>
              <TextField
                label="CPF"
                value={beneficiario.cpf}
                onChange={(e) => setBeneficiario(b => ({ ...b, cpf: e.target.value }))}
                sx={{ flex: 1 }}
              />
              <TextField
                label="Data de nascimento"
                value={beneficiario.dataNascimento}
                onChange={(e) => setBeneficiario(b => ({ ...b, dataNascimento: e.target.value }))}
                sx={{ flex: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Card: Dados do Prestador */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionHeader icon={imgHospital} title="Dados do Prestador" />
            <TextField
              label="Médico"
              value={prestador.medico}
              onChange={(e) => setPrestador(p => ({ ...p, medico: e.target.value }))}
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 3 }}>
              <TextField
                label="CRM"
                value={prestador.crm}
                onChange={(e) => setPrestador(p => ({ ...p, crm: e.target.value }))}
                sx={{ flex: 1 }}
              />
              <TextField
                select
                label="Especialidade"
                value={prestador.especialidade}
                onChange={(e) => setPrestador(p => ({ ...p, especialidade: e.target.value }))}
                sx={{ flex: 1 }}
              >
                {especialidades.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
              </TextField>
            </Box>
          </Box>

          {/* Warning box */}
          <Box sx={{ bgcolor: 'rgba(255,185,77,0.3)', borderRadius: '16px', p: 2 }}>
            <Typography variant="body2" sx={{ color: '#815500' }}>
              <Box component="span" sx={{ fontWeight: 700 }}>Atenção: </Box>
              Verifique cuidadosamente todos os dados antes de enviar. Informações incorretas podem causar negativa automática.
            </Typography>
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
              onClick={() => navigate('/diagnostico')}
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
              onClick={() => navigate('/resultado')}
            >
              Solicitar autorização
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
