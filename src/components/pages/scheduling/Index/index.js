import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

import './style.css'

import PageTitle from "../../../generic/PageTitle"
import Footer from "../../../generic/Footer"
import Seat from "../Seat/Index/index"
import SeatItem from "../Seat/SeatItem"
import SeatDescription from "../SeatDescription/Index"
import Form from "../Form/Index"
import FormContainer from "../FormContainer"
import Button from "../../../generic/Button"

export default function Scheduling() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    const formData = [
        { label: "Nome do comprador:", placeholder: "Digite seu nome...", cpf: false },
        { label: "CPF do comprador:", placeholder: "Digite seu CPF...", cpf: true }
    ]

    const dimesion = [
        { width: "58", heigth: "82" }
    ]

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)
        request.then((response) => { setData(response.data) })
    }, [id])

    function addZeroNumberToTheLeft(number) {
        return parseInt(number) < 10 ? `0${number}` : number
    }

    return data === null
        ? (<p>Carregando</p>)
        : (
            <div className="scheduling">
                <PageTitle title="Selecione o(s) assento(s)" />
                <Seat>
                    {data.seats.map(({ name, isAvailable }) => (<SeatItem key={name} number={addZeroNumberToTheLeft(name)} isAvailable={isAvailable} legend={false} />))}
                </Seat>
                <SeatDescription />
                <FormContainer>
                    {formData.map(({ label, placeholder, cpf }) => (<Form key={label} label={label} placeholder={placeholder} cpf={cpf} />))}
                    <Link to="/sucesso">
                        <Button name="Reservar assento(s)" />
                    </Link>
                </FormContainer>
                <Footer url={data.movie.posterURL} title={data.movie.title} weekday={data.day.weekday} hour={data.name} seat={true} dimesion={dimesion} />
            </div>
        )
}