import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$api} from "../../../http";
import {IEstate} from "../../../types/store";
import {resetOrInitialize} from "../filter/filter.slice";
import {AxiosResponse} from "axios";

export const fetchEstates = createAsyncThunk(
    'estate/fetchEstates',
    async function (_ , thunkAPI): Promise<IEstate[]> {
        const response: AxiosResponse<IEstate[]> = await $api.get('/real-estates');
        thunkAPI.dispatch(resetOrInitialize(response.data))
        return response.data;
    }
)

interface State {
    estates: IEstate[]
    status: null | string
}

const initialState: State = {
    estates: [],
    status: null
}

export const estateSlice = createSlice({
    name: "estate",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEstates.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchEstates.fulfilled, (state, action) => {
                state.estates = action.payload
                state.status = null
        })
    }
})

export default estateSlice.reducer