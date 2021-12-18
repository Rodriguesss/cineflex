import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
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
        { label: "Nome do comprador:", placeholder: "Digite seu nome..." },
        { label: "CPF do computador:", placeholder: "Digite seu CPF..." }
    ]

    const dimesion = [
        { width: "58", heigth: "82" }
    ]

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)
        request.then((response) => { setData(response.data) })
    }, [])

    function addZeroNumberToTheLeft(number) {
        return parseInt(number) < 10 ? `0${number}` : number
    }

    return data === null
        ? (<p>Carregando</p>)
        : (
            <div className="scheduling">
                <PageTitle title="Selecione o(s) assento(s)" />
                <Seat>
                    {data.seats.map(({ name }) => (<SeatItem number={addZeroNumberToTheLeft(name)} css="default" />))}
                </Seat>
                <SeatDescription />
                <FormContainer>
                    {formData.map(({ label, placeholder }) => (<Form label={label} placeholder={placeholder} />))}
                    <Button name="Reservar assento(s)" />
                </FormContainer>
                <Footer url={data.movie.posterURL} title={data.movie.title} weekday={data.day.weekday} hour={data.name} seat={true} dimesion={dimesion} />
            </div>
        )
}