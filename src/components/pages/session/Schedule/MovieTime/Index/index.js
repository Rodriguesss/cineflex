import Time from "../Time";
import { Link } from "react-router-dom";

import './style.css'

export default function MovieTime({ showtimes, setShowtime, id }) {
    return (
        <div className="date-time">
            {showtimes.map(({ name }) => (
                <Link to={`/assentos/${id}`}>
                    <Time name={name} setShowtime={setShowtime} />
                </Link>
            ))}
        </div>
    )
}