
// const statePrototye = {
//     notes: [],
//     // active: null,
//     active: {
//         id: '123455',
//         title: '',
//         body: '',
//         imageUrl: '',
//         date: 1231231231
//     }
// }

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [
                    ...action.payload
                ]
            }

        case types.noteUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => (action.payload.id === note.id) ? action.payload : note
                )
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(
                    note => action.payload !== note.id
                )
            }

        case types.notesAddNew:
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes
                ]
            }
        case types.notesLogoutCleaning:
            return {
                ...initialState
            }

        default:
            return state;
    }
}