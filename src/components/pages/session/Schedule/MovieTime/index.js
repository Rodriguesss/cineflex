import { Link } from "react-router-dom";
import Button from "../../../../generic/Button";

import './style.css'

export default function MovieTime({ showtimes }) {
    return (
        <div className="date-time">
            {showtimes.map(({ name, id }) => (
                <Link to={`/assentos/${id}`}>
                    <Button name={name} />
                </Link>
            ))}
        </div>
    )
}