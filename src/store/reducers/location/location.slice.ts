import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$api} from "../../../http";
import {ICity, IRegion} from "../../../types/store";

interface State {
    regions: IRegion[]
    cities: ICity[]
    status: null | string
}

const initialState: State = {
    regions: [],
    cities: [],
    status: null
}

export const fetchData = createAsyncThunk(
    "location/fetchData",
    async function () {
        const responseRegions = await $api.get("/regions")
        const responseCities = await $api.get('/cities');
        return {
            regions: responseRegions.data,
            cities: responseCities.data
        }
    }
)


export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.cities = action.payload.cities
            state.regions = action.payload.regions
            state.status = null
        })
    }
})

export default locationSlice.reducer