import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Vans from './components/Vans/Vans'
import VanPage from './components/VanPage/VanPage'
import Layout from './components/Layout/Layout'
import HostPageLayout from './components/Host/HostPageLayout'
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/Income'
import HostVans from './components/Host/HostVans'
import HostVanDetails from './components/Host/HostVanDetails'
import Reviews from './components/Host/Reviews'

function App() {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true) //use this for loading screen if necessaary - for now vansData is working in Vans.jsx

  useEffect(() => {
    fetch('http://localhost:3001/api/vans')
    .then(res => res.json())
    .then(data => setVans(data))
    setLoading(false)
  }, [])

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans vansData={vans} loading={loading}/>} />
          <Route path='vans/:id' element={<VanPage />} />

          <Route path='host' element={<HostPageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans vansData={vans}/>} />
            <Route path='vans/:id' element={<HostVanDetails vansData={vans}/>} >
              <Route index></Route>
              <Route path='pricing'></Route>
              <Route path='photos'></Route>
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
