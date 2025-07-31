import s from './Header.module.css'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {

  function navFocus({isActive}) {
    return isActive ? s.navfocus : s.navNoFocus
  }

  return (
    <nav className={s.navTop}>
      <div><Link to='/' className={s.navVanLife}>#VANLIFE</Link></div>
      <div className={s.navRight}>
        <NavLink className={navFocus} to='/host'>Host</NavLink>
        <NavLink className={navFocus} to='/about'>About</NavLink>
        <NavLink className={navFocus} to='/vans'>Vans</NavLink>
      </div>
    </nav>
  )
}