const imgLogo = 'http://localhost:3845/assets/94170ef9bfcd472d6fb4e288cabf8b4a458e93f1.svg'
const imgGroup1 = 'http://localhost:3845/assets/8a82bad5a6274cad66e442ccbef16d36bd799b39.svg'

export default function Logo() {
  return (
    <div style={{ position: 'relative', width: 190, height: 46.547 }}>
      {/* Icon */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: '77.92%' }}>
        <img alt="Arvo Auth icon" src={imgLogo} style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Wordmark */}
      <div style={{ position: 'absolute', top: '29.46%', bottom: '24.5%', left: '26.26%', right: 0 }}>
        <img alt="Arvo Auth" src={imgGroup1} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}
