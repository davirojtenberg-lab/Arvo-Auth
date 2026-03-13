import { Box, LinearProgress, Typography } from '@mui/material'

const imgStepDone     = '/assets/23dd6772b22addfad05cd7a77b34a9df7df2e957.svg'
const imgStepDoneIcon = '/assets/363fb76ef112bf1341d9e1f682692bde8a605291.svg'
const imgStepActive   = '/assets/6e48262f31c2eaae741b2dcb1940957f9c6ec1c1.svg'
const imgStepInactive = '/assets/84ddce9fa8d7819777bcf2297c61b2d1539e9d27.svg'

const stepLabels = ['Upload do pedido', 'Diagnóstico', 'Revisão e Dados', 'Resultado']

type Props = {
  activeStep: 0 | 1 | 2 | 3
}

export default function AppStepper({ activeStep }: Props) {
  const progressPercent = (activeStep / (stepLabels.length - 1)) * 100

  return (
    <>
      {/* ── Desktop stepper ── */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          bgcolor: 'white',
          borderRadius: '51px',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          width: 1256,
          mx: 'auto',
        }}
      >
        {stepLabels.map((label, idx) => {
          const state = idx < activeStep ? 'done' : idx === activeStep ? 'active' : 'inactive'
          return (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: 189 }}>
                <Box sx={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
                  {state === 'done' ? (
                    <>
                      <img src={imgStepDone} alt="" style={{ width: 48, height: 48 }} />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 24,
                          height: 24,
                        }}
                      >
                        <img src={imgStepDoneIcon} alt="" style={{ width: '100%', height: '100%' }} />
                      </Box>
                    </>
                  ) : (
                    <>
                      <img
                        src={state === 'active' ? imgStepActive : imgStepInactive}
                        alt=""
                        style={{ width: 48, height: 48 }}
                      />
                      <Typography
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontWeight: 700,
                          fontSize: 24,
                          lineHeight: 1.334,
                          color: state === 'active' ? 'white' : 'rgba(0,0,0,0.6)',
                        }}
                      >
                        {idx + 1}
                      </Typography>
                    </>
                  )}
                </Box>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: state === 'active' ? 700 : 400,
                    letterSpacing: 0.16,
                    lineHeight: '18px',
                    textAlign: 'center',
                    color: state === 'active' ? 'primary.main' : 'rgba(0,0,0,0.6)',
                  }}
                >
                  {label}
                </Typography>
              </Box>

              {idx < stepLabels.length - 1 && (
                <Box
                  sx={{
                    width: 160,
                    height: 4,
                    borderRadius: '22px',
                    background: 'linear-gradient(to right, #faf6f2 0%, #ffb3ae 135%)',
                    flexShrink: 0,
                  }}
                />
              )}
            </Box>
          )
        })}
      </Box>

      {/* ── Mobile compact stepper ── */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          bgcolor: 'white',
          borderRadius: '16px',
          p: 2,
          mx: 2,
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 4,
            borderRadius: '22px',
            mb: 1.5,
            bgcolor: '#f0f0f0',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(to right, #faf6f2 0%, #ffb3ae 135%)',
              borderRadius: '22px',
            },
          }}
        />
        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
          Etapa {activeStep + 1} de {stepLabels.length}{' · '}
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
            {stepLabels[activeStep]}
          </Box>
        </Typography>
      </Box>
    </>
  )
}
