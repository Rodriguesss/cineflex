import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

import './style.css'

import Footer from "../../../generic/Footer"
import Button from "../../../generic/Button"
import PageTitle from "../../../generic/PageTitle"

import Form from "../Form/Index"
import Seat from "../Seat/Index/index"
import SeatItem from "../Seat/SeatItem"
import FormContainer from "../FormContainer"
import SeatDescription from "../SeatDescription/Index"

export default function Scheduling({ setIdSeat }) {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [objAPI, setObjAPI] = useState({})
    const [inputCPF, setInputCPF] = useState(null)
    const [inputName, setInputName] = useState(null)
    const [assentArray, setAssentArray] = useState([])

    const formData = [
        { label: "Nome do comprador:", placeholder: "Digite seu nome...", cpf: false },
        { label: "CPF do comprador:", placeholder: "Digite seu CPF...", cpf: true }
    ]

    const dimesion = [
        { width: "58", heigth: "82" }
    ]

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)
        request.then((response) => {
            console.log(response.data)
            setData(response.data)
        })

        setIdSeat(id)
    }, [id])

    useEffect(() => {
        mountObjectAPI()
    }, [inputCPF, inputName, assentArray])

    function addZeroNumberToTheLeft(number) {
        return parseInt(number) < 10 ? `0${number}` : number
    }

    function mountObjectAPI() {
        setObjAPI({
            ids: assentArray,
            name: inputName,
            cpf: inputCPF
        })
        console.log(objAPI)
    }

    return data === null
        ? (<p>Carregando</p>)
        : (
            <div className="scheduling">
                <PageTitle title="Selecione o(s) assento(s)" />
                <Seat>
                    {data.seats.map(({ id, name, isAvailable }) => (<SeatItem key={name} id={id} number={addZeroNumberToTheLeft(name)} isAvailable={isAvailable} legend={false} setAssentArray={setAssentArray} assentArray={assentArray} />))}
                </Seat>
                <SeatDescription />
                <FormContainer>
                    {formData.map(({ label, placeholder, cpf }) => (<Form key={label} label={label} placeholder={placeholder} cpf={cpf} setInputName={setInputName} setInputCPF={setInputCPF} />))}
                    <Link to="/sucesso">
                        <Button name="Reservar assento(s)" objAPI={objAPI} />
                    </Link>
                </FormContainer>
                <Footer url={data.movie.posterURL} title={data.movie.title} weekday={data.day.weekday} hour={data.name} seat={true} dimesion={dimesion} />
            </div>
        )
}