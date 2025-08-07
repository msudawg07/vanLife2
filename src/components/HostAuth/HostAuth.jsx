import {Navigate, Outlet, useLocation} from 'react-router-dom'
import {useState} from 'react'

export default function HostAuth({authenticated}) {
  const message = 'You must login first'
  // const auth = false
  const location = useLocation()

  return authenticated ? <Outlet /> : <Navigate to='/login' state={{mess: message, from: location}} replace/>
}