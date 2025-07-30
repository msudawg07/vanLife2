import s from "./Van.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function Van({id, name, price, description, imageUrl, type}) {

  return (
    <div className={s.main}>
      <Link to={`/vans/${id}`}>
          <img src={imageUrl} className={s.vanImg}/>
          <div className={s.text}>
            <div>
                <h2>{name}</h2>
              <span>{type}</span>
            </div>
            <div>
              ${price}/day
            </div>
          </div>
      </Link>
    </div>
  )
}