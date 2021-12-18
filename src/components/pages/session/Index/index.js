import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PageTitle from '../../../generic/PageTitle/index'
import Footer from '../../../generic/Footer/index'
import Schedule from '../Schedule/Index/index'

export default function Session() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    const dimesion = [
        { width: "58", heigth: "82" }
    ]

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`)
        request.then((response) => { setData(response.data)
        console.log(response.data) })
    }, [id])

    return data === null
        ? (<p>Carregando</p>)
        : (
            <>
                <PageTitle title="Selecione o horário" />
                <Schedule data={data} />
                <Footer url={data.posterURL} title={data.title} seat={false} dimesion={dimesion} />
            </>
        )
}