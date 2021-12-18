import './style.css'

export default function Input({ placeholder }) {
  return (
    <input className="input" type="text" placeholder={placeholder} />
  )
}