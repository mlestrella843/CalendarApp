import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from "../components/Navbar";
import { addHours } from "date-fns";
import localizer from '../../helpers/calendarLocalizer';
import CalendarEventBox from '../components/CalendarEventBox';
import CalendarModal from '../components/CalendarModal';


const events = [{
  title: 'Boss Birthday',
  notes: 'Pick up the cake',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name:'Maria Luisa'
  }
 }]

const CalendarPage = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week' );

    const eventStyleGetter = ( event, start, end, isSelected ) => {
     // console.log( {event, start, end, isSelected });
            const style = {
              backgroundColor: '#347CF7',
              borderRadius: '0px',
              opacity: '0.8',
              color: 'white'
            }        
            return {
              style
            }       
      }

      const onDoubleClick = (event) => {
        console.log({ dobleClick:event });
      }

      const onSelect = (event) => {
        console.log({ click:event });
      }

      const onViewChanged = (event) => {
        // console.log({ viewChanged:event });
        localStorage.setItem( 'lastView', event );
        setLastView(event);
      }

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        eventPropGetter={ eventStyleGetter }
        components={ {
          event: CalendarEventBox
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  )
}

export default CalendarPage
