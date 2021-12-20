import './style.css'

import axios from 'axios'

export default function Button({ name, objAPI }) {
  function sendPost() {
    const request = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', objAPI)
    request.then((response) => {
      console.log(response)
    })
  }

  return (
    <button className="button" onClick={() => { objAPI && sendPost() }}>{name}</button>
  )
}