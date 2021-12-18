import MovieDate from '../MovieDate/index'

import './style.css'
import MovieTime from '../MovieTime/Index'

export default function ScheduleItem({ weekday, date, showtimes, setShowtime, setWeekday, id }) {
    return (
        <div className="schedule-item" onClick={() => {setWeekday(weekday)}}>
            <MovieDate weekday={weekday} date={date} />
            <MovieTime showtimes={showtimes} setShowtime={setShowtime} id={id} />
        </div>

    )
}