import {combineReducers} from "@reduxjs/toolkit";
import estateReducer from './estate/estate.slice'
import locationReducer from "./location/location.slice";
import agentsReducer from "./agents/agents.slice";

export const rootReducer = combineReducers({
    estate: estateReducer,
    location: locationReducer,
    agents: agentsReducer
})

export type RootState = ReturnType<typeof rootReducer>