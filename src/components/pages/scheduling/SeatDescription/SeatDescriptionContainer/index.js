import './style.css'

export default function SeatDescriptionContainer({ children: [element, type] }) {
  return (
    <div className="description-container">
      {element}
      <p>{type}</p>
    </div>
  )
}