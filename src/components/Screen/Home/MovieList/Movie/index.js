import { Link } from 'react-router-dom'
import './style.css'

export default function Movie({ url, title, id }) {
    return (
        <Link to={`/session/${id}`}>
            <div className="movie-item">
                <img src={url} alt={title} />
            </div>
        </Link>
    )
}