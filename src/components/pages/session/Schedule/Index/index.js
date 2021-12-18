import './style.css'

import ScheduleItem from '../ScheduleItem'

export default function Schedule({ data }) {
    return (
        <div className="schedule">
            {data.days.map(({ weekday, date, showtimes, id }) => (<ScheduleItem key={id} weekday={weekday} date={date} showtimes={showtimes} />))}
        </div>
    )
}