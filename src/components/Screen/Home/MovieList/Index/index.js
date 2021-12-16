import { useEffect, useState } from 'react'
import axios from 'axios'

import Movie from '../Movie/index'

import './style.css'

export default function MovieList() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        request.then((response) => {
            console.log(response)
            setItems(response.data)
        })
    }, [])

    return items === null
        ? (<p>Carregando</p>)
        : <div className="movie-container">
            {items.map(({ posterURL, title, id }) => (<Movie url={posterURL} title={title} id={id} />))}
        </div>
}