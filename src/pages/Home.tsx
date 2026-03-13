import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
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
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

const imgVerPedido = '/assets/b339f873451e6a7fae73e417cea5fb4c949ebfdc.svg'

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
      <AppHeader />

      {/* Main content */}
      <Box sx={{ flex: 1, px: { xs: 2, md: 16 }, pt: 3, pb: 4 }}>
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
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.5, p: 2, alignItems: { xs: 'stretch', md: 'center' } }}>
            <Box sx={{ display: 'flex', flex: 1, gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
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
              <Button variant="outlined" color="inherit" size="medium" fullWidth>
                Limpar
              </Button>
              <Button variant="contained" color="primary" size="medium" fullWidth>
                Filtrar
              </Button>
            </Box>
          </Box>

          {/* Table */}
          <TableContainer sx={{ overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 500, fontSize: 14, letterSpacing: 0.17, lineHeight: '24px' }}>
                    Beneficiário
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: 14,
                      letterSpacing: 0.17,
                      lineHeight: '24px',
                      display: { xs: 'none', md: 'table-cell' },
                    }}
                  >
                    Documento
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: 14,
                      letterSpacing: 0.17,
                      lineHeight: '24px',
                      display: { xs: 'none', md: 'table-cell' },
                    }}
                  >
                    Hospital / Médico
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, fontSize: 14, letterSpacing: 0.17, lineHeight: '24px' }}>
                    Data de solicitação
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, fontSize: 14, letterSpacing: 0.17, lineHeight: '24px' }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, fontSize: 14, letterSpacing: 0.17, lineHeight: '24px' }}>
                    Ação
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx} hover>
                    <TableCell>
                      <Typography variant="body2">{row.beneficiario}</Typography>
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography variant="body2">{row.documento}</Typography>
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
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

      <AppFooter />
    </Box>
  )
}
