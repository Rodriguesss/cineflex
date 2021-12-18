import SeatItem from '../../Seat/SeatItem'
import SeatDescriptionContainer from '../SeatDescriptionContainer'
import './style.css'

export default function SeatDescription() {
  const descriptions = [
    { type: 'Selecionado', color: 'selectedColorCss' },
    { type: 'Disponível', color: 'defaultColorCss'},
    { type: 'Indisponível', color: 'unavailableColorCss' }
  ]

  return (
    <div className='seat-description'>
      {descriptions.map(({ type, color }) => (
        <SeatDescriptionContainer key={color} >
          <SeatItem number="" color={color} legend={true} />
          {type}
        </SeatDescriptionContainer>
      ))}
    </div>
  )
}