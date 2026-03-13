import { Box, Dialog, IconButton, Typography } from '@mui/material'

const imgBomExemplo = '/assets/7e13fffe041c90a34a993f3d6761b24a62c80158.png'
const imgMauExemplo1 = '/assets/b4698d09332226b67462b0c42451ab367eae20f1.png'
const imgMauExemplo2 = '/assets/d6b12990b66be52954f3375b85ddac7dedba1eca.png'
const imgMauExemplo3 = '/assets/d49f3e5d8a832c9e09835f216c2d03f628980675.png'

type Props = {
  open: boolean
  onClose: () => void
}

export default function BoasPraticasModal({ open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            bgcolor: '#f0f0f0',
            borderRadius: '24px',
            p: { xs: 3, md: 6 },
            position: 'relative',
            maxWidth: { xs: '95vw', sm: 900 },
            width: '100%',
          },
        },
      }}
    >
      {/* Close button */}
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 16, right: 16 }}>
        <Box component="svg" viewBox="0 0 24 24" sx={{ width: 24, height: 24, fill: 'rgba(0,0,0,0.54)' }}>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </Box>
      </IconButton>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Header text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h5">
            Boas práticas para um pedido visualmente claro.
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 16, letterSpacing: 0.15, lineHeight: 1.5, color: 'rgba(0,0,0,0.87)' }}>
            Procure fazer o upload de imagem escaneada com boa qualidade. É importante que o documento esteja com boa nitidez para a leitura adequada das informações.
          </Typography>
        </Box>

        {/* Two columns */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: 9 }, alignItems: 'flex-start' }}>
          {/* Coluna Sim */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 24, height: 24, fill: '#4caf50', flexShrink: 0 }}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 20, letterSpacing: 0.15, lineHeight: 1.6, color: 'rgba(0,0,0,0.87)' }}>
                  Sim
                </Typography>
              </Box>
              <Typography variant="body2">
                Documento plano, luz clara, texto nítido.
              </Typography>
            </Box>
            <Box
              component="img"
              src={imgBomExemplo}
              alt="Bom exemplo"
              sx={{
                width: { xs: '100%', md: 323 },
                height: { xs: 'auto', md: 443 },
                objectFit: 'cover',
                borderRadius: '4px',
                display: 'block',
              }}
            />
          </Box>

          {/* Coluna Não */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 24, height: 24, fill: '#f44336', flexShrink: 0 }}>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 20, letterSpacing: 0.15, lineHeight: 1.6, color: 'rgba(0,0,0,0.87)' }}>
                  Não
                </Typography>
              </Box>
              <Typography variant="body2">
                Papel amassado, foto escura, texto desfocado.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Box
                  component="img"
                  src={imgMauExemplo1}
                  alt="Mau exemplo 1"
                  sx={{ width: { xs: '47%', md: 146 }, height: { xs: 'auto', md: 198 }, objectFit: 'cover', borderRadius: '4px', display: 'block' }}
                />
                <Box
                  component="img"
                  src={imgMauExemplo2}
                  alt="Mau exemplo 2"
                  sx={{ width: { xs: '47%', md: 146 }, height: { xs: 'auto', md: 198 }, objectFit: 'cover', borderRadius: '4px', display: 'block' }}
                />
              </Box>
              <Box
                component="img"
                src={imgMauExemplo3}
                alt="Mau exemplo 3"
                sx={{ width: { xs: '100%', md: 326 }, height: { xs: 'auto', md: 213 }, objectFit: 'cover', borderRadius: '4px', display: 'block' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}
