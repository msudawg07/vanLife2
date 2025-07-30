import s from "./Vans.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Van from '../Van/Van'


export default function Vans({vansData}) {

  function loader() {
    return (
      <>
        <h1>Loading</h1>
        <div className={s.loader}></div>
      </>
    )
  }


    const vans = vansData.map(van => {
      return (
        <Van
          key={van.id}
          id={van.id}
          name={van.name}
          price={van.price}
          description={van.description}
          imageUrl={van.imageUrl}
          type={van.type}
         />
      )
    })



  return (
    <main className={s.main}>
      <h1>Explore our van options</h1>
        {vansData.length > 0 ? <div className={s.vansContainer}> {vans} </div> : loader()}
    </main>
  )
}