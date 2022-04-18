import { types } from "../types/types";

import moment from "moment";

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleaños madre',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar la tarta',
        user: {
            _id: '123',
            name: 'Fernandinhooo'
        }
    }],
    activeEvent: null
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventAdded:
            return {
                ...state,
                events: [
                    action.payload,
                    ...state.events
                ]
            }
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: {
                    ...action.payload
                }
            }
        case types.eventClearActive:
            return {
                ...state,
                activeEvent: null
            }
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map( event=> {
                    return (event.id===action.payload.id)?action.payload:event;
                })
            }
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter( event=> event.id !== state.activeEvent.id),
                activeEvent: null
            }
        default:
            return state;
    }
}