import { combineReducers } from "redux";
import { eventsReducer, uiReducer } from "../reducers";


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: eventsReducer,
    /* TODO:
        AuthReducer        
    */
});