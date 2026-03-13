import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'

const imgNotifications = 'http://localhost:3845/assets/f65369d372ad36a089e4bbdf47d41d66780a2aed.svg'
const imgVerPedido = 'http://localhost:3845/assets/b339f873451e6a7fae73e417cea5fb4c949ebfdc.svg'

const rows = [
  { beneficiario: 'Rodrigo Mariano', documento: '047.370.870-17', hospital: 'Hospital Central', medico: 'Dr. André Antunes', data: '26/01/2026', status: '🟡 Pendente' },
  { beneficiario: 'Maria Silva', documento: '334.795.680-09', hospital: 'Clínica São Paulo', medico: 'Dra. Paula Freitas', data: '26/01/2026', status: '🟢 Aprovado' },
  { beneficiario: 'Ana Oliveira', documento: '627.991.820-38', hospital: 'Hospital Central', medico: 'Dra. Diana Vargas Freire', data: '26/01/2026', status: '🔴 Negado' },
  { beneficiario: 'João Souza', documento: '177.956.020-61', hospital: 'Hospital Central', medico: 'Dr. Rafael Tedesco', data: '26/01/2026', status: '🟡 Pendente' },
  { beneficiario: 'Carlos Santos', documento: '515.829.320-18', hospital: 'Clínica São Paulo', medico: 'Dra. Helen Araújo Aguiar', data: '26/01/2026', status: '🟡 Pendente' },
]

export default function Home() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

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
          <Button variant="outlined" color="primary" size="medium">
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
      <Box sx={{ flex: 1, px: 16, pt: 3, pb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Solicitações de Autorização
        </Typography>

        {/* Card */}
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '4px',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Toolbar */}
          <Box sx={{ display: 'flex', gap: 2.5, p: 2, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flex: 1, gap: 2 }}>
              <TextField
                label="Buscar"
                placeholder="Código, nome benefíciário, nome médico ..."
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  label="Status"
                  onChange={(e: SelectChangeEvent) => setStatus(e.target.value)}
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="pendente">Pendente</MenuItem>
                  <MenuItem value="aprovado">Aprovado</MenuItem>
                  <MenuItem value="negado">Negado</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
              <Button variant="outlined" color="inherit" size="medium">
                Limpar
              </Button>
              <Button variant="contained" color="primary" size="medium">
                Filtrar
              </Button>
            </Box>
          </Box>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {['Beneficiário', 'Documento', 'Hospital / Médico', 'Data de solicitação', 'Status', 'Ação'].map((col) => (
                    <TableCell key={col} sx={{ fontWeight: 500, fontSize: 14, letterSpacing: 0.17, lineHeight: '24px' }}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx} hover>
                    <TableCell>
                      <Typography variant="body2">{row.beneficiario}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{row.documento}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{row.hospital}</Typography>
                      <Typography variant="body2">{row.medico}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{row.data}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{row.status}</Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<img src={imgVerPedido} alt="" style={{ width: 16, height: 16 }} />}
                        sx={{ fontSize: 12, fontWeight: 500, letterSpacing: 0.46, lineHeight: '22px' }}
                        onClick={() => navigate('/ver-pedido')}
                      >
                        Ver pedido
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={13}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10))
              setPage(0)
            }}
            labelRowsPerPage="Linhas por página:"
            rowsPerPageOptions={[5, 10, 25]}
          />
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
        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)', textAlign: 'right' }}>
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
