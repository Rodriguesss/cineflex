import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PageTitle from '../../../generic/PageTitle/index'
import Footer from '../../../generic/Footer/index'
import Schedule from '../Schedule/Index/index'

export default function Session() {
    const { id } = useParams()
    const [schedules, setSchedules] = useState([])
    const [posterURL, setPosterURL] = useState([])
    const [showtime, setShowtime] = useState([])
    const [weekday, setWeekday] = useState([])
    const [title, setTitle] = useState([])

    const dimesion = [
        { width: "58", heigth: "82" }
    ]

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`)
        request.then((response) => {
            console.log(response.data)
            setSchedules(response.data.days)
            setPosterURL(response.data.posterURL)
            setTitle(response.data.title)
        })
    }, [])

    return schedules === null
    ? (<p>Carregando</p>)
    : (
        <>
            <PageTitle title="Selecione o horário" />
            {schedules.map(({weekday, date, showtimes}) => (<Schedule weekday={weekday} date={date} showtimes={showtimes} setShowtime={setShowtime} 
            setWeekday={setWeekday} />))}
            <Footer url={posterURL} title={title} weekday={weekday} hour={showtime} seat={false} dimesion={dimesion} />
        </>
    )
}