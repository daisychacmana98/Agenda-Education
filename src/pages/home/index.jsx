import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export const Home = () => {
	const myEventsList = [{}];

	return (
		<div>
			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
			/>
		</div>
	);
};
