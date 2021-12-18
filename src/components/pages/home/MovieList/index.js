import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Movie from '../../../generic/Movie/index'

import './style.css'

export default function MovieList() {
    const [items, setItems] = useState([])

    const dimesion = [
        { width: "135", heigth: "199" }
    ]

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        request.then((response) => {
            setItems(response.data)
        })
    }, [])

    return items === null
        ? (<p>Carregando</p>)
        : <div className="movie-container">
            {items.map(({ posterURL, title, id }) => (
                <Link to={`/session/${id}`} key={id}>
                    <Movie url={posterURL} title={title} dimesion={dimesion} />
                </Link>)
            )}
        </div>
}