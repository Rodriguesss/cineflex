import SeatItem from '../../Seat/SeatItem'
import SeatDescriptionContainer from '../SeatDescriptionContainer'
import './style.css'

export default function SeatDescription() {
  const descriptions = [
    { type: 'Selecionado', css: 'selected' },
    { type: 'Disponível', css: 'default-legend' },
    { type: 'Indisponível', css: 'unavailable' },
  ]

  return (
    <div className='seat-description'>
      {descriptions.map(({ type, css }) => (
        <SeatDescriptionContainer>
          <SeatItem number="" css={css} />
          {type}
        </SeatDescriptionContainer>
      ))}
    </div>
  )
}