import {Link, Outlet} from 'react-router-dom'
import s from "./HostPageLayout.module.css"

export default function HostPageLayout() {
  return (
    <main className={s.main}>
      <nav>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </main>
  )
}