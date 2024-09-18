import {combineReducers} from "@reduxjs/toolkit";
import estateReducer from './estate/estate.slice'

export const rootReducer = combineReducers({
    estate: estateReducer
})

export type RootState = ReturnType<typeof rootReducer>