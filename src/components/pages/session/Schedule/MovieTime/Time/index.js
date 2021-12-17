import './style.css'

export default function Time({ name, setShowtime }) {
    return (
        <p className="time" onClick={() => {setShowtime(name)}}>{name}</p>
    )
}