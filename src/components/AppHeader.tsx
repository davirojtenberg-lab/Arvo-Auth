import { useNavigate } from 'react-router-dom'
import { Badge, Box, Button, IconButton } from '@mui/material'
import Logo from './Logo'
import UserMenu from './UserMenu'

const imgNotifications = '/assets/f65369d372ad36a089e4bbdf47d41d66780a2aed.svg'

export default function AppHeader() {
  const navigate = useNavigate()

  return (
    <Box
      component="header"
      sx={{ bgcolor: 'white', flexShrink: 0 }}
    >
      {/* Main row */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 16 },
        height: 64,
      }}>
        <Box sx={{ width: 110, height: 27, overflow: 'hidden', flexShrink: 0 }}>
          <Box sx={{ transform: `scale(${110 / 190})`, transformOrigin: 'top left', width: 190, height: 46.547 }}>
            <Logo />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          {/* Action buttons — desktop only */}
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            onClick={() => navigate('/home')}
          >
            Lista de pedidos
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            onClick={() => navigate('/novo-pedido')}
          >
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

      {/* Mobile action buttons row */}
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        gap: 1.5,
        px: 2,
        pb: 1.5,
      }}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          onClick={() => navigate('/home')}
        >
          Lista de pedidos
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          onClick={() => navigate('/novo-pedido')}
        >
          Novo pedido
        </Button>
      </Box>
    </Box>
  )
}
