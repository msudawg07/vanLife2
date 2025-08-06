import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Vans from './components/Vans/Vans'
import Login from './components/Login/Login'
import VanPage from './components/VanPage/VanPage'
import Layout from './components/Layout/Layout'
import HostPageLayout from './components/Host/HostPageLayout'
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/Income'
import HostVans from './components/Host/HostVans'
import HostVanDetails from './components/Host/HostVanDetails'
import Reviews from './components/Host/Reviews'
import Details from './components/Host/HostVanDetailsNav/Details'
import Pricing from './components/Host/HostVanDetailsNav/Pricing'
import Photos from './components/Host/HostVanDetailsNav/Photos'
import PageNotFound from './components/PageNotFound/PageNotFound'

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
          <Route path='vans/:id' element={<VanPage vansData={vans}/>} />
          <Route path='login' element={<Login/>} />

          <Route path='host' element={<HostPageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans vansData={vans}/>} />
            <Route path='vans/:id' element={<HostVanDetails vansData={vans}/>} >
              <Route index element={<Details />}></Route>
              <Route path='pricing' element={<Pricing />}></Route>
              <Route path='photos' element={<Photos />}></Route>
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<PageNotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
