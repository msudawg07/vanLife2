import s from "./Home.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className={s.main}>
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>Add advennture to your lifr by joining the #vanlife movement.
         Rent the perfect van to make your perfect road trip.
      </p>
      <Link to='/vans'><button>Find your van</button></Link>
    </main>
  )
}