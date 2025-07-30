import s from "./About.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function About() {
  return (
    <main className={s.main}>
      <div className={s.imageContainer}>
        <img className={s.image} src="https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg"></img>
        <img className={s.image} src="https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg"></img>
        <img className={s.image} src="https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg"></img>
        <img className={s.image} src="https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg"></img>
      </div>

      <h1>Don;t squeeze u a sedan when you could relax in a van</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Numquam asperiores nisi provident quos porro ut quis!
        Impedit est, quaerat repellendus assumenda,
        ab atque laudantium quasi quidem harum nobis quas expedita.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Numquam asperiores nisi provident quos porro ut quis!
        Impedit est, quaerat repellendus assumenda,
        ab atque laudantium quasi quidem harum nobis quas expedita.</p>

        <div className={s.bottomSection}>
          <h2>Your destination is waiting.
              Your van is ready.
          </h2>
          <Link to='/vans'>Explore our vans</Link>
        </div>


    </main>

  )
}