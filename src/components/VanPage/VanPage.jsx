import s from "./VanPage.module.css"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageNotFound from '../PageNotFound/PageNotFound'

export default function VanPage({vansData}) {
  const {id} = useParams()
  const idExists = vansData.find(v => v.id == id)
  if(!idExists) return <PageNotFound />
  const [vanData, setVanData] = useState({})
  const location = useLocation()
  const back = location.state && location.state.search ? `/vans/?${location.state.search}` : '/vans'
  const backSentence = back == '/vans' ? 'All' : vanData.type
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/api/vans/${id}`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(data => setVanData(data))
    .catch((err) => setErr(err))
  }, [id])

  if(vanData == {}) return <h1>Loading...</h1>
  if(err) return <h1>{err.message}</h1> //may want to return the page not foudn here? Or create a new page for errors

  return (
    <main className={s.main}>
      <p>← <Link to={back}>Back to {backSentence} vans</Link></p>
      <img src={vanData.imageUrl}></img>
      <div>{vanData.type}</div>
      <h1>{vanData.name}</h1>
      <div>${vanData.price}/day</div>
      <p>{vanData.description}</p>
      <Link to='/vans'><button>Rent this van</button></Link>
    </main>
  )
}