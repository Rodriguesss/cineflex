import { InfoContainer, Subtitle, Item } from './style.js'

export default function Info({ title, item1, item2 }) {
  return (
    <InfoContainer>
      <Subtitle>{title}</Subtitle>
      <Item>{item1}</Item>
      <Item>{item2}</Item>
    </InfoContainer>
  )
}