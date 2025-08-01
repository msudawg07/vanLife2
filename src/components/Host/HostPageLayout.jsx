import {Link, NavLink, Outlet} from 'react-router-dom'
import s from "./HostPageLayout.module.css"

export default function HostPageLayout() {

  function active({isActive}) {
      const navFocus = {
        color: 'navy',
      }

      const nonFocus = {
        color: 'black',
        textDecoration: 'none'
      }
      return isActive ? navFocus : nonFocus
    }

  return (
    <main className={s.main}>
      <nav>
        <NavLink end style={active} to='/host'>Dashboard</NavLink>
        <NavLink style={active} to='/host/income'>Income</NavLink>
        <NavLink style={active} to='/host/vans'>Vans</NavLink>
        <NavLink style={active} to='/host/reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </main>
  )
}


        // {/* <NavLink end style={({isActive}) => isActive ? navFocus : nonFocus} to='/host'>Dashboard</NavLink>
        // <NavLink style={({isActive}) => isActive ? navFocus : nonFocus} to='/host/income'>Income</NavLink>
        // <NavLink style={({isActive}) => isActive ? navFocus : nonFocus} to='/host/reviews'>Reviews</NavLink> */}