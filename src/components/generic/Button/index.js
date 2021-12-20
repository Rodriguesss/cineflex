import './style.css'

import axios from 'axios'

export default function Button({ name, objAPI }) {
  function sendPost() {
    axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', objAPI)
  }

  return (
    <button className="button" onClick={() => { objAPI && sendPost() }}>{name}</button>
  )
}