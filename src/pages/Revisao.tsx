import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import AppHeader from '../components/AppHeader'
import AppStepper from '../components/AppStepper'
import AppFooter from '../components/AppFooter'

const imgDocScanner    = '/assets/d428539db2aa9657be184aacba58eb28f00b350a.svg'
const imgPersonFilled  = '/assets/1d82bbfd4252e4af67210ee1f9b2de5b0978badd.svg'
const imgHospital      = '/assets/d9799c29cb3f049ecd900f883f5a3a7d8cc7cc35.svg'

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
      <AppHeader />

      {/* Main content */}
      <Box sx={{ flex: 1, px: { xs: 2, md: 16 }, pt: 3, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <AppStepper activeStep={2} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%', maxWidth: 616 }}>
          {/* Title */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h5">Dados Complementares</Typography>
            <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: 'rgba(0,0,0,0.6)' }}>
              Complete ou confirme as informações necessárias para a autorização
            </Typography>
          </Box>

          {/* Card: Dados da Guia */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionHeader icon={imgDocScanner} title="Dados da Guia" />
            <TextField
              label="Código da Guia"
              value={guia.codigo}
              onChange={(e) => setGuia(g => ({ ...g, codigo: e.target.value }))}
              fullWidth
            />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
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
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
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
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <SectionHeader icon={imgHospital} title="Dados do Prestador" />
            <TextField
              label="Médico"
              value={prestador.medico}
              onChange={(e) => setPrestador(p => ({ ...p, medico: e.target.value }))}
              fullWidth
            />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
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

      <AppFooter />
    </Box>
  )
}
