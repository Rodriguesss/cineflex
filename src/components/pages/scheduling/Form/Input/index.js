import './style.css'

export default function Input({ placeholder }) {
  return (
    <input class="input" type="text" placeholder={placeholder} />
  )
}