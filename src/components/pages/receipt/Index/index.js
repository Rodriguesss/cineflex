import { Link, useParams } from 'react-router-dom'

import Info from '../Info/index'
import Button from '../../../generic/Button'

import { Title, ContainerButton } from './style'

export default function Receipt(props) {
  const params = useParams();
  console.log(params)
  return (
    <>
      <Title>Pedido feito com sucesso!</Title>
      <Info title="Filme e sessões" item1="Enola Holmes" item2="24/06/2021 15:00" />
      <Info title="Ingressos" item1="Assento 15" item2="Assento 16" />
      <Info title="Comprador" item1="Nome: João da Silva Sauro" item2="CPF: 123.456.789-10" />
      <ContainerButton>
        <Link to="/">
          <Button name="Voltar pra Home" />
        </Link>
      </ContainerButton>
    </>
  )
}