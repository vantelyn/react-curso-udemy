import { useState } from 'react';
import { actions, useDispatch, useSelector } from '../../context';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment'
import 'moment/locale/es';

import { messages } from '../../helpers/calendar-messages-es';

import { CalendarEvent } from './_CalendarEvent';
import { CalendarModal } from './_CalendarModal';

moment.locale('es');

const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

  const dispatch = useDispatch();
  
  const { events } = useSelector( state=> state.calendar );

  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' )

  const onDoubleClick = (e) => {
    dispatch( actions.uiOpenModal() );
  }
  
  const onSelectEvent = (e) => {
    dispatch( actions.eventSetActive( e ) );
  }
  
  const onSelectSlot = (e) => {
    dispatch( actions.eventClearActive() )
  }
  
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#367CAA',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <div className='calendar-screen'>
      
      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelectEvent }
        selectable={ true }
        onSelectSlot={ onSelectSlot }
        onView={ onViewChange }
        view={ lastView }
        on
        components={{
          event: CalendarEvent
        }}
      />

      <CalendarModal />
    </div>
  )
}
