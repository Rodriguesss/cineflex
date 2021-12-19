import { useState } from 'react'

import './style.css'

import { cpfMask } from '../../../../../utils/mask'

export default function Input({ placeholder, cpf }) {
  const [documentId, setDocumentId] = useState([])

  function handleChange(e) {
    cpf 
    ? setDocumentId(cpfMask(e.target.value))
    : setDocumentId(e.target.value)
  }

  return (
    <input className="input" type="text" placeholder={placeholder} maxLength={cpf ? `14` : `30`} value={documentId} onChange={handleChange} />
  )
}