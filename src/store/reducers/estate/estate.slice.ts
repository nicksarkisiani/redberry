import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$api} from "../../../http";

export const fetchEstates = createAsyncThunk(
    'estate/fetchEstates',
    async function () {
        const response = await $api.get('/real-estates');
        return response.data;
    }
)

interface State {
    estates: []
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