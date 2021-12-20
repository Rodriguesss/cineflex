import { useEffect, useState } from 'react'
import { Number } from './style'

export default function SeatItem({ id, number, color, isAvailable, legend, setAssentArray, assentArray, assentArrayNumber, setAssentArrayNumber }) {
  useEffect(() => {
    setColor()
  }, [])

  const css = {
    selectedColorCss: { color: '#8DD7CF', border: '#808F9D' },
    defaultColorCss: { color: '#C3CFD9', border: '#1AAE9E' },
    unavailableColorCss: { color: '#FBE192', border: '#F7C52B' }
  }

  const [click, setClick] = useState(false)
  const [style, setStyle] = useState({ color: '#FBE192', border: '#F7C52B' })

  function setColor(trigger) {
    if (trigger) {
      click ? setDefaultColor() : setSelectedColor()
      setClick(!click)
      return style
    }

    handleSeatDescription()
    handleDefaultColor()
  }

  function clickedNumber(isAvailable) {
    handleIdentifyAvailable(isAvailable)
  }

  function handleIdentifyAvailable(isAvailable) {
    isAvailable ? setColor(true) : alert('Esse assento não está disponível')
  }

  function handleSeatDescription() {
    isAvailable === undefined && setStyle(css[color])
  }

  function handleDefaultColor() {
    isAvailable && setStyle(css['defaultColorCss'])
  }

  function setDefaultColor() {
    setStyle(css['defaultColorCss'])
    setAssentArray(arrayFilter(assentArray, id))
    setAssentArrayNumber(arrayFilter(assentArrayNumber, number))
  }

  function setSelectedColor() {
    setStyle(css['selectedColorCss'])
    setAssentArray(oldArray => [...oldArray, id].sort())
    setAssentArrayNumber(oldArray => [...oldArray, number].sort())
  }

  function arrayFilter(array, params) {
    return array.filter(item => item !== params).sort()
  }

  return (
    <Number css={style} legend={legend} onClick={() => { clickedNumber(isAvailable) }}>{number}</Number>
  )
}
