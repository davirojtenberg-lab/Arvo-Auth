import { Box, Link, Typography } from '@mui/material'

export default function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'white',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        px: { xs: 2, md: 16 },
        py: { xs: 2, md: 1 },
        gap: { xs: 1, md: 0 },
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 14,
        letterSpacing: 0.17,
        lineHeight: '24px',
      }}
    >
      <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
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
  )
}
