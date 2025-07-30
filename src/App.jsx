import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Vans from './components/Vans/Vans'
import VanPage from './components/VanPage/VanPage'

function App() {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(true) //use this for loading screen if necessaary - for now vansData is working in Vans.jsx

  useEffect(() => {
    fetch('http://localhost:3001/api/tasks')
    .then(res => res.json())
    .then(data => setVans(data))
    setLoading(false)
  }, [])

  return (
    <BrowserRouter>
      <nav className='nav-top'>
        <div><Link to='/' className='nav-vanlife'>#VANLIFE</Link></div>
        <div className='nav-right'>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans vansData={vans} loading={loading}/>} />
        <Route path='/vans/:id' element={<VanPage />} />
      </Routes>
      <nav className='footer'>
        <div>@2025 #VANLIFE</div>
      </nav>
    </BrowserRouter>
  )
}

export default App
