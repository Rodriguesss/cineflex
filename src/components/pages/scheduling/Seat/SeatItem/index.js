import './style.css'

export default function SeatItem({ number, css }) {
  return (
    <div className={`${css}`}>{ number }</div>
  )
}