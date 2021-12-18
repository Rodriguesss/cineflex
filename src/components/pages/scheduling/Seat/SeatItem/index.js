import { Number } from './style'

export default function SeatItem({ number, color, isAvailable, legend }) {
  const css = {
    selectedColorCss: {color: '#8DD7CF', border: '#808F9D'},
    defaultColorCss: {color: '#C3CFD9', border: '#1AAE9E'},
    unavailableColorCss: {color: '#FBE192', border: '#F7C52B'}
  }

  function setColor() {
    if(isAvailable === undefined) return css[color]
    
    if(isAvailable) return css['defaultColorCss']

    return css['unavailableColorCss'];
  }

  return (
    <Number css={setColor()} legend={legend}>{ number }</Number>
  )
}

