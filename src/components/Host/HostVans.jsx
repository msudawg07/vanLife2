import {Link, useParams} from 'react-router-dom'
import s from "./HostVans.module.css"

export default function HostVans({vansData}) {
  console.log()
  // let hostid = 47 // I just hardcoded it below for now
  let hostvans = vansData.map(van => { //here I am just using the full vans data array that we fetched in App.jsx rather than making another API call
    if(van.hostId == 77) {
      return (
        <Link to={`/host/vans/${van.id}`}>
          <div key={van.id} className={s.van}>
            <img src={van.imageUrl} className={s.img}></img>
            <div>
              <p>{van.name}</p>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>

      )
    }
  })
  return (
    <>
      <h1>Your listed Vans</h1>
      {hostvans}
    </>
  )
}