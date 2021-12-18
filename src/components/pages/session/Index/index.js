import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PageTitle from '../../../generic/PageTitle/index'
import Footer from '../../../generic/Footer/index'
import Schedule from '../Schedule/Index/index'
import ScheduleItem from '../Schedule/ScheduleItem/index'

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
            console.log(response)
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
                <Schedule>
                    {schedules.map(({ id, weekday, date, showtimes }) => (<ScheduleItem weekday={weekday} date={date} showtimes={showtimes} setShowtime={setShowtime}
                        setWeekday={setWeekday} id={id} />))}
                </Schedule>
                <Footer url={posterURL} title={title} weekday={weekday} hour={showtime} seat={false} dimesion={dimesion} />
            </>
        )
}