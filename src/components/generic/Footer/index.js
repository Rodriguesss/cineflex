import Movie from "../Movie"

import './style.css'

export default function Footer({ url, title, weekday, hour, seat, dimesion }) {
    return (
        <footer>
            <Movie url={url} title={title} dimesion={dimesion} />
            <div>
                <h1>{title}</h1>
                {seat && <p>{weekday} - {hour}</p>}
            </div>
        </footer>
    )
}