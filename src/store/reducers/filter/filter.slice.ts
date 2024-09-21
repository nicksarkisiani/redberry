import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEstate} from "../../../types/store";

interface State {
    estates: IEstate[]
}

export const initialState: State = {
    estates: []
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        resetOrInitialize: (state, action: PayloadAction<IEstate[]>) => {
            state.estates = action.payload
            console.log(state)
        },
        filterByRegion: (state, action: PayloadAction<number>) => {
          state.estates = state.estates.filter(estate => estate.city.region_id === action.payload)
        },
        filterByCity: (state, action: PayloadAction<number>) => {
            state.estates = state.estates.filter(estate => estate.city_id === action.payload)
        },
        filterByBedrooms: (state, action: PayloadAction<number>) => {
            state.estates = state.estates.filter(estate => estate.bedrooms === action.payload)
        },
        filterByMinPrice: (state, action: PayloadAction<number>) => {
            state.estates = state.estates.filter(estate => estate.price > action.payload)
        },
        filterByMaxPrice: (state, action: PayloadAction<number>) => {
            state.estates = state.estates.filter(estate => estate.price < action.payload)
        }
    },

})

export default filterSlice.reducer

export const { resetOrInitialize } = filterSlice.actions;