import Time from "../Time";
import { Link } from "react-router-dom";

import './style.css'

export default function MovieTime({ showtimes }) {
    return (
        <div className="date-time">
            {showtimes.map(({ name, id }) => (
                <Link to={`/assentos/${id}`}>
                    <Time name={name} />
                </Link>
            ))}
        </div>
    )
}