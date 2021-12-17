import './style.css'

export default function MovieDate({ weekday, date }) {
    return (
        <p className="movie-date">{weekday} - {date}</p>
    )
}