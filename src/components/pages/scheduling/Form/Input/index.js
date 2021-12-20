import { useState } from 'react'

import './style.css'

import { cpfMask } from '../../../../../utils/mask'

export default function Input({ placeholder, cpf, setInputName, setInputCPF }) {
  const [data, setData] = useState([])

  function handleChange({target: {value}}) {
    cpf ? setCPF(value) : setName(value) 
  }

  function setName(value) {
    setData(value)
    setInputName(value)
  }

  function setCPF(value) {
    setData(cpfMask(value))
    setInputCPF(value)
  }

  return (
    <input className="input" type="text" placeholder={placeholder} maxLength={cpf ? `14` : `30`} value={data} onChange={handleChange} />
  )
}