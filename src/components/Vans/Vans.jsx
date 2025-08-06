import s from "./Vans.module.css"
import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Van from '../Van/Van'


export default function Vans({vansData}) {

  const [params, setParams] = useSearchParams()
  const type = params.get('type')

  function loader() {
    return (
      <>
        <h1>Loading</h1>
        <div className={s.loader}></div>
      </>
    )
  }

  const typeFilter = vansData.filter(v => v.type==type)
  let vData = type ? typeFilter : vansData

  const vans = vData.map(van => {
    return (
      <Van
        key={van.id}
        id={van.id}
        name={van.name}
        price={van.price}
        description={van.description}
        imageUrl={van.imageUrl}
        type={van.type}
        params={params}
        />
    )
  })


  return (
    <main className={s.main}>
      <h1>Explore our van options</h1>
      <div>
        <button className={type=='rugged' ? s.buttonClicked: undefined} onClick={() => setParams({type: 'rugged'})}>Rugged</button>
        <button className={type=='simple' ? s.buttonClicked: undefined} onClick={() => setParams({type: 'simple'})}>Simple</button>
        <button className={type=='luxury' ? s.buttonClicked: undefined} onClick={() => setParams({type: 'luxury'})}>Luxury</button>
        {type ? <button onClick={() => setParams({})}>Clear</button> : null}
      </div>
        {vansData.length > 0 ? <div className={s.vansContainer}> {vans} </div> : loader()}
    </main>
  )
}