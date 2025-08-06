import {Navigate, Outlet} from 'react-router-dom'

export default function HostAuth() {
  const message = 'You must login first'
  const auth = false

  return auth ? <Outlet /> : <Navigate to='login' state={{mess: message}}/>
}