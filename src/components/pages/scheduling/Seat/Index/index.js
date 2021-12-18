import './style.css'

export default function Seat({ children }) {
  return (
    <div className="seat">
      { children }
    </div>
  )
}