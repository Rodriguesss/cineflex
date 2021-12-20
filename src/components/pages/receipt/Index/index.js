import { Link } from 'react-router-dom'
import Info from '../Info/index'
import Button from '../../../generic/Button'
import { Title, ContainerButton } from './style'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

export default function Receipt({ objSucess: { response, seat, person: { name, cpf } } }) {
  const [obj, setObj] = useState([])

  useEffect(() => {
    setObj([
      { title: 'Filme e sessão', data: [response.movie.title, `${response.day.date} ${response.name}`] },
      { title: 'Ingressos', data: seat },
      { title: 'Comprador', data: [`Nome: ${name}`, `CPF: ${cpf}`] }
    ])
  }, [])

  return (
    <>
      <Title>Pedido feito com sucesso!</Title>
      {obj.map(({ title, data }) => <Info key={title} title={title} data={data} />)}

      <ContainerButton>
        <Link to="/">
          <Button name="Voltar pra Home" />
        </Link>
      </ContainerButton>
    </>
  )
}