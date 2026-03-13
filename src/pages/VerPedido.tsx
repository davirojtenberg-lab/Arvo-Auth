import { useNavigate } from 'react-router-dom'
import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

const imgCopyIcon       = '/assets/f40bbb5dd7e5293f9af06818c3c89cbe0da463c3.svg'
const imgDownload       = '/assets/6208372c1f41606f8f8d5da080566be2ee4ec835.svg'
const imgDocScanner     = '/assets/d428539db2aa9657be184aacba58eb28f00b350a.svg'
const imgMedicalSvcs    = '/assets/4593b0472eab8bb61f22597146f78547c0d6f4bf.svg'
const imgPersonFilled   = '/assets/1d82bbfd4252e4af67210ee1f9b2de5b0978badd.svg'
const imgHospital       = '/assets/d9799c29cb3f049ecd900f883f5a3a7d8cc7cc35.svg'

const GUIDE_CODE = 'AG-2026-00008495'

const procedures = [
  { code: '344567834', description: 'Consulta médica em consultório' },
  { code: '345645645', description: 'Hemograma completo' },
  { code: '1212345456', description: 'Glicose sérica' },
  { code: '401356434', description: 'TSH ultrassensível' },
]

function SectionCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <img src={icon} alt="" style={{ width: 24, height: 26 }} />
        <Typography variant="h6" color="primary">{title}</Typography>
      </Box>
      {children}
    </Box>
  )
}

type DataRow = { label: string; value: string; helper?: string }

function DataTable({ rows }: { rows: DataRow[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Desktop header — hidden on mobile */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, pb: 1.5 }}>
        <Typography sx={{ width: 180, flexShrink: 0, fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.6)', letterSpacing: 0.17 }}>
          Campo
        </Typography>
        <Typography sx={{ flex: 1, fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.6)', letterSpacing: 0.17 }}>
          Valor
        </Typography>
      </Box>
      <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
      {rows.map((row, idx) => (
        <Box key={idx}>
          {/* Desktop layout: two columns */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, py: 1.5, alignItems: 'baseline' }}>
            <Typography variant="body2" sx={{ width: 180, flexShrink: 0, color: 'rgba(0,0,0,0.6)' }}>
              {row.label}
            </Typography>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.87)' }}>
                {row.value}
              </Typography>
              {row.helper && (
                <Typography sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', letterSpacing: 0.4, mt: 0.25 }}>
                  {row.helper}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Mobile layout: stacked */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', py: 1.5 }}>
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)', mb: 0.25 }}>
              {row.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.87)', fontWeight: 500 }}>
              {row.value}
            </Typography>
            {row.helper && (
              <Typography sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', letterSpacing: 0.4, mt: 0.25 }}>
                {row.helper}
              </Typography>
            )}
          </Box>

          {idx < rows.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  )
}

export default function VerPedido() {
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

        {/* Page title */}
        <Box sx={{ width: '100%', maxWidth: 616, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant="text"
            color="primary"
            size="small"
            sx={{ alignSelf: 'flex-start', pl: 0 }}
            startIcon={
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 18, height: 18, fill: 'currentColor' }}>
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
              </Box>
            }
            onClick={() => navigate('/home')}
          >
            Voltar para lista de pedidos
          </Button>
          <Typography variant="h5">Detalhes do Pedido</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, color: 'rgba(0,0,0,0.6)' }}>
            Rodrigo Mariano · 047.370.870-17
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%', maxWidth: 616 }}>

          {/* ── Card 1: Resultado da autorização ── */}
          <Box sx={{ bgcolor: 'white', borderRadius: '24px', p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>

            {/* Success icon */}
            <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: '#6fdaa6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 36, height: 36, fill: '#034b28' }}>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 34, lineHeight: 1.235, letterSpacing: 0.25, color: '#1ea664' }}>
                Autorização aprovada
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                Data/Hora: 11/02/2026, 15:48:53
              </Typography>
            </Box>

            {/* Guide code */}
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
              <Box sx={{ bgcolor: 'white', borderRadius: '8px', px: 3, py: 1, display: 'flex', alignItems: 'center', gap: 1.25 }}>
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
          </Box>

          {/* ── Card 2: Procedimentos ── */}
          <SectionCard icon={imgMedicalSvcs} title="Procedimentos identificados">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {/* Table header — desktop only */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, pb: 1.5 }}>
                <Typography sx={{ width: 145, flexShrink: 0, fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.6)', letterSpacing: 0.17 }}>
                  Cod. TUSS
                </Typography>
                <Typography sx={{ flex: 1, fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.6)', letterSpacing: 0.17 }}>
                  Descrição do Procedimento
                </Typography>
              </Box>
              <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
              {procedures.map((proc, idx) => (
                <Box key={idx}>
                  {/* Desktop: side by side */}
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, py: 1.5, alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ width: 145, flexShrink: 0, color: 'rgba(0,0,0,0.87)' }}>
                      {proc.code}
                    </Typography>
                    <Typography variant="body2" sx={{ flex: 1, color: 'rgba(0,0,0,0.87)' }}>
                      {proc.description}
                    </Typography>
                  </Box>
                  {/* Mobile: stacked */}
                  <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', py: 1.5 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)', mb: 0.25 }}>
                      {proc.code}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.87)', fontWeight: 500 }}>
                      {proc.description}
                    </Typography>
                  </Box>
                  {idx < procedures.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
          </SectionCard>

          {/* ── Card 3: Dados da Guia ── */}
          <SectionCard icon={imgDocScanner} title="Dados da Guia">
            <DataTable rows={[
              { label: 'Código da Guia', value: '234523452435' },
              { label: 'CID', value: 'E11.9' },
              { label: 'Data do pedido', value: '10/02/2026' },
            ]} />
          </SectionCard>

          {/* ── Card 4: Dados do Beneficiário ── */}
          <SectionCard icon={imgPersonFilled} title="Dados do Beneficiário">
            <DataTable rows={[
              { label: 'Nome do Beneficiário', value: 'André Tavares da Silva' },
              { label: 'Número da carteirinha', value: '0000 0000 0000 0000', helper: 'Número impresso no cartão do beneficiário' },
              { label: 'CPF', value: '043.45.457-86' },
              { label: 'Data de nascimento', value: '12/11/1977' },
            ]} />
          </SectionCard>

          {/* ── Card 5: Dados do Prestador ── */}
          <SectionCard icon={imgHospital} title="Dados do Prestador">
            <DataTable rows={[
              { label: 'Médico', value: 'Dr. Arnaldo Silva' },
              { label: 'CRM', value: '12345-SP' },
              { label: 'Especialidade', value: 'Cardiologia' },
            ]} />
          </SectionCard>

          {/* ── Bottom navigation ── */}
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
              onClick={() => navigate('/home')}
            >
              Voltar para listagem
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              startIcon={<img src={imgDownload} alt="" style={{ width: 16, height: 16 }} />}
            >
              Baixar guia em PDF
            </Button>
          </Box>
        </Box>
      </Box>

      <AppFooter />
    </Box>
  )
}
