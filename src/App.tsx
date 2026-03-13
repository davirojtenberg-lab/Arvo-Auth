import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NovoPedido from './pages/NovoPedido'
import Diagnostico from './pages/Diagnostico'
import Revisao from './pages/Revisao'
import Resultado from './pages/Resultado'
import VerPedido from './pages/VerPedido'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/novo-pedido" element={<NovoPedido />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/revisao" element={<Revisao />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/ver-pedido" element={<VerPedido />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
