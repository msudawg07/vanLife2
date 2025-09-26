import {useOutletContext} from 'react-router-dom'

export default function Pricing() {
  const data = useOutletContext();
  //console.log(data)
  return (
    <h1>${data.price}/day</h1>
  )
}