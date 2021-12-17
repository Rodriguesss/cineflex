import MovieDate from '../MovieDate/index'

import './style.css'
import MovieTime from '../MovieTime/Index'

export default function Schedule({ weekday, date, showtimes, setShowtime, setWeekday }) {
    return (
        <div className="schedule" onClick={() => {setWeekday(weekday)}}>
            <MovieDate weekday={weekday} date={date} />
            <MovieTime showtimes={showtimes} setShowtime={setShowtime} />
        </div>

    )
}