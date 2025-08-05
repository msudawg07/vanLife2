import {Link, useParams, Outlet} from 'react-router-dom'
import s from './HostVanDetails.module.css'

export default function HostVanDetails({vansData}) {
  const {id} = useParams()
  const van = vansData.filter(van => van.id == id)[0] // again here, like in HostVans.jsx, just looping through array of vans that already was fecthed from API in app.jsx
  return (
    <>
      <Link to='/host/vans'>Back to all vans</Link>
      <div>
        <div className={s.top}>
          <img src={van.imageUrl} className={s.img}></img>
          <div>
            <p>{van.type}</p>
            <p>{van.name}</p>
            <p>{van.price}</p>
          </div>
        </div>
        <nav>
          <Link end to={`/host/vans/${id}`}>Details</Link>
          <Link to={`/host/vans/${id}/pricing`}>Pricing</Link>
          <Link to={`/host/vans/${id}/photos`}>Photos</Link>
        </nav>
      </div>
      <Outlet context={van}/>
    </>

  )
}