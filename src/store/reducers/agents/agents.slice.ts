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
    error: boolean
}

const initialState: State = {
    agents: [],
    status: null,
    error: false
}

export const fetchAgents = createAsyncThunk(
    "agents/fetchAgents",
    async function () {
        const response = await $api.get("/agents")
        return response.data
    }
)

export const addAgent = createAsyncThunk(
    "agents/addAgent",
    async function (agent: FormData) {
        const response = await $api.post("/agents")
        if(!response) {
            throw Error()
        }
        const agents = await $api.get("/agents")
        return agents.data
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
        builder.addCase(fetchAgents.rejected, (state) => {
            state.status = null
            state.error = true
        })
        builder.addCase(addAgent.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(addAgent.fulfilled, (state, action) => {
            state.status = null
            state.agents = action.payload
        })
        builder.addCase(addAgent.rejected, (state) => {
            state.status = null
            state.error = true
        })
    }
})

export default agentsSlice.reducer