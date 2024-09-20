import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$api} from "../../../http";

interface IAgent {
    id: number
    name: string
    surname: string
    avatar: string
}

interface State {
    agents: IAgent[]
    status: null | string
}

const initialState: State = {
    agents: [],
    status: null
}

export const fetchAgents = createAsyncThunk(
    "agents/fetchAgents",
    async function () {
        const response = await $api.get("/agents")
        return response.data
    }
)

export const agentsSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchAgents.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchAgents.fulfilled, (state, action) => {
            state.agents = action.payload
            state.status = null
        })
    }
})

export default agentsSlice.reducer