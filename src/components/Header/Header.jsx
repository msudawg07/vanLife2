import s from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <nav className='nav-top'>
      <div><Link to='/' className='nav-vanlife'>#VANLIFE</Link></div>
      <div className='nav-right'>
        <Link to='/host'>Host</Link>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </div>
    </nav>
  )
}