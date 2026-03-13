import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Popover, Typography } from '@mui/material'


const imgAccountCircle = '/assets/053816bff7d647f8be5dc424be75ac9d1c48a4df.svg'
const imgLockOpen = '/assets/01ed661d15f2c95979f102a94f3bfce57a9bde37.svg'
const imgLogout = '/assets/f1f8cd891bb9f962ecff7d5950ba645991f0b866.svg'

type UserMenuProps = {
  name?: string
  institution?: string
}

export default function UserMenu({ name = 'Rafael Sobrenome', institution = 'Hospital Central - Unidade SP' }: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  return (
    <>
      <Box
        component="button"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          p: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 16, letterSpacing: 0.15, lineHeight: 1.5, color: 'rgba(0,0,0,0.87)' }}>
            {name}
          </Typography>
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{
              width: 20,
              height: 20,
              flexShrink: 0,
              fill: 'rgba(0,0,0,0.54)',
              transition: 'transform 0.2s',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" />
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)', lineHeight: '24px' }}>
          {institution}
        </Typography>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              width: 226,
              maxWidth: 'calc(100vw - 16px)',
              borderRadius: '8px',
              border: '1px solid #bbb',
              boxShadow: '4px 4px 12px 0px rgba(0,0,0,0.12)',
            },
          },
        }}
      >
        {/* Menu items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '23px', p: 2 }}>
          <Box
            component="button"
            onClick={() => setAnchorEl(null)}
            sx={{ display: 'flex', gap: 1, alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', p: 0 }}
          >
            <img src={imgAccountCircle} alt="" style={{ width: 20, height: 21 }} />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.87)' }}>
              Meus dados
            </Typography>
          </Box>
          <Box
            component="button"
            onClick={() => setAnchorEl(null)}
            sx={{ display: 'flex', gap: 1, alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', p: 0 }}
          >
            <img src={imgLockOpen} alt="" style={{ width: 20, height: 21 }} />
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.87)' }}>
              Alterar senha
            </Typography>
          </Box>
        </Box>

        {/* Sair */}
        <Box sx={{ borderTop: '1px solid #bbb', p: 2, borderRadius: '0 0 16px 16px' }}>
          <Box
            component="button"
            onClick={() => { setAnchorEl(null); navigate('/login') }}
            sx={{ display: 'flex', gap: 1, alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', p: 0 }}
          >
            <img src={imgLogout} alt="" style={{ width: 20, height: 21 }} />
            <Typography variant="body2" sx={{ color: '#902b29' }}>
              Sair
            </Typography>
          </Box>
        </Box>
      </Popover>
    </>
  )
}
