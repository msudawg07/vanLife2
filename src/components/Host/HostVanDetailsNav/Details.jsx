import {useOutletContext} from 'react-router-dom'

export default function Details() {
  const data = useOutletContext();
  return (
    <section>
      <p><span>Name: </span>{data.name}</p>
      <p><span>Category: </span>{data.type}</p>
      <p><span>Description: </span>{data.description}</p>
    </section>
  )
}