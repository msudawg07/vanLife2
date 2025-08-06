import s from "./Van.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function Van({id, name, price, description, imageUrl, type, params}) {

  // console.log(params)
                                //'state=' below is Link state, which can accessed in
                                //the page that is being lnked to (VanPage.jsx) by using
                                // useLocation()

  return (
    <div className={s.main}>
      <Link to={`/vans/${id}`} state={{search: params.toString()}}>
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