import MovieDate from '../MovieDate/index'

import './style.css'
import MovieTime from '../MovieTime/Index'

export default function ScheduleItem({ weekday, date, showtimes }) {
    return (
        <div className="schedule-item">
            <MovieDate weekday={weekday} date={date} />
            <MovieTime showtimes={showtimes} />
        </div>

    )
}