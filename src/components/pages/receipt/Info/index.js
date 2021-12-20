import { InfoContainer, Subtitle, Item } from './style.js'

export default function Info({ title, data }) {
  return (
    <InfoContainer>
      <Subtitle>{title}</Subtitle>
      {data.map(item => <Item key={item}>{item}</Item>)}
    </InfoContainer>
  )
}