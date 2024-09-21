import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$api} from "../../../http";
import {IEstate} from "../../../types/store";
import {initialize} from "../filter/filter.slice";
import {AxiosResponse} from "axios";

export const fetchEstates = createAsyncThunk(
    'estate/fetchEstates',
    async function (_, thunkAPI): Promise<IEstate[]> {
        const response: AxiosResponse<IEstate[]> = await $api.get('/real-estates');
        console.log(response.data)
        thunkAPI.dispatch(initialize(response.data))
        return response.data;
    }
)

export const addEstate = createAsyncThunk(
    "estate/addEstate",
    async function (estate: FormData): Promise<IEstate[]> {
        const response: AxiosResponse<IEstate> = await $api.post("/real-estates", estate)
        if(!response) {
            throw Error()
        }
        const estates: AxiosResponse<IEstate[]> = await $api.get("/real-estates")
        return estates.data
    }
)

interface State {
    estates: IEstate[]
    status: null | string
    error: boolean
}

const initialState: State = {
    estates: [],
    status: null,
    error: false
}

export const estateSlice = createSlice({
    name: "estate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEstates.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchEstates.fulfilled, (state, action) => {
                state.estates = action.payload
                state.status = null
            })
            .addCase(fetchEstates.rejected, (state) => {
                state.status = null
                state.error = true
            })
            .addCase(addEstate.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(addEstate.fulfilled, (state, action) => {
                state.status = null
                state.estates = action.payload
            })
            .addCase(addEstate.rejected, (state) => {
                state.status = "Loading"
                state.error = true
            })
    }
})

export default estateSlice.reducer