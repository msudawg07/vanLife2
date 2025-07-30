import s from "./VanPage.module.css"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function VanPage() {
  const {id} = useParams()
  const [vanData, setVanData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/api/vans/${id}`)
    .then(res => res.json())
    .then(data => setVanData(data))
  }, [id])

  return (
    <main className={s.main}>
      <p>← <Link to='/vans'>Back to all vans</Link></p>
      <img src={vanData.imageUrl}></img>
      <div>{vanData.type}</div>
      <h1>{vanData.name}</h1>
      <div>{vanData.price}</div>
      <p>{vanData.description}</p>
      <Link to='/vans'><button>Rent this van</button></Link>
    </main>
  )
}