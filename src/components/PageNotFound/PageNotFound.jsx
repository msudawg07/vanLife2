import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <button><Link to='/'>Return home</Link></button>
    </>
  )
}