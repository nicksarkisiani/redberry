import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEstate} from "../../../types/store";

interface State {
    estates: IEstate[]
    filter: IEstate[]
}

export const initialState: State = {
    estates: [],
    filter: []
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        initialize: (state, action: PayloadAction<IEstate[]>) => {
            state.estates = action.payload
            state.filter = action.payload
        },
        reset:(state) => {
          state.filter = state.estates
        },
        filterByRegion: (state, action: PayloadAction<number>) => {
          state.filter = state.estates.filter(estate => estate.city.region_id === action.payload)
        },
        filterByArea: (state, action: PayloadAction<number>) => {
            state.filter = state.estates.filter(estate => estate.area === action.payload)
        },
        filterByBedrooms: (state, action: PayloadAction<number>) => {
            state.filter = state.estates.filter(estate => estate.bedrooms === action.payload)
        },
        filterByMinPrice: (state, action: PayloadAction<number>) => {
            state.filter = state.estates.filter(estate => estate.price > action.payload)
        },
        filterByMaxPrice: (state, action: PayloadAction<number>) => {
            state.filter = state.estates.filter(estate => estate.price < action.payload)
        }
    },

})

export default filterSlice.reducer

export const { initialize } = filterSlice.actions;