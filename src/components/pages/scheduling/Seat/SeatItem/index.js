import { useEffect, useState } from 'react'
import { Number } from './style'

export default function SeatItem({ number, color, isAvailable, legend }) {

  useEffect(() => {
    setColor()
  }, [])

  const css = {
    selectedColorCss: { color: '#8DD7CF', border: '#808F9D' },
    defaultColorCss: { color: '#C3CFD9', border: '#1AAE9E' },
    unavailableColorCss: { color: '#FBE192', border: '#F7C52B' }
  }

  const [condition, setCondition] = useState(false)
  const [style, setStyle] = useState({ color: '#FBE192', border: '#F7C52B' })

  function setColor(trigger) {
    if (trigger) {
      condition ? setStyle(css['defaultColorCss']) : setStyle(css['selectedColorCss'])
      setCondition(!condition)
      return style
    }

    handleSeatDescription()
    handleDefaultColor()
  }

  function clickedNumber(isAvailable) {
    isAvailable ? setColor(true) : alert('Esse assento não está disponível')
  }

  function handleSeatDescription() {
    isAvailable === undefined && setStyle(css[color])
  }

  function handleDefaultColor() {
    isAvailable && setStyle(css['defaultColorCss'])
  }

  return (
    <Number css={style} legend={legend} onClick={() => { clickedNumber(isAvailable) }}>{number}</Number>
  )
}

